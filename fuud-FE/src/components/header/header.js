import React from "react";
import { PlusSquareOutlined, StarOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./header.module.css";
import logo from "../../img/FUUD.png";
import AddRecipeModal from "./addRecipe/addRecipeModal";
import { fetchAllRecipes } from "../../store/recipe-actions";
import { recipeActions } from "../../store/recipeSlice";
import RO_CST from "../../constants/ro-recipeConstants";
import EN_CST from "../../constants/en-recipeConstants";

const Header = () => {
  const [toggleLang, setToggleLang] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tglLng = useSelector((state) => state.recipe?.toggleLang);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handlerLangButton = () => {
    setToggleLang(!toggleLang);
    dispatch(recipeActions.toggleLanguage(toggleLang));
  };

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchAllRecipesHandler = () => {
    dispatch(fetchAllRecipes());
  };
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" className={styles["header-logo"]} />
      <div className={styles["header-nav"]}>
        <ul>
          <li>
            <button
              className={`${styles["nav-btn"]}`}
              onClick={handlerLangButton}
            >
              <span>en</span>
            </button>
          </li>
          <li>
            <button
              className={`${styles["nav-btn"]}`}
              onClick={handlerLangButton}
            >
              <span>ro</span>
            </button>
          </li>
          <li>
            <button
              className={`${styles["nav-btn"]}`}
              onClick={fetchAllRecipesHandler}
            >
              <span>{tglLng ? EN_CST.LIST_RECIPES : RO_CST.LIST_RECIPES}</span>
            </button>
          </li>
          <li>
            <button className={`${styles["nav-btn"]}`} onClick={showModal}>
              <PlusSquareOutlined className={styles["nav-icon"]} />
              <span>{tglLng ? EN_CST.ADD_RECIPE : RO_CST.ADD_RECIPE}</span>
            </button>
            <AddRecipeModal isOpen={isModalOpen} closeModal={toggle} />
          </li>
          <li>
            <button className={`${styles["nav-btn"]}`}>
              <StarOutlined className={styles["nav-icon"]} />
              <span>{tglLng ? EN_CST.BOOKMARKS : RO_CST.BOOKMARKS}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
