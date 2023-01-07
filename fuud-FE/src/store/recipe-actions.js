import { recipeActions } from "./recipeSlice";

export const fetchAllRecipes = () => {
  return async (dispatch) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/v1/recipe",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Could not fetch recipe data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const recipeData = await fetchData();
      dispatch(recipeActions.replaceRecipes(recipeData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewRecipe = (newRecipe) => {
  return async (dispatch) => {
    console.log(newRecipe);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(newRecipe);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/recipe",
        requestOptions
      );
      const data = await response.json();
      if (response.status === 201) {
        dispatch(recipeActions.createRecipe(data.data.data));
      } else {
        throw new Error("Could not create new recipe!");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOneRecipe = (ID) => {
  return async (dispatch) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const fetchRecipe = async () => {
      const response = await fetch(
        `http://localhost:8080/api/v1/recipe/${ID}`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Could not fetch recipe data!");
      }
      const data = await response.json();

      return data;
    };

    try {
      const oneRecipe = await fetchRecipe();
      dispatch(recipeActions.storeOneRecipe(oneRecipe.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteRecipeById = (ID) => {
  return async (dispatch) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const deleteRecipe = async () => {
      const response = await fetch(
        `http://localhost:8080/api/v1/recipe/${ID}`,
        requestOptions
      );

      if (response.status !== 204) {
        throw new Error("Could not delete recipe data!");
      }
      dispatch(recipeActions.deleteRecipe(ID));
    };
    try {
      await deleteRecipe();
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateRecipeById = (ID, recipeForUpdate) => {
  return async (dispatch) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(recipeForUpdate);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const updateRecipe = async () => {
      const response = await fetch(
        `http://localhost:8080/api/v1/recipe/${ID}`,
        requestOptions
      );

      if (response.status !== 200) {
        throw new Error("Could not update this recipe data!");
      } else {
      }
      const data = await response.json();
      return data.data;
    };

    try {
      const updatedRecipe = await updateRecipe();
      dispatch(recipeActions.updateCurrentRecipe(updatedRecipe.data));
    } catch (err) {
      console.log(err);
    }
  };
};
