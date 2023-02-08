
export default function SearchedResult({ recipes}) {
    console.log(recipes)
    return (
        <ul>
        {recipes?.searchedRecipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <button>
              View Details
            </button>
          </li>
        ))}
      </ul>
    )

}