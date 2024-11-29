"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data.recipes));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-2xl text-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-12">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center"
          >
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={100}
              height={100}
              className="w-full h-auto object-cover rounded-t-lg mb-4"
            />
            <Link href={`/week8/${recipe.id}`}>
              <p className="text-lg font-semibold text-center text-blue-600 hover:text-blue-800">
                {recipe.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
