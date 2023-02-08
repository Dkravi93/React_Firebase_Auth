export const SAVE_RECIPE = 'SAVE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const SEARCH_RECIPE = 'SEARCH_RECIPE';
export const VIEW_RECIPE_DETAILS = 'VIEW_RECIPE_DETAILS';

// Action Creators
export const saveRecipe = recipe => ({
  type: SAVE_RECIPE,
  recipe,
});

export const deleteRecipe = recipeId => ({
  type: DELETE_RECIPE,
  recipeId,
});

export const searchRecipe = searchTerm => ({
  type: SEARCH_RECIPE,
  searchTerm,
});

export const viewRecipeDetails = recipeId => ({
  type: VIEW_RECIPE_DETAILS,
  recipeId,
});
