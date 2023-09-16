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
const searchInput 
const searchButton
const clearButton 

const recipeList 
const selectedRecipeList 
const ingredientList 
const shoppingList 


const selectedRecipes = []; // My Menu array
const shoppingListItems = []; // My Shopping List

// Event listener for the search button and clear button

 // Functions to create and display list of recipes

// Functions to select and display My Menu

// Function to fetch and display ingredients for each recipe

// Function to extract the ingredients from the recipe object
// Change to array iterator method

// Functions to create and display the list of ingredients per recipe

// Function to add selected ingredients to the shopping list

// Function to display the shopping list
