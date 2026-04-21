import { useLocation } from "react-router-dom";

export default function RecipeDetail() {
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) return <p>No data found</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <img
        src={recipe.strMealThumb}
        className="w-full h-80 object-cover rounded"
      />

      <h2 className="text-2xl font-bold mt-4">{recipe.strMeal}</h2>

      <p className="mt-3 text-gray-700">{recipe.strInstructions}</p>
    </div>
  );
}