**Situation**

You are building the first iteration of an AI-based meal planning web application as part of an academic research project. This is Sprint 1 of a 4-sprint development cycle, where the primary goal is to establish the foundational architecture and core functionality. The application needs to serve as a "vibe-coded" minimal viable product that demonstrates key features while supporting future research questions about AI model performance, data requirements, and user engagement patterns. This initial version will be evaluated against a feature requirements checklist and must be functional enough to support subsequent sprints focused on experimentation and data collection.

**Task**

Create a JavaScript-based web application that implements the following core features:

1. A pantry inventory input system where users can add and manage ingredients they currently have on hand
2. A recipe database interface that allows users to search and browse available recipes
3. An AI-powered recipe recommendation engine that prioritizes recipes based on existing pantry items to minimize food waste
4. A weekly meal planning interface where users can select recipes for specific days
5. An automatic grocery list generator that creates itemized shopping lists based on selected meals minus pantry inventory
6. A nutrition tracking component that displays caloric and nutritional information for selected recipes and adjusts based on portion sizes

The application should use a clean, minimal user interface that prioritizes functionality over aesthetics for this first iteration. Implement client-side JavaScript with appropriate data structures to manage pantry items, recipes, and meal plans. The recipe database should be structured to support future AI integration and should include fields for ingredients, quantities, nutritional information, and preparation instructions.

**Objective**

Deliver a functional prototype that validates the core user workflow (pantry input → recipe discovery → meal planning → grocery list generation) and establishes the technical foundation for subsequent sprints. This MVP must demonstrate that the concept is viable and provide a working baseline for A/B testing in Sprint 3, where one user group will receive basic calorie counting while another receives the full recipe suggestion feature set.

**Knowledge**

The application is being developed to answer specific research questions:
- What type and quantity of data are necessary to train a high-performing AI model for recipe recommendations?
- How can the app's AI model improve accuracy through user feedback or retraining?
- Does adding recipe suggestions increase user engagement compared to calorie counting alone?

For Sprint 1, focus on creating the structural foundation rather than implementing sophisticated AI. Use placeholder data or a curated sample recipe dataset (20-50 recipes minimum) that includes diverse meal types, ingredient lists with quantities, and complete nutritional breakdowns per serving.

The technical stack should prioritize rapid development and easy iteration. Consider using vanilla JavaScript or a lightweight framework, local storage for data persistence, and a JSON-based recipe data structure that can later integrate with AI services like AWS Bedrock.

Key technical requirements:
- The recipe data structure must include: recipe name, ingredients (with quantities and units), instructions, servings, nutritional information per serving (calories, protein, carbs, fats), preparation time, and difficulty level
- The pantry system should track ingredient names and quantities with units
- The grocery list generator must perform ingredient matching and quantity calculations (subtracting pantry inventory from recipe requirements)
- All features should work in modern web browsers without requiring a backend server for Sprint 1

**Output Format**

Provide the complete code organized as follows:

1. **HTML file** (`index.html`): Complete markup for all UI components including pantry management, recipe browser, meal planner, and grocery list sections

2. **CSS file** (`styles.css`): Minimal styling focused on usability and clear visual hierarchy

3. **JavaScript file** (`app.js`): All application logic including:
   - Data structures and sample recipe dataset
   - Pantry management functions
   - Recipe search and filtering logic
   - Meal planning functions
   - Grocery list generation algorithm
   - Nutritional calculation functions

4. **README file** (`README.md`): Setup instructions, feature checklist for Sprint 1 requirements, known limitations, and notes for Sprint 2 improvements

Include inline code comments explaining key functions and algorithms. Structure the code to be modular and easily extensible for future sprints when AI integration and user feedback mechanisms will be added.