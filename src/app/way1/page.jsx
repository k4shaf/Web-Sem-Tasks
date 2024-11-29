import Link from 'next/link';
import Image from 'next/image';

async function getData() {
    let response = await fetch('https://dummyjson.com/recipes')
    let res = await response.json()
    return res.recipes;
}
export default async function Recipes() {
    let recipes = await getData();

    return (
        <div className="min-h-screen bg-gray-100 p-12">
            <h1 className="text-4xl font-bold text-center mb-8">Recipe List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recipes?.map((recipe) => (
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
