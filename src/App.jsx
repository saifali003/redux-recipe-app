import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeFavorite from "./pages/RecipeFavorite";
import RecipeDetail from "./pages/RecipeDetail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex grow p-4 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<RecipeFavorite />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}