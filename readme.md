Web-application developed by Paula Laorga Fuentes.
Project, Phase 1. Front-end development Academy Xi 2023.

Requirements:

- Use HTML/CSS/JS 

- Access data from an API, it should return a collection of at least 5 objects with 3 attributes. 

- All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. 

- Your entire app must run on a single page, with one single HTML file.

- Use at least 3 events of different types. Each of your event listeners should also have its own unique callback function. Must be added using JavaScript's .addEventListener() method. 

- Your project must implement at least one array iterator method (map, forEach, filter, etc).

------

Project proposal:

- Description: A Web application that using a recipes API allows the user to search recipes by ingredients and select the preferred recipes, to create a menu for their meal prep, and select the ingredients that they need to buy and store them on a shopping list.

- Pseudo-code:

    - Variables: 

    search bar
    buttons
    recipes options
    selected recipes
    ingredients needed
    shopping list

    - Arrays: 
    
    selected recipes
    shopping list

    - Event-Listeners: 
    
    submit event (search bar)
    click event (buttons)
    keydown event (button search)
    
    - Functions: 

- Recipe List

1- to create List: 
It declares the recipeItem variable to create a new list item element by using document.createElement('li').
It sets the content of the list items  (recipeItem.textContent = recipe.strMeal).
It adds a click event listener, that calls the selectRecipe(recipe) function, when the list item is clicked. 
Finally, it returns the recipe item.

2- to display List
ForEach loop to iterate through the recipes array, and call the previous function to populate the list by adding the recipes from the array, as children of the previous list.

- Menu

1- to select recipes:
Checks if the recipe is not already in the selectedRecipes array. 
Using .push, adds the recipe onject to the array
calls the function to display the list and the ingredients

2- to display the selected recipes:
Runs a forEach loop on the selectedRecipes array calling a variable for the individual itemsof the list and iterating the function createRecipeList, then append the list item as a child to the selectedRecipeList.

- Ingredients

1 - Extract ingredients (properties) from the recipe (objects).

2 - Create list 

3 - Display list
    
- Shopping List

1 - .push ingredients to the shoppingListItems array

2 - .forEach to iterate through the array and append the items to the variable shoppingList.
