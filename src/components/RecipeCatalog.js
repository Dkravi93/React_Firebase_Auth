import { useSelector, useDispatch } from 'react-redux';
import { saveRecipe, deleteRecipe, searchRecipe, viewRecipeDetails } from '../redux/recipeActions';
import SearchBar  from './SearchBar';
import RecipeList  from './RecipeList';

export default function RecipeCatalog() {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
  
    const handleSaveRecipe = recipe => {
      dispatch(saveRecipe(recipe));
    };
  
    const handleDeleteRecipe = recipeId => {
      dispatch(deleteRecipe(recipeId));
    };
  
    const handleSearchRecipe = searchTerm => {
      dispatch(searchRecipe(searchTerm));
  };
  
  const handleViewRecipeDetails = recipeId => {
    dispatch(viewRecipeDetails(recipeId));
  };
  
  return (
    <div>
      <SearchBar onSearch={handleSearchRecipe} />
      <RecipeList
        recipes={recipes}
        onSave={handleSaveRecipe}
        onDelete={handleDeleteRecipe}
        onViewDetails={handleViewRecipeDetails}
      />
    </div>
  );
  }