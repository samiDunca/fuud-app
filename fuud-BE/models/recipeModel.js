const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  difficulty: String,
  preparationTime: String,
  ingredients: [{ type: String }],
  directions: String,
});
//comment
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
