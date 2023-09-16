//Fetch API
const apiKey = '1';

async function fetchRecipes(query) {
    try {
        const data = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}&apiKey=${apiKey}`);
        displayRecipes(data.meals);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');

const recipeList = document.getElementById('recipeList');
const selectedRecipeList = document.getElementById('selectedRecipeList');
const ingredientList = document.getElementById('ingredientList');
const shoppingList = document.getElementById('shoppingList');


const selectedRecipes = []; // My Menu array
const shoppingListItems = []; // My Shopping List

// Event listener for the search button and clear button
searchButton.addEventListener('click',  () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        fetchRecipes(query);
    }
});

clearButton.addEventListener('click', function() {
    displayRecipes(), displayIngredientsList() = '';
});



 // Functions to create and display list of recipes

 function createRecipeList(recipe) {
    const recipeItem = document.createElement('li');
    recipeItem.textContent = recipe.strMeal;
    recipeItem.addEventListener('click', () => {
        selectRecipe(recipe);
    });
    return recipeItem;
}

function displayRecipes(recipes) {
    recipeList.innerHTML = ''; // Clears the list for each input
        recipes.forEach((recipe) => {
            const recipeItem = createRecipeList(recipe);
            recipeList.appendChild(recipeItem);
        });
    } 

// Functions to select and display My Menu

// Function to fetch and display ingredients for each recipe

// Function to extract the ingredients from the recipe object
// Change to array iterator method

// Functions to create and display the list of ingredients per recipe

// Function to add selected ingredients to the shopping list

// Function to display the shopping list
