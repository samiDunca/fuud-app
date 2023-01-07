import "./App.css";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import Header from "./components/header/header";
import DisplayRecipes from "./components/displayRecipes/displayRecipes";
import Recipe from "./components/recipe/recipe";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ro")}>RO</button>
        <hr />
        <Trans i18nKey="description.part1">to GET STARTED</Trans>
        <div>{t("description.part2")}</div>
      </div>
      <div className="container">
        <Header />
        <DisplayRecipes />
        <Recipe />

        <p className="copyright">
          &copy; Copyright by team: Stefi, Damaris, Sami. Use for cooking. Don't
          teach. Don't claim as your own.
        </p>
      </div>
    </div>
  );
}

export default App;
