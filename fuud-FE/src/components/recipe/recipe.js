import { useSelector, useDispatch } from "react-redux";
import {
  ClockCircleOutlined,
  StarOutlined,
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import fuudImg from "../../img/food.png";
import styles from "./recipe.module.css";
import { getOneRecipe } from "../../store/recipe-actions";
import { deleteRecipeById } from "../../store/recipe-actions";
import { recipeActions } from "../../store/recipeSlice";
import EditRecipeModal from "./editRecipe/editRecipeModal";

// import { useEffect } from "react";

const Recipe = (props) => {
  const recipeData = useSelector((state) => state.recipe.currentRecipe?.data);

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const mockObj = {
    _id: "",
    title: "<recipe Title>",
    difficulty: "--",
    preparationTime: "--",
    ingredients: [],
    directions: "--",
  };
  const mockIngr = {
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    ingredient9: "",
    ingredient10: "",
  };
  const ingredientsObj = {};
  recipeData?.ingredients.map((el, i) => {
    switch (i) {
      case 0:
        Object.assign(ingredientsObj, { ingredient1: el });
        break;
      case 1:
        Object.assign(ingredientsObj, { ingredient2: el });
        break;
      case 2:
        Object.assign(ingredientsObj, { ingredient3: el });
        break;
      case 3:
        Object.assign(ingredientsObj, { ingredient4: el });
        break;
      case 4:
        Object.assign(ingredientsObj, { ingredient5: el });
        break;
      case 5:
        Object.assign(ingredientsObj, { ingredient6: el });
        break;
      case 6:
        Object.assign(ingredientsObj, { ingredient7: el });
        break;
      case 7:
        Object.assign(ingredientsObj, { ingredient8: el });
        break;
      case 8:
        Object.assign(ingredientsObj, { ingredient9: el });
        break;
      case 9:
        Object.assign(ingredientsObj, { ingredient10: el });
        break;
      default:
        break;
    }
  });
  const { _id, title, difficulty, preparationTime, ingredients, directions } =
    recipeData === undefined ? mockObj : recipeData;
  const currentIngredients =
    recipeData === undefined ? mockIngr : ingredientsObj;
  const currentRecipe = recipeData === undefined ? mockObj : recipeData;
  const minutes =
    preparationTime === undefined ? "not specified" : preparationTime;
  const directions1 = directions === undefined ? "not specified" : directions;

  const deleteRecipeHandler = () => {
    alert("Are you sure you want to delete this recipe?");
    if (_id !== "") {
      dispatch(deleteRecipeById(_id));
      dispatch(recipeActions.emptyCurrentRecipe());
    }
  };

  return (
    <div className={styles.recipe}>
      <figure className={styles["recipe-fig"]}>
        <img src={fuudImg} alt="Tomato" className={styles["recipe-img"]} />
        <h1 className={styles["recipe-title"]}>
          <span>{title}</span>
        </h1>
      </figure>

      <div className={styles["recipe-details"]}>
        <div className={styles["recipe-info"]}>
          <ClockCircleOutlined className={styles["clock-icon"]} />
          <span className={styles["recipe-info-data"]}>{minutes}</span>
          {/* <span className={styles["recipe-info-text"]}>minutes</span> */}
        </div>
        <div className={styles["recipe-edit-icons"]}>
          <button className={styles["btn-round"]} onClick={showModal}>
            <EditOutlined className={styles["star-icon"]} />
          </button>
          <EditRecipeModal
            isOpen={isModalOpen}
            closeModal={toggle}
            currRecipe={currentRecipe}
            currIngredients={currentIngredients}
          />
          <button className={styles["btn-round"]} onClick={deleteRecipeHandler}>
            <DeleteOutlined className={styles["star-icon"]} />
          </button>
          <button className={styles["btn-round"]}>
            <StarOutlined className={styles["star-icon"]} />
          </button>
        </div>
      </div>

      <div className={styles["recipe-ingredients"]}>
        <h2 className={styles["recipe-ingredients-heading"]}>
          Recipe ingredients
        </h2>
        <ul className={styles["recipe-ingredient-list"]}>
          {ingredients?.map((ing, i) => (
            <li key={i} className={styles["recipe-ingredient"]}>
              <CheckOutlined className={styles["recipe-icon"]} />
              {/* <div className={styles["recipe-quantity"]}>2</div> */}
              <div className={styles["recipe-description"]}>
                {/* <span className="recipe__unit"></span> */}
                {ing}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles["recipe-directions"]}>
        <h2 className={styles["recipe-ingredients-heading"]}>How to cook it</h2>
        <p className={styles["recipe-directions-text"]}>{directions1}</p>
      </div>
    </div>
  );
};

export default Recipe;
