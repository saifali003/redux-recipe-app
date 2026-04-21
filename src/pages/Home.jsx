import { useDispatch, useSelector } from "react-redux";
import { setRecipe } from "../features/recipeSlice";
import axios from "axios";
import { useEffect } from "react";
import { setCategory } from "../features/recipeSearch";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.recipe.list);
  const { query, category } = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        dispatch(setRecipe(res.data.meals || []));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query, dispatch]);

  const filtered = list.filter((item) => {
    if (category === "veg") {
      return !["Beef", "Chicken", "Seafood"].includes(item.strCategory);
    }
    if (category === "nonveg") {
      return ["Beef", "Chicken", "Seafood"].includes(item.strCategory);
    }
    return true;
  });

  return (
    <div className="w-full px-6">

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => dispatch(setCategory("all"))}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          All
        </button>

        <button
          onClick={() => dispatch(setCategory("veg"))}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Veg
        </button>

        <button
          onClick={() => dispatch(setCategory("nonveg"))}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Non-Veg
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <RecipeCard key={item.idMeal} item={item} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No recipes found 😢
          </p>
        )}
      </div>

    </div>
  );
}