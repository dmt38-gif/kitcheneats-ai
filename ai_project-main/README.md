# AI Meal Planner - Sprint 1 MVP

A JavaScript-based web application for meal planning, pantry management, and grocery list generation. This is the first iteration of a 4-sprint development cycle focused on establishing foundational architecture and core functionality.

## Features

### ✅ Sprint 1 Feature Checklist

- [x] **Pantry Inventory System**
  - Add ingredients with quantities and units
  - View current pantry items
  - Remove pantry items
  - Automatic quantity aggregation for duplicate ingredients

- [x] **Recipe Database Interface**
  - Browse 30 sample recipes with complete data
  - Search recipes by name or ingredient
  - Filter recipes by difficulty level (Easy, Medium, Hard)
  - Filter recipes that use pantry items (prioritized by match ratio)
  - View detailed recipe information in modal

- [x] **AI-Powered Recipe Recommendation Engine**
  - Recipe prioritization based on pantry inventory
  - Match scoring based on ingredient overlap
  - Recipes sorted by pantry utilization ratio

- [x] **Weekly Meal Planning Interface**
  - 7-day meal plan view (Monday through Sunday)
  - Three meals per day (Breakfast, Lunch, Dinner)
  - Week navigation (previous/next week)
  - Recipe selection dropdowns for each meal slot
  - Persistent meal plan storage

- [x] **Automatic Grocery List Generator**
  - Generates shopping list from meal plan
  - Subtracts pantry inventory from recipe requirements
  - Unit conversion for ingredient matching
  - Groups items by ingredient name
  - Displays quantities needed

- [x] **Nutrition Tracking Component**
  - Weekly nutrition summary (total calories, protein, carbs, fats)
  - Daily nutrition breakdown
  - Per-serving nutritional information
  - Automatic calculation based on meal plan

## Setup Instructions

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required - runs entirely client-side

### Installation

1. Clone or download this repository
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`

### Running the Application

1. Open `index.html` in your web browser
   - You can double-click the file, or
   - Right-click and select "Open with" → your preferred browser
   - Or use a local web server (optional):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```
     Then navigate to `http://localhost:8000`

2. The application will load with:
   - 30 sample recipes pre-loaded
   - Empty pantry (ready for input)
   - Empty meal plan (ready for selection)
   - All data persisted in browser localStorage

### Deploying to GitHub Pages

This application can be deployed as a static site using GitHub Pages:

1. Go to your repository on GitHub: https://github.com/act40-uwf/ai_project
2. Click **Settings** (top right of repository)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

Your application will be live at:
**https://act40-uwf.github.io/ai_project/**

> Note: It may take a few minutes for the site to be available after enabling GitHub Pages. You can check the deployment status in the **Actions** tab of your repository.

## Usage Guide

### Managing Your Pantry

1. Navigate to the **Pantry** tab
2. Enter an ingredient name (e.g., "chicken breast")
3. Enter the quantity and select a unit
4. Click "Add to Pantry"
5. View all pantry items below
6. Remove items using the "Remove" button

### Browsing Recipes

1. Navigate to the **Recipes** tab
2. Use the search bar to find recipes by name or ingredient
3. Filter by difficulty using the dropdown
4. Click "Show Recipes Using Pantry Items" to see recommendations
5. Click on any recipe card to view full details

### Planning Meals

1. Navigate to the **Meal Plan** tab
2. Use the week navigation buttons to select a week
3. For each day and meal, select a recipe from the dropdown
4. Your selections are automatically saved
5. Navigate between weeks to plan ahead

### Generating Grocery Lists

1. First, create a meal plan (see above)
2. Navigate to the **Grocery List** tab
3. Click "Generate Grocery List"
4. The list shows items needed, minus what's in your pantry
5. Items are grouped by ingredient name

### Tracking Nutrition

1. Navigate to the **Nutrition** tab
2. View weekly totals for calories, protein, carbs, and fats
3. Scroll down to see daily breakdowns
4. Nutrition updates automatically as you modify your meal plan

## Technical Architecture

### Data Structures

**Recipe Object:**
```javascript
{
  id: number,
  name: string,
  ingredients: [{ name: string, quantity: number, unit: string }],
  instructions: [string],
  servings: number,
  nutrition: { calories: number, protein: number, carbs: number, fats: number },
  prepTime: number,
  difficulty: "Easy" | "Medium" | "Hard"
}
```

**Pantry Item:**
```javascript
{
  name: string,
  quantity: number,
  unit: string
}
```

**Meal Plan:**
```javascript
{
  "monday_breakfast": recipeId,
  "monday_lunch": recipeId,
  // ... etc
}
```

### Key Algorithms

1. **Recipe-Pantry Matching**: Normalizes ingredient names and performs fuzzy matching to identify pantry items that can be used in recipes.

2. **Grocery List Generation**: 
   - Aggregates all ingredients from selected meals
   - Matches ingredients with pantry items
   - Performs unit conversions where possible
   - Subtracts pantry quantities from recipe requirements

3. **Nutrition Calculation**: Sums nutritional values from all selected recipes, assuming 1 serving per meal.

### Data Persistence

All application state is saved to browser `localStorage`:
- Pantry items
- Meal plan selections
- Current week view

Data persists across browser sessions and page refreshes.

## Sample Recipe Dataset

The application includes 30 diverse recipes covering:
- Breakfast items (pancakes, omelette, French toast, avocado toast)
- Main dishes (chicken, beef, fish, vegetarian options)
- Salads and sides (Greek salad, Caesar salad, Caprese salad)
- Pasta dishes (carbonara, primavera, lasagna)
- International cuisine (curry, teriyaki, fajitas, tacos)
- Desserts (chocolate chip cookies)

Each recipe includes:
- Complete ingredient lists with quantities and units
- Step-by-step instructions
- Nutritional information per serving
- Preparation time
- Difficulty rating

## Known Limitations (Sprint 1)

### Ingredient Matching
- Unit conversion is simplified and may not handle all cases
- Ingredient name matching uses basic string comparison (exact or substring)
- No handling for ingredient synonyms (e.g., "tomato" vs "tomatoes")
- No support for ingredient substitutions

### Grocery List Generation
- Assumes 1 serving per meal (no portion size adjustment)
- Unit conversions are limited to common conversions
- No categorization of grocery items (produce, meat, dairy, etc.)
- No handling for recipe scaling

### Nutrition Tracking
- Fixed to 1 serving per meal (no portion size adjustments)
- No daily calorie goals or limits
- No macro ratio calculations
- No micronutrient tracking

### Recipe Database
- Static dataset (no dynamic recipe addition)
- No recipe editing or customization
- No user recipe uploads
- No recipe ratings or reviews

### Meal Planning
- No meal prep scheduling
- No recipe scaling for multiple servings
- No dietary restriction filtering
- No meal type preferences (vegetarian, vegan, etc.)

### User Experience
- No user accounts or multi-user support
- No data export/import
- No print functionality for grocery lists
- No mobile-optimized layout (responsive but basic)

## Notes for Sprint 2 Improvements

### Priority Enhancements

1. **Enhanced Ingredient Matching**
   - Implement comprehensive unit conversion library **added in v1.1
   - Add ingredient synonym database **added in v1.1
   - Improve fuzzy matching algorithm **added in v1.1
   - Support for ingredient substitutions **added in v1.1

2. **Portion Size Adjustments**
   - Allow users to specify servings per meal
   - Scale nutrition calculations accordingly
   - Update grocery list quantities based on portions

3. **Recipe Customization**
   - Allow users to add custom recipes
   - Edit existing recipes
   - Save favorite recipes
   - Recipe scaling functionality

4. **Improved Grocery List**
   - Categorize items (produce, meat, dairy, pantry, etc.)
   - Add checkboxes for shopping
   - Print-friendly format
   - Export to shopping apps

5. **Enhanced Nutrition Features**
   - Daily calorie goals
   - Macro ratio tracking
   - Micronutrient information
   - Nutrition charts and graphs

6. **Dietary Restrictions**
   - Filter recipes by dietary preferences
   - Allergen tracking
   - Vegetarian/vegan/gluten-free filters

7. **AI Integration Preparation**
   - Structure data for AI model training
   - User feedback collection mechanism
   - Recipe recommendation scoring system
   - Data export for model training

### Technical Debt

- Refactor unit conversion into separate utility module
- Implement more robust ingredient matching service
- Add input validation and error handling
- Improve code modularity for easier testing
- Add unit tests for core algorithms

### Research Questions Preparation

For Sprint 3 A/B testing:
- Implement user feedback tracking
- Add analytics for feature usage
- Structure data collection for model training
- Prepare baseline metrics for comparison

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires JavaScript enabled. Uses modern ES6+ features.

## File Structure

```
course project/
├── index.html      # Main HTML structure
├── styles.css      # Application styling
├── app.js          # Core application logic
└── README.md       # This file
```

## License

This project is part of an academic research project. All code is provided for educational and research purposes.

## Contact

For questions or issues related to this Sprint 1 MVP, please refer to the project documentation or contact the development team.

---

**Sprint 1 Status**: ✅ Complete - All core features implemented and functional

Additions from Sprint 1 > v1.1
Reviewing the project structure to understand the codebase.


[2 tools called]


Creating a unit conversion library. Checking the project structure, then implementing it.


[2 tools called]


Creating a unit conversion library and integrating it into the app.


[2 tools called]


Updating `app.js` to use the new unit conversion library and updating `index.html` to include it:


[3 tools called]


Checking for linting errors:


[1 tool called]


## Unit Conversion Library Implementation

### Created `unitConverter.js`
A unit conversion library with:

1. Volume conversions:
   - Metric: ml, l, dl
   - US Customary: tsp, tbsp, fl oz, cup, pint, quart, gallon
   - Imperial (UK): imperial tsp, tbsp, fl oz, cup, pint, quart, gallon

2. Weight conversions:
   - Metric: mg, g, kg, metric ton
   - US Customary: oz, lb/lbs, ton

3. Temperature conversions:
   - Celsius (°C)
   - Fahrenheit (°F)
   - Kelvin (K)

4. Length conversions:
   - Metric: mm, cm, m
   - US Customary: in, ft

5. Count units (non-convertible):
   - piece, clove, slice, head, bunch, stalk, can, package, bottle, box, bag

### Features
- Alias support: recognizes common variations (e.g., "cups" = "cup", "lbs" = "lb")
- Category validation: prevents invalid conversions (e.g., volume to weight)
- Error handling: clear error messages for invalid conversions
- Public API:
  - `convert(quantity, fromUnit, toUnit)` - Main conversion function
  - `canConvert(fromUnit, toUnit)` - Check if conversion is possible
  - `getCategory(unit)` - Get unit category
  - `isValidUnit(unit)` - Validate unit support
  - `getAllUnits()` - List all supported units

### Integration
- Updated `app.js` to use the new library instead of the basic conversion function
- Updated `index.html` to include the new script file
- Maintains backward compatibility with existing code

The library is ready to use and will improve grocery list generation by handling more unit conversions when matching pantry items with recipe ingredients.
Reviewing the current ingredient matching implementation, then adding a synonym database.


[2 tools called]


Creating an ingredient synonym database and integrating it into the matching functions.


[2 tools called]


Updating `app.js` to use the synonym database:


[4 tools called]


Checking for linting errors:


[1 tool called]


Fixing a bug in the `getSynonyms` function:


[2 tools called]





[1 tool called]






The code looks correct. Verifying the implementation is complete and working:


[1 tool called]


## Ingredient Synonym Database Implementation

### Created `ingredientSynonymDB.js`
A synonym database with:

1. Synonym mappings for common ingredients:
   - Poultry: chicken, turkey, duck (with variations)
   - Beef: ground beef, steak, beef cuts
   - Pork: bacon, ham
   - Seafood: salmon, shrimp/prawns, fish
   - Dairy: milk, butter, cheeses (cheddar, mozzarella, parmesan, feta, ricotta)
   - Vegetables: onions, garlic, tomatoes, peppers, broccoli, carrots, etc.
   - Herbs & Spices: basil, parsley, cilantro, salt, pepper, etc.
   - Grains: rice, pasta, bread
   - Legumes: beans, chickpeas
   - Oils & Condiments: olive oil, soy sauce, etc.
   - And more

2. Features:
   - Reverse index for fast synonym lookup
   - Canonical name resolution
   - Fuzzy matching for compound names (e.g., "chicken breast" vs "chicken")
   - Extensible API for adding custom synonyms

3. Public API:
   - `match(name1, name2)` - Check if two ingredients match
   - `getCanonical(name)` - Get canonical form of ingredient
   - `getSynonyms(name)` - Get all synonyms for an ingredient
   - `areSynonyms(name1, name2)` - Check if two ingredients are synonyms
   - `normalize(name)` - Normalize ingredient name
   - `addSynonym(canonical, synonyms)` - Add custom synonyms

### Integration
- Updated `ingredientsMatch()` to use the synonym database
- Updated `filterByPantry()` to use the synonym database
- Updated `normalizeIngredientName()` to use the synonym database
- Added script to `index.html`
- Backward compatible: falls back to basic matching if the database isn't available

### Benefits
- Better ingredient matching: recognizes "tomato" vs "tomatoes", "chicken breast" vs "chicken"
- Improved pantry matching: finds recipes using pantry items more accurately
- Better grocery list generation: correctly deducts pantry items even with different names
- Extensible: easy to add more synonyms as needed

The synonym database is integrated and will improve ingredient matching throughout the meal planner application.

Reviewing the current fuzzy matching implementation, then improving it.


[2 tools called]


Improving the fuzzy matching algorithm with advanced techniques:


[2 tools called]


Replacing the matching function with an improved fuzzy matching algorithm:


[1 tool called]


Adding a confidence scoring method and updating the public API:


[1 tool called]


Adding confidence scoring and updating the public API:


[3 tools called]


Checking for linting errors:


[1 tool called]


## Improved Fuzzy Matching Algorithm

### New features

1. Levenshtein distance
   - Handles typos and misspellings
   - Calculates edit distance between strings
   - Returns a similarity ratio (0-1)

2. Plural/singular handling
   - Normalizes plurals (tomatoes ↔ tomato, cherries ↔ cherry)
   - Handles common plural patterns (-s, -es, -ies)
   - Checks both forms during matching

3. Common descriptor filtering
   - Filters descriptors that don't affect identity:
     - Preparation: fresh, dried, frozen, canned, raw, cooked
     - Size: large, small, medium, baby
     - Quality: organic, premium, store-bought, homemade
     - Processing: sliced, chopped, diced, minced, grated
   - "fresh tomatoes" matches "tomatoes"

4. Word order independence
   - Matches compound ingredients regardless of word order
   - "chicken breast boneless" matches "boneless chicken breast"
   - Uses word-by-word fuzzy matching

5. Confidence scoring
   - Returns a confidence score (0-1) for each match
   - Scoring tiers:
     - 1.0: Exact match or synonym
     - 0.95: Canonical form match
     - 0.9: Descriptor-removed match
     - 0.7-0.9: Fuzzy word matches
     - 0.0-0.8: Similarity-based matches
   - Configurable threshold (default 0.7)

6. Improved substring matching
   - Word boundary validation to reduce false positives
   - "pepper" won't match "pepperoni"
   - Requires minimum length (3+ characters)

7. Multi-strategy matching
   - Tries 8 strategies in order:
     1. Exact match
     2. Synonym check
     3. Canonical form match
     4. Descriptor-removed match
     5. Word-based fuzzy matching
     6. Validated substring matching
     7. Full similarity matching
     8. Canonical similarity matching

### Public API enhancements

- `match(name1, name2, threshold)` - Match with optional custom threshold
- `getMatchConfidence(name1, name2)` - Get confidence score (0-1)

### Benefits

- Better typo tolerance: "tomatos" matches "tomatoes"
- Handles variations: "fresh chicken breast" matches "chicken breast"
- More accurate matching: fewer false positives
- Flexible: adjustable confidence thresholds
- Performance: efficient algorithms with early exits

The fuzzy matching algorithm is now more robust and handles real-world ingredient name variations.

Adding ingredient substitution support. Creating a substitution database and integrating it into the app.


[3 tools called]


Creating the ingredient substitution database:


[1 tool called]


Integrating substitutions into grocery list generation and updating the rendering to show suggestions:


[4 tools called]


Adding CSS styles for substitution display:


[2 tools called]


Adding CSS styles for substitutions:


[3 tools called]


Adding substitution suggestions to recipe details:


[2 tools called]


Checking for linting errors:


[1 tool called]


## Ingredient Substitution Support Implementation

### Created `ingredientSubstitutionDB.js`
A substitution database with:

1. Substitution database covering:
   - Dairy: butter, milk, cream, cheese varieties
   - Eggs: vegan and non-vegan alternatives
   - Flours: gluten-free and alternative flours
   - Sweeteners: sugar alternatives
   - Oils: cooking oil alternatives
   - Meats: protein alternatives (including vegetarian)
   - Seafood: fish and shellfish alternatives
   - Vegetables: common vegetable swaps
   - Herbs & Spices: herb alternatives
   - Legumes: bean alternatives
   - Grains: rice and pasta alternatives
   - Other: soy sauce, lemon juice, breadcrumbs, etc.

2. Substitution properties:
   - Name: alternative ingredient name
   - Ratio: conversion ratio (e.g., 0.75 = use 3/4 amount)
   - Notes: usage instructions
   - Quality rating: excellent, good, or fair

3. Features:
   - Pantry-aware: checks if substitutions are available in pantry
   - Quality sorting: prioritizes best substitutions
   - Synonym integration: works with ingredient synonym database
   - Custom additions: API to add custom substitutions

### Integration points

1. Grocery list generation:
   - Automatically checks for substitutions when ingredients aren't in pantry
   - Applies substitution ratios and unit conversions
   - Reduces grocery list quantities when substitutions are available
   - Shows substitution info in the grocery list

2. Grocery list display:
   - Visual indicators for available substitutions (color-coded by quality)
   - Shows substitution suggestions even when not in pantry
   - Displays substitution notes and ratios

3. Recipe details:
   - Shows substitution suggestions for each ingredient
   - Highlights substitutions available in pantry
   - Provides alternative options for ingredients

### Public API

- `findSubstitutions(ingredientName, checkPantry, pantryItems)` - Find all substitutions
- `isAvailable(originalIngredient, substitutionName, pantryItems)` - Check if substitution is in pantry
- `getBest(ingredientName, pantryItems)` - Get best available substitution
- `hasSubstitutions(ingredientName)` - Check if substitutions exist
- `addSubstitution(ingredientName, substitution)` - Add custom substitution

### Visual features

- Color-coded substitution quality:
  - Green: Excellent substitutions
  - Orange: Good substitutions
  - Purple: Fair substitutions
  - Blue: General suggestions (not in pantry)

### Benefits

- Reduces grocery shopping: uses pantry items as substitutions
- Flexible cooking: suggests alternatives when ingredients aren't available
- Smart matching: integrates with synonym database for better matching
- User-friendly: clear visual indicators and helpful notes
- Extensible: easy to add more substitutions

The substitution system is integrated and will help users make the most of their pantry inventory and find alternatives when needed.

Reviewing the current meal plan structure to add per-meal servings.


[3 tools called]


Adding per-meal servings support. Updating the meal plan structure and UI:


[5 tools called]


Updating nutrition calculation and adding serving inputs to the HTML:


[3 tools called]


Updating the HTML to add serving inputs and updating event listeners:


[2 tools called]


Adding serving inputs to all meal slots. Updating the HTML template:


[3 tools called]


Manually adding serving inputs to all remaining meal slots:


[6 tools called]


Adding event listeners for serving inputs and updating the recipe select handler:


[4 tools called]


Updating loadState and adding CSS for serving inputs:


[6 tools called]


Updating loadState to migrate old format data:


[2 tools called]


Fixing a CSS issue:


[1 tool called]


## Servings Per Meal Feature Implementation

### Data structure updates
- Updated meal plan to store `{recipeId: number, servings: number}` instead of just `recipeId`
- Backward compatible: automatically migrates old format data on load

### UI updates
- Added serving input fields to all 21 meal slots (7 days × 3 meals)
- Inputs have:
  - Min: 1, Max: 20
  - Default: 1
  - Real-time validation

### Functionality updates
1. Grocery list generation:
   - Calculates ingredient quantities based on servings
   - Formula: `(ingredient.quantity / recipe.servings) * mealServings`

2. Nutrition calculation:
   - Weekly totals scale with servings
   - Daily breakdowns include per-meal servings
   - Formula: `nutrition.perServing * servings`

3. Event handling:
   - Recipe selection updates servings automatically
   - Servings input changes update meal plan immediately
   - Input validation ensures values stay between 1-20

4. State management:
   - Saves servings to localStorage
   - Loads and migrates old format data
   - Preserves servings when navigating weeks

### CSS styling
- Styled serving inputs to match the design
- Compact size (max-width: 80px)
- Consistent with recipe select styling

### Benefits
- Accurate grocery lists: quantities scale with servings
- Accurate nutrition tracking: totals reflect actual consumption
- Flexible meal planning: adjust servings per meal
- Backward compatible: existing meal plans migrate automatically

Users can now specify servings per meal, and the grocery list and nutrition calculations will reflect those values.

Reviewing the nutrition calculation implementation to ensure it scales correctly with servings.


[2 tools called]


Enhancing the nutrition display to show per-meal details and servings, and adding average daily nutrition.


[4 tools called]


Updating the recipe modal to show per-serving nutrition information:


[3 tools called]


## Enhanced Nutrition Calculation & Display

### Calculation updates
1. Weekly totals: correctly scale with servings
   - Formula: `recipe.nutrition.value * mealServings`
   - Applied to calories, protein, carbs, and fats

2. Daily totals: correctly scale with servings
   - Each meal's nutrition is multiplied by its servings
   - Daily totals sum all meals for that day

3. Per-meal tracking: stores scaled nutrition per meal
   - Includes recipe name, servings, and scaled nutrition values

### Display enhancements

1. Average daily nutrition
   - New section showing average daily values
   - Calculated as: `weeklyTotal / 7`
   - Helps understand daily intake patterns

2. Per-meal breakdown
   - Each day shows:
     - Total daily nutrition (sum of all meals)
     - Per-meal details:
       - Meal type (Breakfast, Lunch, Dinner)
       - Recipe name
       - Number of servings (e.g., "2 servings")
       - Scaled nutrition for that meal

3. Recipe modal
   - Shows nutrition per serving (original)
   - Shows total recipe nutrition (per serving × recipe servings)
   - Clarifies how nutrition scales

### Visual improvements
- Clear separation between daily totals and per-meal breakdown
- Color-coded servings information
- Organized layout for readability
- Consistent formatting across displays

### Benefits
- Accurate scaling: all calculations multiply by servings
- Transparency: shows per-meal and per-serving values
- Better planning: average daily values help with meal planning
- Detailed tracking: see exactly how each meal contributes to daily nutrition

Nutrition calculations now scale correctly with servings, and the display provides clear, detailed information about nutrition at all levels (weekly, daily, and per-meal).

#### Changes from "Update grocery list quatities based on portions"

Verifying that grocery list generation correctly uses servings. Reviewing the current implementation:


[2 tools called]


Grocery list generation already uses servings. Enhancing the display to show how quantities are calculated and adding a breakdown by meal:


[6 tools called]


Ensuring meal breakdown is preserved when pantry items are subtracted and substitutions are applied:


[5 tools called]


Adding pantry deduction information to the display:


[4 tools called]


## Enhanced Grocery List with Portion-Based Quantities

### Calculation updates

1. Quantity calculation:
   - Formula: `(ingredient.quantity / recipe.servings) * mealServings`
   - Example: Recipe needs 2 cups flour for 4 servings, meal plan uses 3 servings → 1.5 cups needed

2. Meal tracking:
   - Tracks which meals use each ingredient
   - Records recipe name, meal servings, and calculated quantity per meal
   - Aggregates across all meals for total quantity

### Display enhancements

1. Meal breakdown:
   - Shows which meals use each ingredient
   - For each meal:
     - Day and meal type (e.g., "Monday Dinner")
     - Recipe name
     - Number of servings (e.g., "2 servings")
     - Quantity needed for that meal (e.g., "→ 1.50 cups")

2. Pantry deductions:
   - Shows what was used from pantry
   - Displays quantity deducted and percentage of total needed
   - Example: "Used 0.75 cups (50% of needed)"

3. Visual organization:
   - Color-coded breakdowns
   - Clear hierarchy: total → meal breakdown → pantry deductions → substitutions

### Features

- Accurate scaling: quantities scale with meal servings
- Transparency: shows how each meal contributes
- Pantry tracking: shows what was used from pantry
- Substitution support: works with the substitution system
- Detailed breakdown: helps understand quantity calculations

### Example display

For "all-purpose flour":
- Total needed: 3.25 cups
- Used in:
  - Monday Breakfast: Classic Pancakes (2 servings) → 0.38 cups
  - Wednesday Dinner: Lasagna (4 servings) → 2.00 cups
  - Friday Lunch: Chocolate Chip Cookies (1 serving) → 0.47 cups
- From pantry: Used 0.50 cups (15% of needed)
- Remaining to buy: 2.75 cups

The grocery list now accurately reflects portion sizes and provides clear visibility into how quantities are calculated.

#### Added changes from "Allow users to add custom recipes"

Reviewing the recipe structure, then adding UI and functionality for custom recipes.


[3 tools called]


Adding custom recipe functionality: UI and backend support.


[6 tools called]


Adding custom recipe management functions and UI:


[6 tools called]


Adding the recipe form modal and functions to open/close it:


[3 tools called]


Adding functions to open/close the recipe form modal and handle form submission:


[6 tools called]


Adding CSS styles for the recipe form:


[4 tools called]


Adding CSS styles for the recipe form and custom recipe features:


[3 tools called]


## Custom Recipe Management System

### Core features

1. Recipe storage
   - Separated sample recipes from custom recipes
   - Custom recipes saved to localStorage
   - Recipes combined in a getter for seamless access

2. Add custom recipes
   - "Add Custom Recipe" button in the Recipe Database tab
   - Modal form with:
     - Recipe name, servings, prep time, difficulty
     - Dynamic ingredient list (add/remove)
     - Dynamic instruction list (add/remove)
     - Nutrition per serving (calories, protein, carbs, fats)
   - Validation with error messages

3. Edit custom recipes
   - Edit button on custom recipe cards
   - Pre-filled form with existing data
   - Same validation as adding

4. Delete custom recipes
   - Delete button on custom recipe cards
   - Confirmation dialog
   - Removes recipe from meal plan if scheduled

5. Visual indicators
   - "Custom" badge on custom recipe cards
   - Edit/Delete buttons on custom recipes only
   - Styled form with responsive layout

### Integration

- Works with existing features:
  - Meal planning (custom recipes appear in dropdowns)
  - Grocery list generation
  - Nutrition tracking
  - Recipe search and filtering
  - Pantry matching

### Data persistence

- Custom recipes saved to localStorage
- Automatically loaded on app start
- ID management ensures unique IDs

### User experience

- Intuitive form with clear labels
- Dynamic add/remove for ingredients and instructions
- Real-time validation with error messages
- Responsive design for mobile and desktop
- Consistent styling with the rest of the app

### Form features

- Ingredient management:
  - Name, quantity, and unit fields
  - Common unit options (cups, tbsp, tsp, oz, lbs, g, kg, ml, l, pieces, cloves, whole)
  - Add/remove rows dynamically

- Instruction management:
  - Multi-line text areas for each step
  - Add/remove steps dynamically

- Nutrition input:
  - Separate fields for calories, protein, carbs, and fats
  - Per-serving values

Users can add, edit, and delete custom recipes, and they integrate with all existing meal planning features.

#### Tracked changes from "allow users to Edit existing recipes"

Enabling editing for sample recipes by converting them to custom recipes when edited. Checking the current implementation:


[3 tools called]


Enabling editing for sample recipes by duplicating them as custom recipes. Adding a "Duplicate & Edit" option for sample recipes:


[6 tools called]


Fixing the recipe modal to show the duplicate message:


[3 tools called]


## Edit existing recipes

### Features

1. Sample recipes — "Duplicate & Edit"
   - "Duplicate & Edit" button on sample recipe cards
   - Creates a copy as a custom recipe
   - Handles naming conflicts (adds "Copy", "Copy 1", etc. if needed)
   - Opens the edit modal for the new custom recipe
   - Original sample recipe remains unchanged

2. Custom recipes — direct edit
   - "Edit" button on custom recipe cards
   - Opens the edit modal with pre-filled data
   - "Delete" button to remove custom recipes

3. Recipe modal updates
   - Shows a badge for custom recipes
   - Info message for sample recipes explaining how to edit them

### How it works

- For sample recipes:
  1. Click "Duplicate & Edit" on a sample recipe card
  2. A copy is created as a custom recipe (e.g., "Classic Pancakes (Copy)")
  3. The edit modal opens with the copied data
  4. Make changes and save
  5. The new custom recipe appears in your recipe list

- For custom recipes:
  1. Click "Edit" on a custom recipe card
  2. The edit modal opens with current data
  3. Make changes and save
  4. Updates are saved immediately

### Visual design

- Sample recipes: purple "Duplicate & Edit" button
- Custom recipes: blue "Edit" and red "Delete" buttons
- Clear distinction between sample and custom recipes
- Helpful tooltips on all action buttons

### Benefits

- Sample recipes are preserved
- All recipes can be edited
- Clear workflow: duplicate sample recipes, then edit
- No data loss: original recipes remain intact
- Automatic naming prevents conflicts

Users can now edit any recipe. Sample recipes are duplicated first, then edited, while custom recipes can be edited directly.