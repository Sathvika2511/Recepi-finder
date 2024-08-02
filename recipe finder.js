const recipes = [
    { name: "Spaghetti Bolognese", ingredients: ["spaghetti", "ground beef", "tomato sauce"] },
    { name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato", "cucumber"] },
    { name: "Vegetable Stir Fry", ingredients: ["bell pepper", "carrot", "broccoli", "soy sauce"] },
    { name: "Beef Tacos", ingredients: ["ground beef", "taco shells", "lettuce", "cheese"] },
    { name: "Tomato Soup", ingredients: ["tomato", "onion", "garlic", "basil"] }
];

function findRecipes() {
    const ingredient = document.getElementById('ingredient').value.toLowerCase();
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    const filteredRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient))
    );

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;
            recipeList.appendChild(li);
        });
    } else {
        recipeList.innerHTML = '<li>No recipes found.</li>';
    }
}
