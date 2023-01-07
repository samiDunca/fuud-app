import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";

import styles from "./editRecipeModal.module.css";
import { updateRecipeById } from "../../../store/recipe-actions";

const EditRecipeModal = (props) => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({});
  const [ingr, setIngr] = useState({});

  useEffect(() => {
    setRecipe(props.currRecipe);
    setIngr(props.currIngredients);
  }, [props.currRecipe, props.currIngredients]);

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "title":
        setRecipe((prevState) => ({
          ...prevState,
          title: e.target.value,
        }));
        break;
      case "difficulty":
        setRecipe((prevState) => ({
          ...prevState,
          difficulty: e.target.value,
        }));
        break;
      case "preparationTime":
        setRecipe((prevState) => ({
          ...prevState,
          preparationTime: e.target.value,
        }));
        break;
      case "directions":
        setRecipe((prevState) => ({
          ...prevState,
          directions: e.target.value,
        }));
        break;
      case "directions":
        setRecipe((prevState) => ({
          ...prevState,
          directions: e.target.value,
        }));
        break;
      case "ingredient1":
        setIngr((prevState) => ({
          ...prevState,
          ingredient1: e.target.value,
        }));
        break;
      case "ingredient2":
        setIngr((prevState) => ({
          ...prevState,
          ingredient2: e.target.value,
        }));
        break;
      case "ingredient3":
        setIngr((prevState) => ({
          ...prevState,
          ingredient3: e.target.value,
        }));
        break;
      case "ingredient4":
        setIngr((prevState) => ({
          ...prevState,
          ingredient4: e.target.value,
        }));
        break;
      case "ingredient5":
        setIngr((prevState) => ({
          ...prevState,
          ingredient5: e.target.value,
        }));
        break;
      case "ingredient6":
        setIngr((prevState) => ({
          ...prevState,
          ingredient6: e.target.value,
        }));
        break;
      case "ingredient7":
        setIngr((prevState) => ({
          ...prevState,
          ingredient7: e.target.value,
        }));
        break;
      case "ingredient8":
        setIngr((prevState) => ({
          ...prevState,
          ingredient8: e.target.value,
        }));
        break;
      case "ingredient9":
        setIngr((prevState) => ({
          ...prevState,
          ingredient9: e.target.value,
        }));
        break;
      case "ingredient10":
        setIngr((prevState) => ({
          ...prevState,
          ingredient10: e.target.value,
        }));
        break;
      default:
        break;
    }
  };

  const handleOk = () => {
    const ingredients = Object.values(ingr);
    const ingredientsFiltered = ingredients.filter((el) => el.length > 0);
    const recipeForUpdate = { ...recipe, ingredients: ingredientsFiltered };
    dispatch(updateRecipeById(recipe._id, recipeForUpdate));
    props.closeModal();
  };

  const handleCancel = () => {
    props.closeModal();
  };

  return (
    <>
      <Modal
        title="Edit recipe"
        open={props.isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <form className={styles.upload}>
          <div className={styles["upload-column"]}>
            <h3 className={styles["upload-heading"]}>Recipe data</h3>
            <label>Title</label>
            <input
              name="title"
              type="text"
              value={recipe.title}
              onChange={handleOnChange}
              required
            />
            <label>Prep time</label>
            <input
              name="preparationTime"
              type="text"
              placeholder="Format: 'numbers,Unit'"
              value={recipe.preparationTime}
              onChange={handleOnChange}
              required
            />
            <label>Difficulty</label>
            <select
              name="difficulty"
              value={recipe.difficulty}
              onChange={handleOnChange}
              required
            >
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="challenging">challenging</option>
            </select>
            <label>Directions</label>
            <textarea
              name="directions"
              type="text"
              placeholder="quide us to your recipe"
              value={recipe.directions}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className={styles["upload-column"]}>
            <h3 className={styles["upload-heading"]}>Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              type="text"
              name="ingredient1"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient1}
              onChange={handleOnChange}
              required
            />
            <label>Ingredient 2</label>
            <input
              type="text"
              name="ingredient2"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient2}
              onChange={handleOnChange}
            />
            <label>Ingredient 3</label>
            <input
              type="text"
              name="ingredient3"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient3}
              onChange={handleOnChange}
            />
            <label>Ingredient 4</label>
            <input
              type="text"
              name="ingredient4"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient4}
              onChange={handleOnChange}
            />
            <label>Ingredient 5</label>
            <input
              type="text"
              name="ingredient5"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient5}
              onChange={handleOnChange}
            />
            <label>Ingredient 6</label>
            <input
              type="text"
              name="ingredient6"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient6}
              onChange={handleOnChange}
            />
            <label>Ingredient 7</label>
            <input
              type="text"
              name="ingredient7"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient7}
              onChange={handleOnChange}
            />
            <label>Ingredient 8</label>
            <input
              type="text"
              name="ingredient8"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient8}
              onChange={handleOnChange}
            />
            <label>Ingredient 9</label>
            <input
              type="text"
              name="ingredient9"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient9}
              onChange={handleOnChange}
            />
            <label>Ingredient 10</label>
            <input
              type="text"
              name="ingredient10"
              placeholder="Format: 'Quantity,Unit,Description'"
              value={ingr.ingredient10}
              onChange={handleOnChange}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditRecipeModal;

// let recipeData = useSelector((state) => state.recipe.currentRecipe?.data);
// const mockObj = {
//   _id: "",
//   title: "<recipe Title>",
//   difficulty: "--",
//   preparationTime: "--",
//   ingredients: [],
//   directions: "--",
// };
// const { _id, title, difficulty, preparationTime, ingredients, directions } =
//   recipeData === undefined ? mockObj : recipeData;
