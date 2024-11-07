'use client';

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Handle GitHub sign in
    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in with GitHub:", error);
        }
    };

    // Handle sign out
    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-2xl mx-auto">
                {user ? (
                    // User is logged in
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Shopping List App</h1>
                        <p className="text-lg">
                            Welcome, {user.displayName} ({user.email})
                        </p>
                        <div className="space-x-4">
                            <Link 
                                href="/week-10/shopping-list" 
                                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Go to Shopping List
                            </Link>
                            <button 
                                onClick={handleSignOut}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    // User is not logged in
                    <div className="text-center space-y-4">
                        <h1 className="text-2xl font-bold">Shopping List App</h1>
                        <p className="text-lg">Please log in to continue</p>
                        <button 
                            onClick={handleSignIn}
                            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
                        >
                            Login with GitHub
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}