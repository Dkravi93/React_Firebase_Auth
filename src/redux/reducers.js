import { SAVE_RECIPE,DELETE_RECIPE,SEARCH_RECIPE,VIEW_RECIPE_DETAILS } from './recipeActions';
// Reducer
const initialState = {
  recipes: [
    {
      id: 1,
      name: 'Pizza',
      ingredients: ['dough', 'tomato sauce', 'cheese', 'toppings'],
      instructions: 'lorem ipsum dolor sit amet, consectetur',
      image: 'https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg'
    },
    {
      id: 2,
      name: 'Spaghetti',
      ingredients: ['spaghetti', 'tomato sauce', 'ground beef'],
      instructions: 'lorem ipsum dolor sit amet, consectetur',
      image:'https://thumbs.dreamstime.com/b/pasta-arabbiata-25793698.jpg'
    },
  ],
  savedRecipes: [],
  searchedRecipes: [],
  selectedRecipe: null,
};

export default function recipeReducer(state = initialState, action) {

  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        savedRecipes: [...state.savedRecipes, action.recipe],
      };
    case DELETE_RECIPE:
      return {
        ...state,
        savedRecipes: state.savedRecipes.filter(
          recipe => recipe.id !== action.recipeId
        ),
      };
    case SEARCH_RECIPE:

      return {
        ...state,
        searchedRecipes: state.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(action.searchTerm.toLowerCase())
        ),
      };
    case VIEW_RECIPE_DETAILS:
      return {
        ...state,
        selectedRecipe: state.recipes.find(
          recipe => recipe.id === action.recipeId
        ),
      };
    default:
      return state;
  }
}


