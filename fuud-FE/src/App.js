import "./App.css";

import Header from "./components/header/header";
import DisplayRecipes from "./components/displayRecipes/displayRecipes";
import Recipe from "./components/recipe/recipe";
import { useSelector } from "react-redux";
import EN_CST from "./constants/en-recipeConstants";
import RO_CST from "./constants/ro-recipeConstants";

function App() {
  const tglLng = useSelector((state) => state.recipe?.toggleLang);
  return (
    <div>
      <div className="container">
        <Header />
        <DisplayRecipes />
        <Recipe />

        <p className="copyright">
          {tglLng ? EN_CST.COPYRIGHT_MESSAGE : RO_CST.COPYRIGHT_MESSAGE}
        </p>
      </div>
    </div>
  );
}

export default App;
