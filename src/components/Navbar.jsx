import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/recipeSearch";
import { Link } from "react-router-dom";
export default function Navbar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);
  const favorite = useSelector((state) => state.favorite.favorites);
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 fixed top-0 z-50 w-full">
      <h1 className="text-xl font-bold">🍔 Recipe App</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="px-3 py-1 rounded bg-white w-150 text-black"
        />
        <Link to="/" className="hover:text-yellow-400 text-xl hover:underline font-bold">Home</Link>
        <Link to="/favorite" className="hover:text-yellow-400 text-xl hover:underline font-bold">
          ❤️Favorite ({favorite.length})
        </Link>
      </div>
    </nav>
  );
}