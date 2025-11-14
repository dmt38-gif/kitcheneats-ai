/**
 * AI Meal Planner - Sprint 1 MVP
 * Core application logic for meal planning, pantry management, and grocery list generation
 */

// ============================================================================
// DATA STRUCTURES AND SAMPLE RECIPE DATASET
// ============================================================================

/**
 * Sample recipe database with complete nutritional information
 * Each recipe includes: name, ingredients (with quantities/units), instructions,
 * servings, nutrition per serving, prep time, and difficulty level
 */
const SAMPLE_RECIPES = [
    {
        id: 1,
        name: "Classic Pancakes",
        ingredients: [
            { name: "all-purpose flour", quantity: 1.5, unit: "cups" },
            { name: "baking powder", quantity: 3.5, unit: "tsp" },
            { name: "salt", quantity: 1, unit: "tsp" },
            { name: "white sugar", quantity: 1, unit: "tbsp" },
            { name: "milk", quantity: 1.25, unit: "cups" },
            { name: "egg", quantity: 1, unit: "whole" },
            { name: "butter", quantity: 3, unit: "tbsp" }
        ],
        instructions: [
            "Mix dry ingredients in a large bowl",
            "Make a well in the center and add wet ingredients",
            "Stir until just combined (batter will be lumpy)",
            "Heat griddle or pan over medium heat",
            "Pour 1/4 cup batter for each pancake",
            "Cook until bubbles form, then flip and cook until golden"
        ],
        servings: 8,
        nutrition: {
            calories: 158,
            protein: 4.5,
            carbs: 22,
            fats: 5.5
        },
        prepTime: 15,
        difficulty: "Easy"
    },
    {
        id: 2,
        name: "Grilled Chicken Breast",
        ingredients: [
            { name: "chicken breast", quantity: 4, unit: "pieces" },
            { name: "olive oil", quantity: 2, unit: "tbsp" },
            { name: "salt", quantity: 1, unit: "tsp" },
            { name: "black pepper", quantity: 0.5, unit: "tsp" },
            { name: "garlic", quantity: 2, unit: "cloves" },
            { name: "lemon juice", quantity: 1, unit: "tbsp" }
        ],
        instructions: [
            "Preheat grill to medium-high heat",
            "Mix olive oil, salt, pepper, minced garlic, and lemon juice",
            "Coat chicken breasts with marinade",
            "Grill for 6-7 minutes per side",
            "Check internal temperature reaches 165°F",
            "Let rest for 5 minutes before serving"
        ],
        servings: 4,
        nutrition: {
            calories: 231,
            protein: 35,
            carbs: 1,
            fats: 9
        },
        prepTime: 25,
        difficulty: "Easy"
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        ingredients: [
            { name: "broccoli", quantity: 2, unit: "cups" },
            { name: "carrots", quantity: 2, unit: "pieces" },
            { name: "bell pepper", quantity: 1, unit: "whole" },
            { name: "soy sauce", quantity: 3, unit: "tbsp" },
            { name: "ginger", quantity: 1, unit: "tbsp" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "vegetable oil", quantity: 2, unit: "tbsp" },
            { name: "onion", quantity: 1, unit: "whole" }
        ],
        instructions: [
            "Cut all vegetables into bite-sized pieces",
            "Heat oil in a large wok or pan over high heat",
            "Add garlic and ginger, stir for 30 seconds",
            "Add vegetables, starting with hardest (carrots, broccoli)",
            "Stir-fry for 5-7 minutes until crisp-tender",
            "Add soy sauce and cook for 1 more minute"
        ],
        servings: 4,
        nutrition: {
            calories: 120,
            protein: 4,
            carbs: 15,
            fats: 5
        },
        prepTime: 20,
        difficulty: "Easy"
    },
    {
        id: 4,
        name: "Spaghetti Carbonara",
        ingredients: [
            { name: "spaghetti", quantity: 1, unit: "lbs" },
            { name: "bacon", quantity: 8, unit: "oz" },
            { name: "egg", quantity: 4, unit: "whole" },
            { name: "parmesan cheese", quantity: 1, unit: "cups" },
            { name: "black pepper", quantity: 1, unit: "tsp" },
            { name: "garlic", quantity: 2, unit: "cloves" }
        ],
        instructions: [
            "Cook spaghetti according to package directions",
            "Cook bacon until crispy, then remove and chop",
            "Whisk eggs with parmesan and black pepper",
            "Drain pasta, reserving 1 cup pasta water",
            "Toss hot pasta with bacon and garlic",
            "Remove from heat and quickly stir in egg mixture",
            "Add pasta water as needed to create creamy sauce"
        ],
        servings: 6,
        nutrition: {
            calories: 485,
            protein: 22,
            carbs: 58,
            fats: 16
        },
        prepTime: 30,
        difficulty: "Medium"
    },
    {
        id: 5,
        name: "Greek Salad",
        ingredients: [
            { name: "romaine lettuce", quantity: 1, unit: "whole" },
            { name: "tomato", quantity: 3, unit: "pieces" },
            { name: "cucumber", quantity: 1, unit: "whole" },
            { name: "red onion", quantity: 0.5, unit: "whole" },
            { name: "feta cheese", quantity: 6, unit: "oz" },
            { name: "kalamata olives", quantity: 0.5, unit: "cups" },
            { name: "olive oil", quantity: 3, unit: "tbsp" },
            { name: "lemon juice", quantity: 2, unit: "tbsp" },
            { name: "oregano", quantity: 1, unit: "tsp" }
        ],
        instructions: [
            "Wash and chop lettuce into bite-sized pieces",
            "Dice tomatoes and cucumber",
            "Thinly slice red onion",
            "Combine all vegetables in a large bowl",
            "Whisk together olive oil, lemon juice, and oregano",
            "Toss salad with dressing",
            "Top with crumbled feta and olives"
        ],
        servings: 4,
        nutrition: {
            calories: 245,
            protein: 8,
            carbs: 12,
            fats: 19
        },
        prepTime: 15,
        difficulty: "Easy"
    },
    {
        id: 6,
        name: "Beef Tacos",
        ingredients: [
            { name: "ground beef", quantity: 1, unit: "lbs" },
            { name: "taco seasoning", quantity: 1, unit: "oz" },
            { name: "tortillas", quantity: 8, unit: "pieces" },
            { name: "lettuce", quantity: 2, unit: "cups" },
            { name: "tomato", quantity: 2, unit: "pieces" },
            { name: "cheddar cheese", quantity: 1, unit: "cups" },
            { name: "sour cream", quantity: 0.5, unit: "cups" }
        ],
        instructions: [
            "Brown ground beef in a large pan",
            "Add taco seasoning and water, simmer 5 minutes",
            "Warm tortillas in a dry pan or microwave",
            "Chop lettuce and dice tomatoes",
            "Assemble tacos with meat, vegetables, cheese, and sour cream"
        ],
        servings: 4,
        nutrition: {
            calories: 425,
            protein: 28,
            carbs: 32,
            fats: 20
        },
        prepTime: 20,
        difficulty: "Easy"
    },
    {
        id: 7,
        name: "Salmon Teriyaki",
        ingredients: [
            { name: "salmon fillet", quantity: 1.5, unit: "lbs" },
            { name: "soy sauce", quantity: 0.25, unit: "cups" },
            { name: "brown sugar", quantity: 2, unit: "tbsp" },
            { name: "ginger", quantity: 1, unit: "tbsp" },
            { name: "garlic", quantity: 2, unit: "cloves" },
            { name: "sesame oil", quantity: 1, unit: "tsp" },
            { name: "rice", quantity: 2, unit: "cups" }
        ],
        instructions: [
            "Mix soy sauce, brown sugar, ginger, garlic, and sesame oil for marinade",
            "Marinate salmon for 30 minutes",
            "Cook rice according to package directions",
            "Heat pan over medium-high heat",
            "Cook salmon skin-side down for 4 minutes, flip and cook 3 more minutes",
            "Brush with remaining marinade and serve over rice"
        ],
        servings: 4,
        nutrition: {
            calories: 385,
            protein: 32,
            carbs: 38,
            fats: 12
        },
        prepTime: 45,
        difficulty: "Medium"
    },
    {
        id: 8,
        name: "Chocolate Chip Cookies",
        ingredients: [
            { name: "all-purpose flour", quantity: 2.25, unit: "cups" },
            { name: "baking soda", quantity: 1, unit: "tsp" },
            { name: "salt", quantity: 1, unit: "tsp" },
            { name: "butter", quantity: 1, unit: "cups" },
            { name: "brown sugar", quantity: 0.75, unit: "cups" },
            { name: "white sugar", quantity: 0.75, unit: "cups" },
            { name: "vanilla extract", quantity: 1, unit: "tsp" },
            { name: "egg", quantity: 2, unit: "whole" },
            { name: "chocolate chips", quantity: 2, unit: "cups" }
        ],
        instructions: [
            "Preheat oven to 375°F",
            "Mix flour, baking soda, and salt in a bowl",
            "Cream butter and both sugars until fluffy",
            "Beat in vanilla and eggs",
            "Gradually mix in flour mixture",
            "Stir in chocolate chips",
            "Drop rounded tablespoons onto ungreased baking sheets",
            "Bake 9-11 minutes until golden brown"
        ],
        servings: 48,
        nutrition: {
            calories: 95,
            protein: 1,
            carbs: 12,
            fats: 5
        },
        prepTime: 30,
        difficulty: "Easy"
    },
    {
        id: 9,
        name: "Chicken Caesar Salad",
        ingredients: [
            { name: "chicken breast", quantity: 2, unit: "pieces" },
            { name: "romaine lettuce", quantity: 1, unit: "whole" },
            { name: "caesar dressing", quantity: 0.5, unit: "cups" },
            { name: "parmesan cheese", quantity: 0.5, unit: "cups" },
            { name: "croutons", quantity: 1, unit: "cups" },
            { name: "lemon juice", quantity: 1, unit: "tbsp" }
        ],
        instructions: [
            "Season and grill chicken breasts, then slice",
            "Wash and chop romaine lettuce",
            "Toss lettuce with caesar dressing",
            "Top with sliced chicken, parmesan, and croutons",
            "Drizzle with lemon juice"
        ],
        servings: 4,
        nutrition: {
            calories: 320,
            protein: 28,
            carbs: 15,
            fats: 16
        },
        prepTime: 25,
        difficulty: "Easy"
    },
    {
        id: 10,
        name: "Beef Stew",
        ingredients: [
            { name: "beef chuck", quantity: 2, unit: "lbs" },
            { name: "potatoes", quantity: 4, unit: "pieces" },
            { name: "carrots", quantity: 4, unit: "pieces" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "beef broth", quantity: 4, unit: "cups" },
            { name: "tomato paste", quantity: 2, unit: "tbsp" },
            { name: "flour", quantity: 0.25, unit: "cups" },
            { name: "thyme", quantity: 1, unit: "tsp" },
            { name: "bay leaves", quantity: 2, unit: "pieces" }
        ],
        instructions: [
            "Cut beef into 1-inch cubes and coat with flour",
            "Brown beef in a Dutch oven, then remove",
            "Add chopped onions and cook until soft",
            "Add tomato paste and cook 1 minute",
            "Return beef, add broth, thyme, and bay leaves",
            "Simmer covered for 1.5 hours",
            "Add chopped potatoes and carrots",
            "Cook 30 more minutes until vegetables are tender"
        ],
        servings: 6,
        nutrition: {
            calories: 385,
            protein: 32,
            carbs: 28,
            fats: 16
        },
        prepTime: 150,
        difficulty: "Medium"
    },
    {
        id: 11,
        name: "Vegetarian Chili",
        ingredients: [
            { name: "black beans", quantity: 2, unit: "cups" },
            { name: "kidney beans", quantity: 2, unit: "cups" },
            { name: "tomato", quantity: 2, unit: "cups" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "bell pepper", quantity: 2, unit: "pieces" },
            { name: "chili powder", quantity: 2, unit: "tbsp" },
            { name: "cumin", quantity: 1, unit: "tsp" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "vegetable broth", quantity: 2, unit: "cups" }
        ],
        instructions: [
            "Sauté onions, bell peppers, and garlic until soft",
            "Add chili powder and cumin, cook 1 minute",
            "Add beans, tomatoes, and broth",
            "Simmer for 30 minutes, stirring occasionally",
            "Season with salt and pepper to taste"
        ],
        servings: 6,
        nutrition: {
            calories: 245,
            protein: 14,
            carbs: 45,
            fats: 2
        },
        prepTime: 45,
        difficulty: "Easy"
    },
    {
        id: 12,
        name: "Egg Fried Rice",
        ingredients: [
            { name: "rice", quantity: 3, unit: "cups" },
            { name: "egg", quantity: 3, unit: "whole" },
            { name: "soy sauce", quantity: 2, unit: "tbsp" },
            { name: "vegetable oil", quantity: 2, unit: "tbsp" },
            { name: "green onions", quantity: 4, unit: "pieces" },
            { name: "peas", quantity: 0.5, unit: "cups" },
            { name: "carrots", quantity: 1, unit: "pieces" },
            { name: "garlic", quantity: 2, unit: "cloves" }
        ],
        instructions: [
            "Cook rice and let cool (day-old rice works best)",
            "Scramble eggs in a wok, then remove",
            "Heat oil and sauté garlic and diced carrots",
            "Add rice and break up any clumps",
            "Stir in soy sauce",
            "Add peas and scrambled eggs",
            "Garnish with chopped green onions"
        ],
        servings: 4,
        nutrition: {
            calories: 285,
            protein: 10,
            carbs: 45,
            fats: 8
        },
        prepTime: 25,
        difficulty: "Easy"
    },
    {
        id: 13,
        name: "Margherita Pizza",
        ingredients: [
            { name: "pizza dough", quantity: 1, unit: "lbs" },
            { name: "tomato sauce", quantity: 0.5, unit: "cups" },
            { name: "mozzarella cheese", quantity: 8, unit: "oz" },
            { name: "fresh basil", quantity: 0.25, unit: "cups" },
            { name: "olive oil", quantity: 2, unit: "tbsp" },
            { name: "garlic", quantity: 1, unit: "clove" }
        ],
        instructions: [
            "Preheat oven to 475°F",
            "Roll out pizza dough on a floured surface",
            "Transfer to pizza pan or baking sheet",
            "Spread tomato sauce evenly",
            "Top with sliced mozzarella",
            "Bake for 12-15 minutes until crust is golden",
            "Drizzle with olive oil and top with fresh basil"
        ],
        servings: 4,
        nutrition: {
            calories: 385,
            protein: 18,
            carbs: 48,
            fats: 14
        },
        prepTime: 30,
        difficulty: "Medium"
    },
    {
        id: 14,
        name: "Quinoa Bowl",
        ingredients: [
            { name: "quinoa", quantity: 1, unit: "cups" },
            { name: "chickpeas", quantity: 1, unit: "cups" },
            { name: "cucumber", quantity: 1, unit: "whole" },
            { name: "tomato", quantity: 2, unit: "pieces" },
            { name: "feta cheese", quantity: 4, unit: "oz" },
            { name: "olive oil", quantity: 2, unit: "tbsp" },
            { name: "lemon juice", quantity: 2, unit: "tbsp" },
            { name: "fresh parsley", quantity: 0.25, unit: "cups" }
        ],
        instructions: [
            "Cook quinoa according to package directions, let cool",
            "Dice cucumber and tomatoes",
            "Mix quinoa with chickpeas, vegetables, and feta",
            "Whisk together olive oil and lemon juice for dressing",
            "Toss everything together and garnish with parsley"
        ],
        servings: 4,
        nutrition: {
            calories: 325,
            protein: 14,
            carbs: 42,
            fats: 12
        },
        prepTime: 25,
        difficulty: "Easy"
    },
    {
        id: 15,
        name: "Chicken Curry",
        ingredients: [
            { name: "chicken breast", quantity: 1.5, unit: "lbs" },
            { name: "coconut milk", quantity: 1, unit: "cups" },
            { name: "curry powder", quantity: 2, unit: "tbsp" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "ginger", quantity: 1, unit: "tbsp" },
            { name: "tomato", quantity: 2, unit: "pieces" },
            { name: "vegetable oil", quantity: 2, unit: "tbsp" }
        ],
        instructions: [
            "Cut chicken into bite-sized pieces",
            "Heat oil and sauté onions until golden",
            "Add garlic, ginger, and curry powder, cook 1 minute",
            "Add chicken and cook until no longer pink",
            "Add diced tomatoes and coconut milk",
            "Simmer for 20 minutes until chicken is tender",
            "Serve over rice"
        ],
        servings: 4,
        nutrition: {
            calories: 345,
            protein: 32,
            carbs: 12,
            fats: 18
        },
        prepTime: 40,
        difficulty: "Medium"
    },
    {
        id: 16,
        name: "Avocado Toast",
        ingredients: [
            { name: "bread", quantity: 4, unit: "pieces" },
            { name: "avocado", quantity: 2, unit: "whole" },
            { name: "lemon juice", quantity: 1, unit: "tbsp" },
            { name: "salt", quantity: 0.5, unit: "tsp" },
            { name: "red pepper flakes", quantity: 0.5, unit: "tsp" },
            { name: "egg", quantity: 4, unit: "whole" }
        ],
        instructions: [
            "Toast bread slices",
            "Mash avocado with lemon juice and salt",
            "Spread avocado on toast",
            "Fry or poach eggs",
            "Top toast with eggs and sprinkle with red pepper flakes"
        ],
        servings: 4,
        nutrition: {
            calories: 285,
            protein: 12,
            carbs: 28,
            fats: 15
        },
        prepTime: 10,
        difficulty: "Easy"
    },
    {
        id: 17,
        name: "Lasagna",
        ingredients: [
            { name: "lasagna noodles", quantity: 12, unit: "pieces" },
            { name: "ground beef", quantity: 1, unit: "lbs" },
            { name: "tomato sauce", quantity: 2, unit: "cups" },
            { name: "ricotta cheese", quantity: 2, unit: "cups" },
            { name: "mozzarella cheese", quantity: 2, unit: "cups" },
            { name: "parmesan cheese", quantity: 0.5, unit: "cups" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "egg", quantity: 1, unit: "whole" }
        ],
        instructions: [
            "Cook lasagna noodles according to package",
            "Brown ground beef with onions and garlic",
            "Add tomato sauce and simmer 10 minutes",
            "Mix ricotta with egg and parmesan",
            "Layer: sauce, noodles, ricotta, mozzarella, repeat",
            "Top with remaining cheese",
            "Bake at 375°F for 45 minutes covered, 15 minutes uncovered"
        ],
        servings: 8,
        nutrition: {
            calories: 485,
            protein: 28,
            carbs: 38,
            fats: 22
        },
        prepTime: 90,
        difficulty: "Hard"
    },
    {
        id: 18,
        name: "Caesar Salad",
        ingredients: [
            { name: "romaine lettuce", quantity: 1, unit: "whole" },
            { name: "caesar dressing", quantity: 0.5, unit: "cups" },
            { name: "parmesan cheese", quantity: 0.5, unit: "cups" },
            { name: "croutons", quantity: 1, unit: "cups" },
            { name: "lemon juice", quantity: 1, unit: "tbsp" }
        ],
        instructions: [
            "Wash and chop romaine lettuce",
            "Toss lettuce with caesar dressing",
            "Add parmesan cheese and croutons",
            "Drizzle with lemon juice and serve"
        ],
        servings: 4,
        nutrition: {
            calories: 245,
            protein: 8,
            carbs: 18,
            fats: 16
        },
        prepTime: 10,
        difficulty: "Easy"
    },
    {
        id: 19,
        name: "Beef Burger",
        ingredients: [
            { name: "ground beef", quantity: 1.5, unit: "lbs" },
            { name: "burger buns", quantity: 6, unit: "pieces" },
            { name: "lettuce", quantity: 1, unit: "cups" },
            { name: "tomato", quantity: 2, unit: "pieces" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "cheddar cheese", quantity: 6, unit: "slices" },
            { name: "pickles", quantity: 0.25, unit: "cups" }
        ],
        instructions: [
            "Form ground beef into 6 patties",
            "Season patties with salt and pepper",
            "Grill or pan-fry patties 4-5 minutes per side",
            "Add cheese during last minute of cooking",
            "Toast burger buns",
            "Assemble burgers with lettuce, tomato, onion, pickles, and patty"
        ],
        servings: 6,
        nutrition: {
            calories: 485,
            protein: 32,
            carbs: 28,
            fats: 25
        },
        prepTime: 25,
        difficulty: "Easy"
    },
    {
        id: 20,
        name: "Chicken Noodle Soup",
        ingredients: [
            { name: "chicken breast", quantity: 1, unit: "lbs" },
            { name: "egg noodles", quantity: 8, unit: "oz" },
            { name: "chicken broth", quantity: 6, unit: "cups" },
            { name: "carrots", quantity: 3, unit: "pieces" },
            { name: "celery", quantity: 3, unit: "stalks" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "thyme", quantity: 1, unit: "tsp" },
            { name: "salt", quantity: 1, unit: "tsp" },
            { name: "black pepper", quantity: 0.5, unit: "tsp" }
        ],
        instructions: [
            "Cook chicken in broth until tender, then shred",
            "Dice carrots, celery, and onion",
            "Add vegetables to broth and simmer 15 minutes",
            "Add egg noodles and cook according to package",
            "Return shredded chicken to pot",
            "Season with thyme, salt, and pepper"
        ],
        servings: 6,
        nutrition: {
            calories: 245,
            protein: 22,
            carbs: 28,
            fats: 5
        },
        prepTime: 45,
        difficulty: "Easy"
    },
    {
        id: 21,
        name: "Shrimp Scampi",
        ingredients: [
            { name: "shrimp", quantity: 1.5, unit: "lbs" },
            { name: "linguine", quantity: 1, unit: "lbs" },
            { name: "butter", quantity: 4, unit: "tbsp" },
            { name: "garlic", quantity: 4, unit: "cloves" },
            { name: "white wine", quantity: 0.5, unit: "cups" },
            { name: "lemon juice", quantity: 2, unit: "tbsp" },
            { name: "parsley", quantity: 0.25, unit: "cups" },
            { name: "red pepper flakes", quantity: 0.5, unit: "tsp" }
        ],
        instructions: [
            "Cook linguine according to package directions",
            "Heat butter in a large pan",
            "Add garlic and red pepper flakes, cook 1 minute",
            "Add shrimp and cook 2-3 minutes per side",
            "Add white wine and lemon juice, simmer 2 minutes",
            "Toss with cooked pasta and parsley"
        ],
        servings: 4,
        nutrition: {
            calories: 485,
            protein: 38,
            carbs: 45,
            fats: 14
        },
        prepTime: 25,
        difficulty: "Medium"
    },
    {
        id: 22,
        name: "Omelette",
        ingredients: [
            { name: "egg", quantity: 3, unit: "whole" },
            { name: "butter", quantity: 1, unit: "tbsp" },
            { name: "cheddar cheese", quantity: 0.25, unit: "cups" },
            { name: "ham", quantity: 2, unit: "oz" },
            { name: "onion", quantity: 0.25, unit: "whole" },
            { name: "salt", quantity: 0.25, unit: "tsp" },
            { name: "black pepper", quantity: 0.25, unit: "tsp" }
        ],
        instructions: [
            "Beat eggs with salt and pepper",
            "Heat butter in a non-stick pan over medium heat",
            "Pour in eggs and let set slightly",
            "Add diced ham, onions, and cheese to one half",
            "Fold other half over filling",
            "Cook until eggs are set and cheese is melted"
        ],
        servings: 1,
        nutrition: {
            calories: 385,
            protein: 24,
            carbs: 4,
            fats: 28
        },
        prepTime: 10,
        difficulty: "Easy"
    },
    {
        id: 23,
        name: "Fish Tacos",
        ingredients: [
            { name: "white fish fillets", quantity: 1, unit: "lbs" },
            { name: "tortillas", quantity: 8, unit: "pieces" },
            { name: "cabbage", quantity: 2, unit: "cups" },
            { name: "lime juice", quantity: 2, unit: "tbsp" },
            { name: "sour cream", quantity: 0.5, unit: "cups" },
            { name: "cilantro", quantity: 0.25, unit: "cups" },
            { name: "cumin", quantity: 1, unit: "tsp" },
            { name: "paprika", quantity: 1, unit: "tsp" }
        ],
        instructions: [
            "Season fish with cumin and paprika",
            "Grill or pan-fry fish until flaky",
            "Shred cabbage and mix with lime juice",
            "Warm tortillas",
            "Flake fish and assemble tacos with cabbage, sour cream, and cilantro"
        ],
        servings: 4,
        nutrition: {
            calories: 325,
            protein: 28,
            carbs: 32,
            fats: 10
        },
        prepTime: 25,
        difficulty: "Easy"
    },
    {
        id: 24,
        name: "Pasta Primavera",
        ingredients: [
            { name: "penne pasta", quantity: 1, unit: "lbs" },
            { name: "broccoli", quantity: 2, unit: "cups" },
            { name: "zucchini", quantity: 2, unit: "pieces" },
            { name: "cherry tomatoes", quantity: 1, unit: "cups" },
            { name: "olive oil", quantity: 3, unit: "tbsp" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "parmesan cheese", quantity: 0.5, unit: "cups" },
            { name: "basil", quantity: 0.25, unit: "cups" }
        ],
        instructions: [
            "Cook pasta according to package directions",
            "Sauté garlic in olive oil",
            "Add vegetables and cook until tender",
            "Toss with cooked pasta",
            "Add parmesan and fresh basil"
        ],
        servings: 6,
        nutrition: {
            calories: 325,
            protein: 12,
            carbs: 48,
            fats: 10
        },
        prepTime: 25,
        difficulty: "Easy"
    },
    {
        id: 25,
        name: "Chicken Fajitas",
        ingredients: [
            { name: "chicken breast", quantity: 1.5, unit: "lbs" },
            { name: "bell pepper", quantity: 3, unit: "pieces" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "tortillas", quantity: 8, unit: "pieces" },
            { name: "fajita seasoning", quantity: 2, unit: "tbsp" },
            { name: "lime juice", quantity: 2, unit: "tbsp" },
            { name: "sour cream", quantity: 0.5, unit: "cups" }
        ],
        instructions: [
            "Slice chicken into strips and season with fajita seasoning",
            "Slice bell peppers and onions",
            "Cook chicken in a hot pan until done, remove",
            "Cook vegetables until tender",
            "Return chicken to pan with lime juice",
            "Serve with warm tortillas and sour cream"
        ],
        servings: 4,
        nutrition: {
            calories: 385,
            protein: 35,
            carbs: 35,
            fats: 12
        },
        prepTime: 30,
        difficulty: "Easy"
    },
    {
        id: 26,
        name: "French Toast",
        ingredients: [
            { name: "bread", quantity: 8, unit: "slices" },
            { name: "egg", quantity: 4, unit: "whole" },
            { name: "milk", quantity: 0.5, unit: "cups" },
            { name: "vanilla extract", quantity: 1, unit: "tsp" },
            { name: "cinnamon", quantity: 1, unit: "tsp" },
            { name: "butter", quantity: 2, unit: "tbsp" },
            { name: "maple syrup", quantity: 0.25, unit: "cups" }
        ],
        instructions: [
            "Whisk eggs, milk, vanilla, and cinnamon",
            "Dip bread slices in egg mixture",
            "Cook in buttered pan until golden on both sides",
            "Serve with maple syrup"
        ],
        servings: 4,
        nutrition: {
            calories: 285,
            protein: 12,
            carbs: 38,
            fats: 10
        },
        prepTime: 15,
        difficulty: "Easy"
    },
    {
        id: 27,
        name: "Beef Stir Fry",
        ingredients: [
            { name: "beef sirloin", quantity: 1, unit: "lbs" },
            { name: "broccoli", quantity: 2, unit: "cups" },
            { name: "carrots", quantity: 2, unit: "pieces" },
            { name: "soy sauce", quantity: 3, unit: "tbsp" },
            { name: "ginger", quantity: 1, unit: "tbsp" },
            { name: "garlic", quantity: 3, unit: "cloves" },
            { name: "vegetable oil", quantity: 2, unit: "tbsp" },
            { name: "rice", quantity: 2, unit: "cups" }
        ],
        instructions: [
            "Slice beef into thin strips",
            "Heat oil in a wok over high heat",
            "Stir-fry beef until browned, remove",
            "Add vegetables and stir-fry until crisp-tender",
            "Return beef, add soy sauce, ginger, and garlic",
            "Serve over rice"
        ],
        servings: 4,
        nutrition: {
            calories: 385,
            protein: 32,
            carbs: 35,
            fats: 12
        },
        prepTime: 25,
        difficulty: "Medium"
    },
    {
        id: 28,
        name: "Caprese Salad",
        ingredients: [
            { name: "tomato", quantity: 4, unit: "pieces" },
            { name: "mozzarella cheese", quantity: 8, unit: "oz" },
            { name: "fresh basil", quantity: 0.5, unit: "cups" },
            { name: "olive oil", quantity: 3, unit: "tbsp" },
            { name: "balsamic vinegar", quantity: 1, unit: "tbsp" },
            { name: "salt", quantity: 0.5, unit: "tsp" },
            { name: "black pepper", quantity: 0.5, unit: "tsp" }
        ],
        instructions: [
            "Slice tomatoes and mozzarella into rounds",
            "Arrange alternating slices on a plate",
            "Tuck fresh basil leaves between slices",
            "Drizzle with olive oil and balsamic vinegar",
            "Season with salt and pepper"
        ],
        servings: 4,
        nutrition: {
            calories: 245,
            protein: 14,
            carbs: 8,
            fats: 18
        },
        prepTime: 10,
        difficulty: "Easy"
    },
    {
        id: 29,
        name: "Chicken Parmesan",
        ingredients: [
            { name: "chicken breast", quantity: 4, unit: "pieces" },
            { name: "breadcrumbs", quantity: 1, unit: "cups" },
            { name: "parmesan cheese", quantity: 0.5, unit: "cups" },
            { name: "egg", quantity: 2, unit: "whole" },
            { name: "flour", quantity: 0.5, unit: "cups" },
            { name: "tomato sauce", quantity: 2, unit: "cups" },
            { name: "mozzarella cheese", quantity: 1, unit: "cups" },
            { name: "olive oil", quantity: 0.25, unit: "cups" }
        ],
        instructions: [
            "Pound chicken breasts to even thickness",
            "Dredge in flour, then egg, then breadcrumb-parmesan mixture",
            "Pan-fry until golden on both sides",
            "Place in baking dish, top with tomato sauce and mozzarella",
            "Bake at 375°F for 20 minutes until cheese is bubbly"
        ],
        servings: 4,
        nutrition: {
            calories: 485,
            protein: 42,
            carbs: 28,
            fats: 20
        },
        prepTime: 45,
        difficulty: "Medium"
    },
    {
        id: 30,
        name: "Mushroom Risotto",
        ingredients: [
            { name: "arborio rice", quantity: 1.5, unit: "cups" },
            { name: "mushrooms", quantity: 1, unit: "lbs" },
            { name: "onion", quantity: 1, unit: "whole" },
            { name: "white wine", quantity: 0.5, unit: "cups" },
            { name: "chicken broth", quantity: 4, unit: "cups" },
            { name: "parmesan cheese", quantity: 0.5, unit: "cups" },
            { name: "butter", quantity: 2, unit: "tbsp" },
            { name: "garlic", quantity: 2, unit: "cloves" }
        ],
        instructions: [
            "Heat broth in a separate pot and keep warm",
            "Sauté mushrooms and set aside",
            "Cook onions and garlic until soft",
            "Add rice and toast for 2 minutes",
            "Add wine and stir until absorbed",
            "Add warm broth one ladle at a time, stirring constantly",
            "Continue until rice is creamy and tender (20-25 minutes)",
            "Stir in mushrooms, butter, and parmesan"
        ],
        servings: 4,
        nutrition: {
            calories: 385,
            protein: 12,
            carbs: 58,
            fats: 12
        },
        prepTime: 45,
        difficulty: "Hard"
    }
];

// ============================================================================
// APPLICATION STATE
// ============================================================================

/**
 * Application state object
 * Manages pantry items, meal plan, and current week
 */
const AppState = {
    pantry: [],
    mealPlan: {},
    currentWeekStart: new Date(),
    recipes: SAMPLE_RECIPES
};

// Initialize current week to start of current week (Monday)
function initializeWeek() {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
    AppState.currentWeekStart = new Date(today.setDate(diff));
    AppState.currentWeekStart.setHours(0, 0, 0, 0);
}

// ============================================================================
// LOCAL STORAGE PERSISTENCE
// ============================================================================

/**
 * Save application state to localStorage
 */
function saveState() {
    try {
        localStorage.setItem('mealPlanner_pantry', JSON.stringify(AppState.pantry));
        localStorage.setItem('mealPlanner_mealPlan', JSON.stringify(AppState.mealPlan));
        localStorage.setItem('mealPlanner_weekStart', AppState.currentWeekStart.toISOString());
    } catch (e) {
        console.error('Error saving state:', e);
    }
}

/**
 * Load application state from localStorage
 */
function loadState() {
    try {
        const pantryData = localStorage.getItem('mealPlanner_pantry');
        if (pantryData) {
            AppState.pantry = JSON.parse(pantryData);
        }

        const mealPlanData = localStorage.getItem('mealPlanner_mealPlan');
        if (mealPlanData) {
            AppState.mealPlan = JSON.parse(mealPlanData);
        }

        const weekStartData = localStorage.getItem('mealPlanner_weekStart');
        if (weekStartData) {
            AppState.currentWeekStart = new Date(weekStartData);
        }
    } catch (e) {
        console.error('Error loading state:', e);
    }
}

// ============================================================================
// PANTRY MANAGEMENT FUNCTIONS
// ============================================================================

/**
 * Add an item to the pantry
 * @param {string} name - Ingredient name
 * @param {number} quantity - Quantity amount
 * @param {string} unit - Unit of measurement
 */
function addPantryItem(name, quantity, unit) {
    if (!name || quantity <= 0) {
        alert('Please enter a valid ingredient name and quantity.');
        return;
    }

    // Normalize ingredient name (lowercase, trim)
    const normalizedName = name.toLowerCase().trim();

    // Check if ingredient already exists
    const existingIndex = AppState.pantry.findIndex(
        item => item.name.toLowerCase() === normalizedName && item.unit === unit
    );

    if (existingIndex >= 0) {
        // Update existing item quantity
        AppState.pantry[existingIndex].quantity += quantity;
    } else {
        // Add new item
        AppState.pantry.push({
            name: name.trim(),
            quantity: quantity,
            unit: unit
        });
    }

    saveState();
    renderPantry();
}

/**
 * Remove an item from the pantry
 * @param {number} index - Index of item to remove
 */
function removePantryItem(index) {
    AppState.pantry.splice(index, 1);
    saveState();
    renderPantry();
}

/**
 * Update pantry item quantity
 * @param {number} index - Index of item to update
 * @param {number} newQuantity - New quantity value
 */
function updatePantryItem(index, newQuantity) {
    if (newQuantity <= 0) {
        removePantryItem(index);
    } else {
        AppState.pantry[index].quantity = newQuantity;
        saveState();
        renderPantry();
    }
}

/**
 * Render pantry items to the DOM
 */
function renderPantry() {
    const container = document.getElementById('pantry-items-container');
    container.innerHTML = '';

    if (AppState.pantry.length === 0) {
        container.innerHTML = '<p class="info-text">Your pantry is empty. Add ingredients to get started!</p>';
        return;
    }

    AppState.pantry.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'pantry-item';
        itemDiv.innerHTML = `
            <div class="pantry-item-info">
                <div class="pantry-item-name">${item.name}</div>
                <div class="pantry-item-quantity">${item.quantity} ${item.unit}</div>
            </div>
            <button class="btn-danger" onclick="removePantryItem(${index})">Remove</button>
        `;
        container.appendChild(itemDiv);
    });
}

// ============================================================================
// RECIPE SEARCH AND FILTERING FUNCTIONS
// ============================================================================

/**
 * Search recipes by name or ingredient
 * @param {string} query - Search query
 * @returns {Array} Filtered recipes
 */
function searchRecipes(query) {
    if (!query) return AppState.recipes;

    const lowerQuery = query.toLowerCase();
    return AppState.recipes.filter(recipe => {
        // Search in recipe name
        if (recipe.name.toLowerCase().includes(lowerQuery)) {
            return true;
        }
        // Search in ingredients
        return recipe.ingredients.some(ing => 
            ing.name.toLowerCase().includes(lowerQuery)
        );
    });
}

/**
 * Filter recipes by difficulty level
 * @param {Array} recipes - Recipes to filter
 * @param {string} difficulty - Difficulty level (Easy, Medium, Hard)
 * @returns {Array} Filtered recipes
 */
function filterByDifficulty(recipes, difficulty) {
    if (!difficulty) return recipes;
    return recipes.filter(recipe => recipe.difficulty === difficulty);
}

/**
 * Filter recipes that use pantry items
 * Prioritizes recipes that use more pantry ingredients
 * Uses comprehensive synonym database for improved matching
 * @param {Array} recipes - Recipes to filter
 * @returns {Array} Filtered and sorted recipes
 */
function filterByPantry(recipes) {
    if (AppState.pantry.length === 0) return [];

    return recipes
        .map(recipe => {
            // Count how many ingredients match pantry items
            let matchCount = 0;
            recipe.ingredients.forEach(recipeIng => {
                const hasMatch = AppState.pantry.some(pantryItem => {
                    // Use synonym database matching if available
                    if (typeof IngredientSynonymDB !== 'undefined') {
                        return IngredientSynonymDB.match(recipeIng.name, pantryItem.name);
                    }
                    // Fallback to basic matching
                    const normalizedRecipeIng = recipeIng.name.toLowerCase();
                    const normalizedPantryIng = pantryItem.name.toLowerCase();
                    return normalizedPantryIng.includes(normalizedRecipeIng) || 
                           normalizedRecipeIng.includes(normalizedPantryIng);
                });
                if (hasMatch) matchCount++;
            });

            return {
                recipe: recipe,
                matchCount: matchCount,
                matchRatio: matchCount / recipe.ingredients.length
            };
        })
        .filter(item => item.matchCount > 0)
        .sort((a, b) => {
            // Sort by match ratio (descending), then by total matches
            if (b.matchRatio !== a.matchRatio) {
                return b.matchRatio - a.matchRatio;
            }
            return b.matchCount - a.matchCount;
        })
        .map(item => item.recipe);
}

/**
 * Render recipes to the DOM
 * @param {Array} recipes - Recipes to render
 */
function renderRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';

    if (recipes.length === 0) {
        container.innerHTML = '<p class="info-text">No recipes found matching your criteria.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => showRecipeModal(recipe);

        // Get first few ingredients for preview
        const ingredientsPreview = recipe.ingredients
            .slice(0, 3)
            .map(ing => ing.name)
            .join(', ');

        card.innerHTML = `
            <div class="recipe-card-header">
                <div class="recipe-card-name">${recipe.name}</div>
                <span class="recipe-card-difficulty difficulty-${recipe.difficulty.toLowerCase()}">
                    ${recipe.difficulty}
                </span>
            </div>
            <div class="recipe-card-info">
                <div>⏱ ${recipe.prepTime} min</div>
                <div>👥 ${recipe.servings} servings</div>
                <div>🔥 ${recipe.nutrition.calories} cal/serving</div>
            </div>
            <div class="recipe-card-ingredients">
                <strong>Ingredients:</strong> ${ingredientsPreview}${recipe.ingredients.length > 3 ? '...' : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Show recipe details in modal
 * @param {Object} recipe - Recipe object to display
 */
function showRecipeModal(recipe) {
    const modal = document.getElementById('recipe-modal');
    const body = document.getElementById('recipe-modal-body');

    body.innerHTML = `
        <div class="recipe-detail">
            <h2>${recipe.name}</h2>
            <div class="recipe-detail-section">
                <div><strong>Difficulty:</strong> ${recipe.difficulty}</div>
                <div><strong>Prep Time:</strong> ${recipe.prepTime} minutes</div>
                <div><strong>Servings:</strong> ${recipe.servings}</div>
                <div><strong>Nutrition per serving:</strong> ${recipe.nutrition.calories} cal, 
                    ${recipe.nutrition.protein}g protein, ${recipe.nutrition.carbs}g carbs, 
                    ${recipe.nutrition.fats}g fats</div>
            </div>
            <div class="recipe-detail-section">
                <h3>Ingredients</h3>
                ${recipe.ingredients.map(ing => {
                    let ingHtml = `
                    <div class="recipe-detail-ingredient">
                        ${ing.quantity} ${ing.unit} ${ing.name}
                    </div>`;
                    
                    // Show substitution suggestions if available
                    if (typeof IngredientSubstitutionDB !== 'undefined') {
                        const substitutions = IngredientSubstitutionDB.findSubstitutions(ing.name, true, AppState.pantry);
                        if (substitutions.length > 0) {
                            const available = substitutions.filter(sub => sub.available);
                            if (available.length > 0) {
                                const best = available[0];
                                ingHtml += `
                    <div class="recipe-substitution" style="margin-left: 20px; margin-top: 5px; font-size: 0.85em; color: #4caf50;">
                        💡 Can use: ${best.name} (${best.notes})
                    </div>`;
                            } else if (substitutions.length > 0) {
                                const best = substitutions[0];
                                ingHtml += `
                    <div class="recipe-substitution" style="margin-left: 20px; margin-top: 5px; font-size: 0.85em; color: #2196f3;">
                        💡 Can substitute with: ${best.name} (${best.notes})
                    </div>`;
                            }
                        }
                    }
                    
                    return ingHtml;
                }).join('')}
            </div>
            <div class="recipe-detail-section">
                <h3>Instructions</h3>
                <div class="recipe-detail-instructions">
                    ${recipe.instructions.map(inst => `
                        <div class="recipe-detail-instruction">${inst}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// ============================================================================
// MEAL PLANNING FUNCTIONS
// ============================================================================

/**
 * Get week date range string
 * @returns {string} Formatted week range
 */
function getWeekDisplay() {
    const start = new Date(AppState.currentWeekStart);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    
    const options = { month: 'short', day: 'numeric' };
    return `Week of ${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
}

/**
 * Get day name from date offset
 * @param {number} offset - Days from week start (0-6)
 * @returns {string} Day name (monday, tuesday, etc.)
 */
function getDayName(offset) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    return days[offset];
}

/**
 * Update meal plan selection
 * @param {string} day - Day name
 * @param {string} meal - Meal type (breakfast, lunch, dinner)
 * @param {number} recipeId - Recipe ID (or null to clear)
 */
function updateMealPlan(day, meal, recipeId) {
    const key = `${day}_${meal}`;
    if (recipeId) {
        AppState.mealPlan[key] = parseInt(recipeId);
    } else {
        delete AppState.mealPlan[key];
    }
    saveState();
    updateNutrition();
}

/**
 * Render meal plan selectors with current selections
 */
function renderMealPlan() {
    // Update week display
    document.getElementById('week-display').textContent = getWeekDisplay();

    // Populate all recipe selects
    const recipeSelects = document.querySelectorAll('.recipe-select');
    recipeSelects.forEach(select => {
        // Clear existing options except first
        const firstOption = select.options[0];
        select.innerHTML = '';
        select.appendChild(firstOption);

        // Add all recipes
        AppState.recipes.forEach(recipe => {
            const option = document.createElement('option');
            option.value = recipe.id;
            option.textContent = recipe.name;
            select.appendChild(option);
        });

        // Set current selection
        const day = select.dataset.day;
        const meal = select.dataset.meal;
        const key = `${day}_${meal}`;
        if (AppState.mealPlan[key]) {
            select.value = AppState.mealPlan[key];
        }
    });
}

/**
 * Navigate to previous week
 */
function previousWeek() {
    AppState.currentWeekStart.setDate(AppState.currentWeekStart.getDate() - 7);
    saveState();
    renderMealPlan();
    updateNutrition();
}

/**
 * Navigate to next week
 */
function nextWeek() {
    AppState.currentWeekStart.setDate(AppState.currentWeekStart.getDate() + 7);
    saveState();
    renderMealPlan();
    updateNutrition();
}

// ============================================================================
// GROCERY LIST GENERATION FUNCTIONS
// ============================================================================

/**
 * Normalize ingredient names for matching
 * Uses the ingredient synonym database for better matching
 * @param {string} name - Ingredient name
 * @returns {string} Normalized name
 */
function normalizeIngredientName(name) {
    if (!name) return '';
    // Use synonym database normalization if available
    if (typeof IngredientSynonymDB !== 'undefined') {
        return IngredientSynonymDB.normalize(name);
    }
    // Fallback to basic normalization
    return name.toLowerCase().trim();
}

/**
 * Check if two ingredients match (for pantry deduction)
 * Uses comprehensive synonym database for improved matching
 * @param {string} recipeIng - Recipe ingredient name
 * @param {string} pantryIng - Pantry ingredient name
 * @returns {boolean} True if ingredients match
 */
function ingredientsMatch(recipeIng, pantryIng) {
    if (!recipeIng || !pantryIng) return false;
    
    // Use synonym database if available
    if (typeof IngredientSynonymDB !== 'undefined') {
        return IngredientSynonymDB.match(recipeIng, pantryIng);
    }
    
    // Fallback to basic matching
    const normalizedRecipe = normalizeIngredientName(recipeIng);
    const normalizedPantry = normalizeIngredientName(pantryIng);
    
    // Exact match
    if (normalizedRecipe === normalizedPantry) return true;
    
    // One contains the other (handles variations like "chicken breast" vs "chicken")
    if (normalizedRecipe.includes(normalizedPantry) || normalizedPantry.includes(normalizedRecipe)) {
        return true;
    }
    
    return false;
}

/**
 * Convert units to a common base for quantity calculations
 * Uses the comprehensive UnitConverter library
 * @param {number} quantity - Quantity to convert
 * @param {string} unit - Source unit
 * @param {string} targetUnit - Target unit
 * @returns {number} Converted quantity (or original if conversion not possible)
 */
function convertUnit(quantity, unit, targetUnit) {
    // If units match, no conversion needed
    if (unit === targetUnit) return quantity;

    // Use comprehensive unit converter library
    try {
        if (UnitConverter.canConvert(unit, targetUnit)) {
            return UnitConverter.convert(quantity, unit, targetUnit);
        }
    } catch (e) {
        console.warn(`Unit conversion failed: ${unit} to ${targetUnit}`, e);
    }

    // If conversion not available, return original (assumes same unit type)
    return quantity;
}

/**
 * Generate grocery list from meal plan
 * Subtracts pantry inventory from recipe requirements
 * @returns {Object} Grocery list organized by ingredient
 */
function generateGroceryList() {
    const groceryList = {};
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const meals = ['breakfast', 'lunch', 'dinner'];

    // Collect all ingredients from meal plan
    days.forEach(day => {
        meals.forEach(meal => {
            const key = `${day}_${meal}`;
            const recipeId = AppState.mealPlan[key];
            if (recipeId) {
                const recipe = AppState.recipes.find(r => r.id === recipeId);
                if (recipe) {
                    recipe.ingredients.forEach(ing => {
                        const ingKey = `${normalizeIngredientName(ing.name)}_${ing.unit}`;
                        if (!groceryList[ingKey]) {
                            groceryList[ingKey] = {
                                name: ing.name,
                                quantity: 0,
                                unit: ing.unit
                            };
                        }
                        // Add quantity needed (assuming 1 serving per meal)
                        groceryList[ingKey].quantity += ing.quantity / recipe.servings;
                    });
                }
            }
        });
    });

    // Subtract pantry inventory and check for substitutions
    AppState.pantry.forEach(pantryItem => {
        Object.keys(groceryList).forEach(ingKey => {
            const groceryItem = groceryList[ingKey];
            if (ingredientsMatch(groceryItem.name, pantryItem.name)) {
                // Try to match units and subtract
                if (groceryItem.unit === pantryItem.unit) {
                    groceryItem.quantity = Math.max(0, groceryItem.quantity - pantryItem.quantity);
                } else {
                    // Attempt unit conversion
                    const convertedPantryQty = convertUnit(pantryItem.quantity, pantryItem.unit, groceryItem.unit);
                    groceryItem.quantity = Math.max(0, groceryItem.quantity - convertedPantryQty);
                }
            }
        });
    });

    // Check for substitutions for items still needed
    if (typeof IngredientSubstitutionDB !== 'undefined') {
        Object.keys(groceryList).forEach(ingKey => {
            const groceryItem = groceryList[ingKey];
            if (groceryItem.quantity > 0) {
                // Check if we have a substitution available in pantry
                const bestSub = IngredientSubstitutionDB.getBest(groceryItem.name, AppState.pantry);
                if (bestSub) {
                    // Find the pantry item that matches the substitution
                    const pantrySub = AppState.pantry.find(item => {
                        if (typeof IngredientSynonymDB !== 'undefined') {
                            return IngredientSynonymDB.match(item.name, bestSub.name);
                        }
                        return item.name.toLowerCase() === bestSub.name.toLowerCase();
                    });
                    
                    if (pantrySub) {
                        // Calculate how much we can substitute
                        const neededQty = groceryItem.quantity;
                        const subRatio = bestSub.ratio || 1.0;
                        const availableQty = pantrySub.quantity;
                        
                        // Convert units if needed
                        let convertedAvailable = availableQty;
                        if (groceryItem.unit !== pantrySub.unit) {
                            convertedAvailable = convertUnit(availableQty, pantrySub.unit, groceryItem.unit);
                        }
                        
                        // Apply substitution ratio
                        const effectiveAvailable = convertedAvailable / subRatio;
                        const canSubstitute = Math.min(neededQty, effectiveAvailable);
                        
                        if (canSubstitute > 0) {
                            groceryItem.quantity = Math.max(0, neededQty - canSubstitute);
                            groceryItem.substitution = {
                                name: pantrySub.name,
                                original: groceryItem.name,
                                ratio: subRatio,
                                notes: bestSub.notes,
                                quality: bestSub.quality,
                                quantityUsed: canSubstitute * subRatio
                            };
                        }
                    }
                }
            }
        });
    }

    // Remove items with zero or negative quantities
    Object.keys(groceryList).forEach(key => {
        if (groceryList[key].quantity <= 0) {
            delete groceryList[key];
        }
    });

    return groceryList;
}

/**
 * Render grocery list to the DOM
 */
function renderGroceryList() {
    const container = document.getElementById('grocery-list-container');
    const groceryList = generateGroceryList();

    if (Object.keys(groceryList).length === 0) {
        container.innerHTML = '<p class="info-text">No items needed! You have everything in your pantry.</p>';
        return;
    }

    // Group by ingredient name (simplified - could be improved with categories)
    const grouped = {};
    Object.values(groceryList).forEach(item => {
        const name = item.name.toLowerCase();
        if (!grouped[name]) {
            grouped[name] = [];
        }
        grouped[name].push(item);
    });

    const listDiv = document.createElement('div');
    listDiv.className = 'grocery-list';

    Object.keys(grouped).sort().forEach(name => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'grocery-category';
        
        const items = grouped[name];
        categoryDiv.innerHTML = `
            <h4>${items[0].name}</h4>
            ${items.map(item => {
                let itemHtml = `
                <div class="grocery-item">
                    <span class="grocery-item-name">${item.name}</span>
                    <span class="grocery-item-quantity">${item.quantity.toFixed(2)} ${item.unit}</span>
                </div>`;
                
                // Show substitution suggestion if available
                if (item.substitution) {
                    const sub = item.substitution;
                    const qualityClass = sub.quality === 'excellent' ? 'sub-excellent' : 
                                       sub.quality === 'good' ? 'sub-good' : 'sub-fair';
                    itemHtml += `
                <div class="grocery-substitution ${qualityClass}">
                    <span class="sub-label">💡 Substitution available:</span>
                    <span class="sub-name">${sub.name}</span>
                    <span class="sub-details">(${sub.notes})</span>
                </div>`;
                } else if (typeof IngredientSubstitutionDB !== 'undefined') {
                    // Show substitution suggestions even if not in pantry
                    const substitutions = IngredientSubstitutionDB.findSubstitutions(item.name, false, []);
                    if (substitutions.length > 0) {
                        const bestSub = substitutions[0];
                        itemHtml += `
                <div class="grocery-substitution-suggestion">
                    <span class="sub-label">💡 Can substitute with:</span>
                    <span class="sub-name">${bestSub.name}</span>
                    <span class="sub-details">(${bestSub.notes})</span>
                </div>`;
                    }
                }
                
                return itemHtml;
            }).join('')}
        `;
        listDiv.appendChild(categoryDiv);
    });

    container.innerHTML = '';
    container.appendChild(listDiv);
}

// ============================================================================
// NUTRITION TRACKING FUNCTIONS
// ============================================================================

/**
 * Calculate total nutrition for the current week's meal plan
 * @returns {Object} Total nutrition values
 */
function calculateWeeklyNutrition() {
    const totals = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0
    };

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const meals = ['breakfast', 'lunch', 'dinner'];

    days.forEach(day => {
        meals.forEach(meal => {
            const key = `${day}_${meal}`;
            const recipeId = AppState.mealPlan[key];
            if (recipeId) {
                const recipe = AppState.recipes.find(r => r.id === recipeId);
                if (recipe) {
                    // Add nutrition per serving (assuming 1 serving per meal)
                    totals.calories += recipe.nutrition.calories;
                    totals.protein += recipe.nutrition.protein;
                    totals.carbs += recipe.nutrition.carbs;
                    totals.fats += recipe.nutrition.fats;
                }
            }
        });
    });

    return totals;
}

/**
 * Calculate daily nutrition breakdown
 * @returns {Object} Daily nutrition by day
 */
function calculateDailyNutrition() {
    const daily = {};
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const meals = ['breakfast', 'lunch', 'dinner'];

    days.forEach(day => {
        daily[day] = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
            meals: []
        };

        meals.forEach(meal => {
            const key = `${day}_${meal}`;
            const recipeId = AppState.mealPlan[key];
            if (recipeId) {
                const recipe = AppState.recipes.find(r => r.id === recipeId);
                if (recipe) {
                    daily[day].calories += recipe.nutrition.calories;
                    daily[day].protein += recipe.nutrition.protein;
                    daily[day].carbs += recipe.nutrition.carbs;
                    daily[day].fats += recipe.nutrition.fats;
                    daily[day].meals.push({
                        meal: meal,
                        recipe: recipe.name,
                        nutrition: recipe.nutrition
                    });
                }
            }
        });
    });

    return daily;
}

/**
 * Update nutrition display
 */
function updateNutrition() {
    const weekly = calculateWeeklyNutrition();
    const daily = calculateDailyNutrition();

    // Update weekly totals
    document.getElementById('total-calories').textContent = weekly.calories.toFixed(0);
    document.getElementById('total-protein').textContent = weekly.protein.toFixed(1);
    document.getElementById('total-carbs').textContent = weekly.carbs.toFixed(1);
    document.getElementById('total-fats').textContent = weekly.fats.toFixed(1);

    // Update daily breakdown
    const container = document.getElementById('daily-nutrition-container');
    container.innerHTML = '';

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
        const dayData = daily[day];
        const card = document.createElement('div');
        card.className = 'daily-nutrition-card';
        
        const dayName = day.charAt(0).toUpperCase() + day.slice(1);
        card.innerHTML = `
            <h4>${dayName}</h4>
            <div class="daily-nutrition-item">
                <span>Calories:</span>
                <span>${dayData.calories.toFixed(0)}</span>
            </div>
            <div class="daily-nutrition-item">
                <span>Protein:</span>
                <span>${dayData.protein.toFixed(1)}g</span>
            </div>
            <div class="daily-nutrition-item">
                <span>Carbs:</span>
                <span>${dayData.carbs.toFixed(1)}g</span>
            </div>
            <div class="daily-nutrition-item">
                <span>Fats:</span>
                <span>${dayData.fats.toFixed(1)}g</span>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============================================================================
// EVENT LISTENERS AND INITIALIZATION
// ============================================================================

/**
 * Initialize application
 */
function init() {
    // Initialize week
    initializeWeek();

    // Load saved state
    loadState();

    // Set up tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            
            // Update active tab button
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update active tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Pantry: Add item button
    document.getElementById('add-pantry-item').addEventListener('click', () => {
        const name = document.getElementById('pantry-ingredient').value;
        const quantity = parseFloat(document.getElementById('pantry-quantity').value);
        const unit = document.getElementById('pantry-unit').value;

        if (name && quantity > 0) {
            addPantryItem(name, quantity, unit);
            // Clear inputs
            document.getElementById('pantry-ingredient').value = '';
            document.getElementById('pantry-quantity').value = '';
        }
    });

    // Pantry: Enter key support
    document.getElementById('pantry-ingredient').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('add-pantry-item').click();
        }
    });

    // Recipes: Search input
    document.getElementById('recipe-search-input').addEventListener('input', (e) => {
        const query = e.target.value;
        const difficulty = document.getElementById('recipe-filter-difficulty').value;
        let recipes = searchRecipes(query);
        recipes = filterByDifficulty(recipes, difficulty);
        renderRecipes(recipes);
    });

    // Recipes: Difficulty filter
    document.getElementById('recipe-filter-difficulty').addEventListener('change', (e) => {
        const query = document.getElementById('recipe-search-input').value;
        const difficulty = e.target.value;
        let recipes = searchRecipes(query);
        recipes = filterByDifficulty(recipes, difficulty);
        renderRecipes(recipes);
    });

    // Recipes: Filter by pantry button
    document.getElementById('filter-by-pantry').addEventListener('click', () => {
        const filtered = filterByPantry(AppState.recipes);
        renderRecipes(filtered);
    });

    // Meal Plan: Recipe selection changes
    document.querySelectorAll('.recipe-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const day = select.dataset.day;
            const meal = select.dataset.meal;
            const recipeId = e.target.value || null;
            updateMealPlan(day, meal, recipeId);
        });
    });

    // Meal Plan: Week navigation
    document.getElementById('prev-week').addEventListener('click', previousWeek);
    document.getElementById('next-week').addEventListener('click', nextWeek);

    // Grocery List: Generate button
    document.getElementById('generate-grocery-list').addEventListener('click', renderGroceryList);
    document.getElementById('clear-grocery-list').addEventListener('click', () => {
        document.getElementById('grocery-list-container').innerHTML = 
            '<p class="info-text">Click "Generate Grocery List" to create a shopping list based on your meal plan and pantry inventory.</p>';
    });

    // Modal: Close button
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('recipe-modal').style.display = 'none';
    });

    // Modal: Close on outside click
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('recipe-modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initial render
    renderPantry();
    renderRecipes(AppState.recipes);
    renderMealPlan();
    updateNutrition();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

