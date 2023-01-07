import React from "react";
import { PlusSquareOutlined, StarOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./header.module.css";
import logo from "../../img/FUUD.png";
import AddRecipeModal from "./addRecipe/addRecipeModal";
import { fetchAllRecipes } from "../../store/recipe-actions";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
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
            <button className={`${styles["nav-btn"]}`} onClick={showModal}>
              <PlusSquareOutlined className={styles["nav-icon"]} />
              <span>Add recipe</span>
            </button>
            <AddRecipeModal isOpen={isModalOpen} closeModal={toggle} />
          </li>
          <li>
            <button
              className={`${styles["nav-btn"]}`}
              onClick={fetchAllRecipesHandler}
            >
              <StarOutlined className={styles["nav-icon"]} />
              <span>Bookmarks</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
