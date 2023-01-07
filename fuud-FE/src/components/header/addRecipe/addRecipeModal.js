// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { useRef } from "react";

import styles from "./addRecipeModal.module.css";
import { addNewRecipe } from "../../../store/recipe-actions";

const AddRecipeModal = (props) => {
  const dispatch = useDispatch();

  const titleRef = useRef();
  const prepTimeRef = useRef();
  const difficultyRef = useRef();
  const directionsRef = useRef();
  const ingredientRef1 = useRef();
  const ingredientRef2 = useRef();
  const ingredientRef3 = useRef();
  const ingredientRef4 = useRef();
  const ingredientRef5 = useRef();
  const ingredientRef6 = useRef();
  const ingredientRef7 = useRef();
  const ingredientRef8 = useRef();
  const ingredientRef9 = useRef();
  const ingredientRef10 = useRef();

  const handleOk = () => {
    const newRecipePreview = {
      title: titleRef.current.value,
      difficulty: difficultyRef.current.value,
      preparationTime: prepTimeRef.current.value,
      directions: directionsRef.current.value,
      ingredients: [
        ingredientRef1.current.value,
        ingredientRef2.current.value,
        ingredientRef3.current.value,
        ingredientRef4.current.value,
        ingredientRef5.current.value,
        ingredientRef6.current.value,
        ingredientRef7.current.value,
        ingredientRef8.current.value,
        ingredientRef9.current.value,
        ingredientRef10.current.value,
      ],
    };
    const ingredientsFiltered = newRecipePreview.ingredients.filter(
      (el) => el.length > 0
    );

    const newRecipeFinal = {
      ...newRecipePreview,
      ingredients: ingredientsFiltered,
    };
    props.closeModal();
    dispatch(addNewRecipe(newRecipeFinal));
  };

  const handleCancel = () => {
    props.closeModal();
    titleRef.current.value = "";
    difficultyRef.current.value = "";
    prepTimeRef.current.value = "";
    directionsRef.current.value = "";
    ingredientRef1.current.value = "";
    ingredientRef2.current.value = "";
    ingredientRef3.current.value = "";
    ingredientRef4.current.value = "";
    ingredientRef5.current.value = "";
    ingredientRef6.current.value = "";
    ingredientRef7.current.value = "";
    ingredientRef8.current.value = "";
    ingredientRef9.current.value = "";
    ingredientRef10.current.value = "";
  };

  return (
    <>
      <Modal
        title="Add Recipe"
        open={props.isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <form className={styles.upload}>
          <div className={styles["upload-column"]}>
            <h3 className={styles["upload-heading"]}>Recipe data</h3>
            <label>Title</label>
            <input name="title" type="text" ref={titleRef} required />
            <label>Prep time</label>
            <input
              name="prepTime"
              type="text"
              ref={prepTimeRef}
              placeholder="Format: 'numbers,Unit'"
              required
            />
            <label>Difficulty</label>
            <select name="levels" ref={difficultyRef} required>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="challenging">challenging</option>
            </select>
            <label>Preparation</label>
            <textarea
              name="prep"
              type="text"
              ref={directionsRef}
              placeholder="quide us to your recipe"
              required
            />
          </div>

          <div className={styles["upload-column"]}>
            <h3 className={styles["upload-heading"]}>Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              type="text"
              name="ingredient-1"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef1}
              required
            />
            <label>Ingredient 2</label>
            <input
              type="text"
              name="ingredient-2"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef2}
            />
            <label>Ingredient 3</label>
            <input
              type="text"
              name="ingredient-3"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef3}
            />
            <label>Ingredient 4</label>
            <input
              type="text"
              name="ingredient-4"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef4}
            />
            <label>Ingredient 5</label>
            <input
              type="text"
              name="ingredient-5"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef5}
            />
            <label>Ingredient 6</label>
            <input
              type="text"
              name="ingredient-6"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef6}
            />
            <label>Ingredient 7</label>
            <input
              type="text"
              name="ingredient-7"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef7}
            />
            <label>Ingredient 8</label>
            <input
              type="text"
              name="ingredient-8"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef8}
            />
            <label>Ingredient 9</label>
            <input
              type="text"
              name="ingredient-9"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef9}
            />
            <label>Ingredient 10</label>
            <input
              type="text"
              name="ingredient-10"
              placeholder="Format: 'Quantity,Unit,Description'"
              ref={ingredientRef10}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddRecipeModal;
