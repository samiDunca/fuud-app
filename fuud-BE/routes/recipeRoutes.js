const express = require('express');
const recipeController = require('../controllers/recipeController');

const router = express.Router();

router
  .route('/')
  .post(recipeController.addRecipe)
  .get(recipeController.getAllRecipes);
//comment
router
  .route('/:id')
  .get(recipeController.getRecipe)
  .put(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

module.exports = router;
