import { Link } from "react-router-dom";
import { addToFavorite } from "../features/favoriteRecipe";
import { useDispatch } from "react-redux";

export default function RecipeCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col w-full">

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="w-full h-48 object-fit hover:scale-110 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col justify-between grow">

        {/* TITLE */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-12">
          {item.strMeal}
        </h2>

        {/* BUTTONS */}
        <div className="flex gap-3 ">

          <button
            onClick={() => dispatch(addToFavorite(item))}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 transition text-sm"
          >
            ❤️ Favorite
          </button>

          <Link
            to={`/recipe/${item.idMeal}`}
            state={{ recipe: item }}
            className="flex-1 text-center bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition text-sm"
          >
            View
          </Link>

        </div>

      </div>
    </div>
  );
}