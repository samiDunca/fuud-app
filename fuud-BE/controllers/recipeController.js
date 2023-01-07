const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Recipe = require('../models/recipeModel');

exports.addRecipe = catchAsync(async (req, res, next) => {
  const newRecipe = await Recipe.create(req.body);
  //comment
  res.status(201).json({
    status: 'success',
    data: {
      data: newRecipe,
    },
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  let recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: recipe,
    },
  });
});

exports.getAllRecipes = catchAsync(async (req, res, next) => {
  const recipeData = await Recipe.find();
  res.status(200).json({
    status: 'success',
    responses: recipeData.length,
    data: recipeData.reverse(),
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  const recipeData = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!recipeData) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: recipeData,
    },
  });
});

exports.deleteRecipe = catchAsync(async (req, res, next) => {
  const recipe = await Recipe.findByIdAndDelete(req.params.id);
  console.log(recipe);
  if (!recipe) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(204).json({
    status: 'success',
    message: 'yay, we deleted id',
    data: null,
  });
});
