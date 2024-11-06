export default function Item({foodItem, onSelect}){

    let {name, quantity, category} = foodItem;
    
        return(
            <main>
                <ul style={{margin:10, color:"white", background:"grey", width:250}} onClick={() => onSelect(meal)}>
                    <li>name: {name}</li>
                    <li>quantity: {quantity}</li>
                    <li>category: {category}</li>
                </ul>
            </main>
        );
    }