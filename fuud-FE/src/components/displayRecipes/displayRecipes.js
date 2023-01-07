import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import img from "../../img/food.png";
import styles from "./displayRecipes.module.css";
import { recipeActions } from "../../store/recipeSlice";
import { getOneRecipe } from "../../store/recipe-actions";

const DisplayRecipes = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);
  // const _id = useSelector((state) => state.recipe.currentRecipeId);
  // const currentRecipe = useSelector((state) => state.recipe.currentRecipe);

  const clickLinkHandler = async (_ID) => {
    await dispatch(recipeActions.storeCurrentId(_ID));
    dispatch(getOneRecipe(_ID));
  };

  // useEffect(() => {
  //   console.log(recipes);
  //   console.log({ currentRecipe });
  // }, [recipes, currentRecipe]);
  return (
    <div className={styles.recipes}>
      <ul className={styles["results-ul"]}>
        {recipes?.map((recipe, i) => (
          <li
            key={i}
            className={styles["preview-li"]}
            onClick={() => clickLinkHandler(recipe._id)}
          >
            <a className={styles["preview-link"]} href="#23456">
              <figure className={styles["preview-fig"]}>
                <img src={img} alt="Test" />
              </figure>
              <div className={styles["preview-data"]}>
                <h4 className={styles["preview-title"]}>{recipe.title}</h4>
                <p className={styles["preview-publisher"]}>
                  {recipe.difficulty}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayRecipes;
