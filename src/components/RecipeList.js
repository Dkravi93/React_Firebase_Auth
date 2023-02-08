

export default function RecipeList({ recipes, onSave, onDelete, onViewDetails }) {
    return (
      <ul>
        {recipes.recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <button onClick={() => onSave(recipe)}>Save</button>
            <button onClick={() => onDelete(recipe.id)}>Delete</button>
            <button onClick={() => onViewDetails(recipe.id)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    );
    }
    