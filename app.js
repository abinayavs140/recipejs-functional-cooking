const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 eggs",
            "50g parmesan cheese",
            "Black pepper",
            "Salt"
        ],
        steps: [
            "Boil salted water",
            "Cook spaghetti until al dente",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Whisk eggs",
                    "Add grated parmesan",
                    "Mix well"
                ]
            },
            "Fry pancetta until crispy",
            "Combine pasta with pancetta",
            "Remove from heat and mix with egg mixture",
            "Serve with black pepper"
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: [
            "500g chicken",
            "1 cup yogurt",
            "Tomato puree",
            "Onion",
            "Garlic",
            "Garam masala",
            "Cream"
        ],
        steps: [
            "Marinate chicken with yogurt and spices",
            "Cook marinated chicken",
            {
                text: "Prepare masala base",
                substeps: [
                    "Heat oil",
                    "Saute onions",
                    "Add garlic and spices",
                    "Add tomato puree and cook"
                ]
            },
            "Add chicken to masala",
            "Pour cream and simmer",
            "Serve hot"
        ]
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: [
            "Flour",
            "Butter",
            "Milk",
            "Sugar",
            "Yeast",
            "Salt"
        ],
        steps: [
            "Prepare dough",
            {
                text: "Layer butter into dough",
                substeps: [
                    "Roll dough flat",
                    "Place butter sheet",
                    "Fold and roll again",
                    {
                        text: "Repeat folding process",
                        substeps: [
                            "Fold once",
                            "Chill for 30 minutes",
                            "Roll again"
                        ]
                    }
                ]
            },
            "Cut into triangles",
            "Roll into croissant shape",
            "Bake until golden brown"
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: [
            "Tomatoes",
            "Cucumber",
            "Red onion",
            "Feta cheese",
            "Olives",
            "Olive oil",
            "Oregano"
        ],
        steps: [
            "Chop vegetables",
            "Combine in bowl",
            "Add olives and feta",
            "Drizzle olive oil",
            "Sprinkle oregano",
            "Toss gently and serve"
        ]
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: [
            "Beef fillet",
            "Mushrooms",
            "Puff pastry",
            "Mustard",
            "Egg yolk",
            "Garlic"
        ],
        steps: [
            "Sear beef fillet",
            {
                text: "Prepare mushroom duxelles",
                substeps: [
                    "Chop mushrooms",
                    "Cook with garlic",
                    "Reduce moisture"
                ]
            },
            "Spread mustard on beef",
            "Wrap with mushroom mixture",
            "Cover with puff pastry",
            "Brush with egg yolk",
            "Bake until golden"
        ]
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: [
            "Bell peppers",
            "Broccoli",
            "Carrots",
            "Soy sauce",
            "Garlic",
            "Oil"
        ],
        steps: [
            "Chop vegetables",
            "Heat oil in pan",
            "Add garlic",
            "Add vegetables",
            "Stir fry for 5-7 minutes",
            "Add soy sauce",
            "Serve hot"
        ]
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: [
            "Rice noodles",
            "Shrimp",
            "Eggs",
            "Tamarind paste",
            "Peanuts",
            "Bean sprouts"
        ],
        steps: [
            "Soak rice noodles",
            "Cook shrimp",
            {
                text: "Prepare sauce",
                substeps: [
                    "Mix tamarind paste",
                    "Add sugar",
                    "Add fish sauce"
                ]
            },
            "Add noodles to pan",
            "Pour sauce",
            "Add eggs and scramble",
            "Top with peanuts and sprouts"
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella",
            "Basil",
            "Olive oil"
        ],
        steps: [
            "Preheat oven",
            "Roll pizza dough",
            "Spread tomato sauce",
            "Add mozzarella",
            "Bake for 12-15 minutes",
            "Garnish with basil",
            "Drizzle olive oil and serve"
        ]
    }
];

const recipeContainer = document.querySelector('#recipe-container');

const renderSteps = (steps, level = 0) => {
    let html = '';

    steps.forEach((step, index) => {

        // Simple string step
        if (typeof step === 'string') {
            html += `
                <li class="step level-${level}">
                    ${level === 0 ? `${index + 1}.` : '➤'} ${step}
                </li>
            `;
        }

        // Nested step with substeps
        else if (typeof step === 'object' && step.substeps) {
            html += `
                <li class="step level-${level}">
                    ${level === 0 ? `${index + 1}.` : '➤'} ${step.text}
                    <ul>
                        ${renderSteps(step.substeps, level + 1)}
                    </ul>
                </li>
            `;
        }

    });

    return html;
};
const createStepsHTML = (recipe) => {
    return `
        <ul class="steps-list">
            ${renderSteps(recipe.steps)}
        </ul>
    `;
};

const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>

            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">
                    ${recipe.difficulty}
                </span>
            </div>

            <p>${recipe.description}</p>

            <div class="card-buttons">
                <button 
                    class="toggle-btn"
                    data-recipe-id="${recipe.id}"
                    data-toggle="steps">
                    Show Steps
                </button>

                <button 
                    class="toggle-btn"
                    data-recipe-id="${recipe.id}"
                    data-toggle="ingredients">
                    Show Ingredients
                </button>
            </div>

            <div class="steps-container" data-recipe-id="${recipe.id}">
                ${createStepsHTML(recipe)}
            </div>

            <div class="ingredients-container" data-recipe-id="${recipe.id}">
                <ul>
                    ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
};

const handleToggleClick = (event) => {
    const button = event.target.closest('.toggle-btn');
    if (!button) return;

    const recipeId = button.dataset.recipeId;
    const toggleType = button.dataset.toggle;

    const container = document.querySelector(
        `.${toggleType}-container[data-recipe-id="${recipeId}"]`
    );

    container.classList.toggle('visible');

    if (container.classList.contains('visible')) {
        button.textContent = `Hide ${toggleType.charAt(0).toUpperCase() + toggleType.slice(1)}`;
    } else {
        button.textContent = `Show ${toggleType.charAt(0).toUpperCase() + toggleType.slice(1)}`;
    }
};

let currentFilter = 'all';
let currentSort = 'default';

const filterButtons = document.querySelectorAll('[data-filter]');
const sortButtons = document.querySelectorAll('[data-sort]');

const filterRecipes = () => {
    if (currentFilter === 'all') return recipes;

    return recipes.filter(recipe => 
        recipe.category === currentFilter
    );
};

const sortRecipes = (filteredRecipes) => {

    const recipesCopy = [...filteredRecipes];

    if (currentSort === 'time-asc') {
        recipesCopy.sort((a, b) => a.time - b.time);
    }

    else if (currentSort === 'time-desc') {
        recipesCopy.sort((a, b) => b.time - a.time);
    }

    else if (currentSort === 'difficulty') {
        const difficultyOrder = { easy: 1, medium: 2, hard: 3 };

        recipesCopy.sort((a, b) =>
            difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        );
    }

    return recipesCopy;
};

const updateDisplay = () => {

    const filtered = filterRecipes();
    const sorted = sortRecipes(filtered);

    renderRecipes(sorted);
};

const handleFilterClick = (event) => {

    currentFilter = event.target.dataset.filter;

    updateDisplay();
};
const handleSortClick = (event) => {

    currentSort = event.target.dataset.sort;

    updateDisplay();
};

const setupEventListeners = () => {

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    // Sort buttons
    sortButtons.forEach(button => {
        button.addEventListener('click', handleSortClick);
    });

    // 🔥 Part 3 Toggle (Event Delegation)
    recipeContainer.addEventListener('click', handleToggleClick);

};

// Test card creation
console.log(createRecipeCard(recipes[0]));


// Step 4.3: Render Function
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');
    
    recipeContainer.innerHTML = recipeCardsHTML;
};


// Step 4.4: Initialize App
updateDisplay();
setupEventListeners();
