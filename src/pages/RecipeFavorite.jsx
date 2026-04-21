import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../features/favoriteRecipe";
import { Link } from "react-router-dom";

export default function RecipeFavorite() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">❤️ Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div key={item.idMeal} className="bg-white p-4 rounded shadow">
              <img src={item.strMealThumb} className="rounded" />

              <h2 className="mt-2 font-semibold">{item.strMeal}</h2>

              <div className="flex justify-between mt-3">
                <button
                  onClick={() => dispatch(removeFromFavorite(item.idMeal))}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>

                <Link
                  to={`/recipe/${item.idMeal}`}
                  state={{ recipe: item }}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}