"use client";

import { useState, useEffect } from 'react';

export default function RecipeDetail({ params }) {
    const id = params.recipe;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://dummyjson.com/recipes/${id}`)
                .then(res => res.json())
                .then(data => setRecipe(data));
        }
    }, [id]);

    if (!recipe) {
        return (

            <div className="flex items-center justify-center h-screen">
                <div className="text-center text-2xl text-bold">Loading...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
                <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
                <img src={recipe.image} alt={recipe.name} className="w-full h-auto mb-6 rounded-lg" />
                <p className="mb-4"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p className="mb-4"><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p className="mb-4"><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                <p className="mb-4"><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p className="mb-4"><strong>Servings:</strong> {recipe.servings}</p>
                <h2 className="text-2xl font-bold mt-6 mb-4">Ingredients</h2>
                <ul className="list-disc list-inside mb-4">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2 className="text-2xl font-bold mt-6 mb-4">Instructions</h2>
                <ol className="list-decimal list-inside">
                    {recipe.instructions.map((step, index) => (
                        <li key={index} className="mb-2">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
