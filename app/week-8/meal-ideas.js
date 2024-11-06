"use client"
import { useEffect, useState } from "react"

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals?.map(meal => ({
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strMealThumb: meal.strMealThumb
            })) || [];
        } catch (error) {
            console.error('Error fetching meals:', error);
            return [];
        }
    };

    const fetchMealDetails = async (mealId) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            const meal = data.meals[0];
            
            // Extract ingredients and measurements
            const ingredientsList = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                
                if (ingredient && ingredient.trim()) {
                    ingredientsList.push({
                        ingredient: ingredient.trim(),
                        measure: measure?.trim() || ''
                    });
                }
            }
            return ingredientsList;
        } catch (error) {
            console.error('Error fetching meal details:', error);
            return [];
        }
    };

    const handleMealClick = async (meal) => {
        if (selectedMeal === meal.idMeal) {
            setSelectedMeal(null);
            setIngredients([]);
        } else {
            setSelectedMeal(meal.idMeal);
            const mealIngredients = await fetchMealDetails(meal.idMeal);
            setIngredients(mealIngredients);
        }
    };

    const loadMealIdeas = async () => {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
        setSelectedMeal(null);
        setIngredients([]);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-2xl font-bold mb-4 text-black">
                Meal Ideas for {ingredient}
            </h2>
            {meals.length === 0 && ingredient && (
                <p className="text-black">No meal ideas found for {ingredient}</p>
            )}
            <ul className="grid gap-4">
                {meals.map((meal) => (
                    <div key={meal.idMeal}>
                        <li 
                            onClick={() => handleMealClick(meal)}
                            className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                        >
                            <img 
                                src={meal.strMealThumb} 
                                alt={meal.strMeal}
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                            <h3 className="text-lg font-semibold text-black">{meal.strMeal}</h3>
                        </li>
                        {selectedMeal === meal.idMeal && ingredients.length > 0 && (
                            <div className="ml-32 mt-2 p-4 bg-gray-100 rounded-lg">
                                <h4 className="font-semibold text-black mb-2">Ingredients:</h4>
                                <ul className="list-disc pl-4">
                                    {ingredients.map((ing, index) => (
                                        <li key={index} className="text-black">
                                            {ing.measure} {ing.ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}