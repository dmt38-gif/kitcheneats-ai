/**
 * Comprehensive Ingredient Substitution Database
 * Provides alternative ingredients that can be used as replacements
 * Includes substitution ratios and notes
 */

const IngredientSubstitutionDB = (function() {
    'use strict';

    // ============================================================================
    // SUBSTITUTION DATABASE
    // ============================================================================
    // Each entry maps an ingredient to an array of possible substitutions
    // Each substitution includes: name, ratio (how much to use), notes, and quality rating

    const SUBSTITUTION_DATABASE = {
        // Dairy Substitutions
        'butter': [
            { name: 'margarine', ratio: 1.0, notes: '1:1 ratio, similar texture and flavor', quality: 'excellent' },
            { name: 'coconut oil', ratio: 0.75, notes: 'Use 3/4 amount, may add slight coconut flavor', quality: 'good' },
            { name: 'olive oil', ratio: 0.75, notes: 'Use 3/4 amount, best for savory dishes', quality: 'good' },
            { name: 'vegetable oil', ratio: 0.75, notes: 'Use 3/4 amount, neutral flavor', quality: 'good' },
            { name: 'applesauce', ratio: 0.5, notes: 'Use 1/2 amount, adds moisture, best for baking', quality: 'fair' }
        ],
        'milk': [
            { name: 'almond milk', ratio: 1.0, notes: '1:1 ratio, slightly nutty flavor', quality: 'excellent' },
            { name: 'soy milk', ratio: 1.0, notes: '1:1 ratio, creamy texture', quality: 'excellent' },
            { name: 'oat milk', ratio: 1.0, notes: '1:1 ratio, neutral flavor', quality: 'excellent' },
            { name: 'coconut milk', ratio: 1.0, notes: '1:1 ratio, rich and creamy', quality: 'good' },
            { name: 'water', ratio: 1.0, notes: '1:1 ratio, but will be less creamy', quality: 'fair' }
        ],
        'heavy cream': [
            { name: 'half and half', ratio: 1.0, notes: '1:1 ratio, slightly less rich', quality: 'excellent' },
            { name: 'milk + butter', ratio: 0.875, notes: '3/4 cup milk + 1/4 cup melted butter', quality: 'good' },
            { name: 'coconut cream', ratio: 1.0, notes: '1:1 ratio, may add coconut flavor', quality: 'good' },
            { name: 'evaporated milk', ratio: 1.0, notes: '1:1 ratio, similar richness', quality: 'good' }
        ],
        'sour cream': [
            { name: 'greek yogurt', ratio: 1.0, notes: '1:1 ratio, similar tangy flavor', quality: 'excellent' },
            { name: 'plain yogurt', ratio: 1.0, notes: '1:1 ratio, slightly less tangy', quality: 'good' },
            { name: 'buttermilk', ratio: 0.75, notes: 'Use 3/4 amount, more liquid', quality: 'fair' },
            { name: 'cream cheese + milk', ratio: 0.5, notes: 'Mix 1/2 cream cheese with milk to thin', quality: 'fair' }
        ],
        'cream cheese': [
            { name: 'mascarpone', ratio: 1.0, notes: '1:1 ratio, richer and sweeter', quality: 'excellent' },
            { name: 'ricotta cheese', ratio: 1.0, notes: '1:1 ratio, lighter texture', quality: 'good' },
            { name: 'greek yogurt', ratio: 1.0, notes: '1:1 ratio, tangier flavor', quality: 'fair' }
        ],
        'mozzarella cheese': [
            { name: 'provolone', ratio: 1.0, notes: '1:1 ratio, similar melting properties', quality: 'excellent' },
            { name: 'monterey jack', ratio: 1.0, notes: '1:1 ratio, good melting', quality: 'excellent' },
            { name: 'cheddar cheese', ratio: 1.0, notes: '1:1 ratio, stronger flavor', quality: 'good' },
            { name: 'swiss cheese', ratio: 1.0, notes: '1:1 ratio, nutty flavor', quality: 'good' }
        ],
        'parmesan cheese': [
            { name: 'pecorino romano', ratio: 1.0, notes: '1:1 ratio, saltier and sharper', quality: 'excellent' },
            { name: 'asiago', ratio: 1.0, notes: '1:1 ratio, similar nutty flavor', quality: 'excellent' },
            { name: 'grana padano', ratio: 1.0, notes: '1:1 ratio, milder than parmesan', quality: 'excellent' },
            { name: 'romano cheese', ratio: 1.0, notes: '1:1 ratio, sharper flavor', quality: 'good' }
        ],

        // Egg Substitutions
        'egg': [
            { name: 'flax egg', ratio: 1.0, notes: '1 tbsp ground flaxseed + 3 tbsp water per egg', quality: 'good' },
            { name: 'chia egg', ratio: 1.0, notes: '1 tbsp chia seeds + 3 tbsp water per egg', quality: 'good' },
            { name: 'applesauce', ratio: 0.25, notes: '1/4 cup per egg, best for baking', quality: 'fair' },
            { name: 'banana', ratio: 0.25, notes: '1/4 mashed banana per egg, adds sweetness', quality: 'fair' },
            { name: 'yogurt', ratio: 0.25, notes: '1/4 cup per egg, adds moisture', quality: 'fair' }
        ],
        'eggs': [
            { name: 'flax egg', ratio: 1.0, notes: '1 tbsp ground flaxseed + 3 tbsp water per egg', quality: 'good' },
            { name: 'chia egg', ratio: 1.0, notes: '1 tbsp chia seeds + 3 tbsp water per egg', quality: 'good' }
        ],

        // Flour Substitutions
        'all-purpose flour': [
            { name: 'whole wheat flour', ratio: 0.75, notes: 'Use 3/4 amount, denser texture', quality: 'good' },
            { name: 'almond flour', ratio: 0.25, notes: 'Use 1/4 amount, gluten-free', quality: 'fair' },
            { name: 'coconut flour', ratio: 0.125, notes: 'Use 1/8 amount, very absorbent', quality: 'fair' },
            { name: 'oat flour', ratio: 0.75, notes: 'Use 3/4 amount, nutty flavor', quality: 'good' }
        ],
        'flour': [
            { name: 'all-purpose flour', ratio: 1.0, notes: '1:1 ratio, standard substitution', quality: 'excellent' }
        ],

        // Sweetener Substitutions
        'white sugar': [
            { name: 'brown sugar', ratio: 1.0, notes: '1:1 ratio, adds molasses flavor', quality: 'excellent' },
            { name: 'honey', ratio: 0.75, notes: 'Use 3/4 amount, reduce liquid by 1/4', quality: 'good' },
            { name: 'maple syrup', ratio: 0.75, notes: 'Use 3/4 amount, reduce liquid by 1/4', quality: 'good' },
            { name: 'coconut sugar', ratio: 1.0, notes: '1:1 ratio, similar to brown sugar', quality: 'excellent' },
            { name: 'stevia', ratio: 0.01, notes: 'Use very small amount, much sweeter', quality: 'fair' }
        ],
        'brown sugar': [
            { name: 'white sugar + molasses', ratio: 1.0, notes: '1 cup sugar + 1 tbsp molasses', quality: 'excellent' },
            { name: 'coconut sugar', ratio: 1.0, notes: '1:1 ratio, similar flavor', quality: 'excellent' },
            { name: 'maple syrup', ratio: 0.75, notes: 'Use 3/4 amount, reduce liquid', quality: 'good' }
        ],

        // Oil Substitutions
        'vegetable oil': [
            { name: 'canola oil', ratio: 1.0, notes: '1:1 ratio, neutral flavor', quality: 'excellent' },
            { name: 'olive oil', ratio: 1.0, notes: '1:1 ratio, may add flavor', quality: 'good' },
            { name: 'coconut oil', ratio: 1.0, notes: '1:1 ratio, solid at room temp', quality: 'good' },
            { name: 'avocado oil', ratio: 1.0, notes: '1:1 ratio, neutral high-heat oil', quality: 'excellent' }
        ],
        'olive oil': [
            { name: 'vegetable oil', ratio: 1.0, notes: '1:1 ratio, neutral flavor', quality: 'good' },
            { name: 'canola oil', ratio: 1.0, notes: '1:1 ratio, neutral flavor', quality: 'good' },
            { name: 'avocado oil', ratio: 1.0, notes: '1:1 ratio, similar health benefits', quality: 'excellent' }
        ],

        // Meat Substitutions
        'chicken': [
            { name: 'turkey', ratio: 1.0, notes: '1:1 ratio, similar texture and flavor', quality: 'excellent' },
            { name: 'pork', ratio: 1.0, notes: '1:1 ratio, slightly richer flavor', quality: 'good' },
            { name: 'tofu', ratio: 1.0, notes: '1:1 ratio, vegetarian option', quality: 'fair' },
            { name: 'tempeh', ratio: 1.0, notes: '1:1 ratio, vegetarian option', quality: 'fair' }
        ],
        'chicken breast': [
            { name: 'chicken thighs', ratio: 1.0, notes: '1:1 ratio, more flavorful and moist', quality: 'excellent' },
            { name: 'turkey breast', ratio: 1.0, notes: '1:1 ratio, leaner option', quality: 'excellent' },
            { name: 'pork tenderloin', ratio: 1.0, notes: '1:1 ratio, similar lean cut', quality: 'good' }
        ],
        'ground beef': [
            { name: 'ground turkey', ratio: 1.0, notes: '1:1 ratio, leaner option', quality: 'excellent' },
            { name: 'ground chicken', ratio: 1.0, notes: '1:1 ratio, leaner option', quality: 'excellent' },
            { name: 'ground pork', ratio: 1.0, notes: '1:1 ratio, richer flavor', quality: 'good' },
            { name: 'lentils', ratio: 1.0, notes: '1:1 ratio, vegetarian option', quality: 'fair' },
            { name: 'mushrooms', ratio: 1.0, notes: '1:1 ratio, vegetarian option, chop finely', quality: 'fair' }
        ],
        'bacon': [
            { name: 'turkey bacon', ratio: 1.0, notes: '1:1 ratio, leaner option', quality: 'excellent' },
            { name: 'pancetta', ratio: 1.0, notes: '1:1 ratio, similar cured pork', quality: 'excellent' },
            { name: 'prosciutto', ratio: 0.75, notes: 'Use 3/4 amount, saltier', quality: 'good' },
            { name: 'smoked tempeh', ratio: 1.0, notes: '1:1 ratio, vegetarian option', quality: 'fair' }
        ],

        // Seafood Substitutions
        'salmon': [
            { name: 'trout', ratio: 1.0, notes: '1:1 ratio, similar texture and flavor', quality: 'excellent' },
            { name: 'arctic char', ratio: 1.0, notes: '1:1 ratio, similar fatty fish', quality: 'excellent' },
            { name: 'tuna', ratio: 1.0, notes: '1:1 ratio, firmer texture', quality: 'good' },
            { name: 'cod', ratio: 1.0, notes: '1:1 ratio, milder flavor', quality: 'fair' }
        ],
        'shrimp': [
            { name: 'prawns', ratio: 1.0, notes: '1:1 ratio, essentially the same', quality: 'excellent' },
            { name: 'scallops', ratio: 1.0, notes: '1:1 ratio, similar sweet flavor', quality: 'good' },
            { name: 'lobster', ratio: 1.0, notes: '1:1 ratio, richer flavor', quality: 'good' },
            { name: 'chicken', ratio: 1.0, notes: '1:1 ratio, completely different but works in many dishes', quality: 'fair' }
        ],

        // Vegetable Substitutions
        'onion': [
            { name: 'shallots', ratio: 1.0, notes: '1:1 ratio, milder flavor', quality: 'excellent' },
            { name: 'leeks', ratio: 1.0, notes: '1:1 ratio, milder and sweeter', quality: 'good' },
            { name: 'scallions', ratio: 0.5, notes: 'Use 1/2 amount, milder flavor', quality: 'fair' }
        ],
        'garlic': [
            { name: 'garlic powder', ratio: 0.125, notes: '1/8 tsp per clove', quality: 'good' },
            { name: 'shallots', ratio: 2.0, notes: 'Use 2x amount, milder flavor', quality: 'fair' }
        ],
        'tomato': [
            { name: 'canned tomatoes', ratio: 1.0, notes: '1:1 ratio, often more flavorful', quality: 'excellent' },
            { name: 'cherry tomatoes', ratio: 1.0, notes: '1:1 ratio, sweeter flavor', quality: 'excellent' },
            { name: 'sun-dried tomatoes', ratio: 0.25, notes: 'Use 1/4 amount, more intense flavor', quality: 'good' }
        ],
        'tomatoes': [
            { name: 'canned tomatoes', ratio: 1.0, notes: '1:1 ratio, often more flavorful', quality: 'excellent' },
            { name: 'cherry tomatoes', ratio: 1.0, notes: '1:1 ratio, sweeter flavor', quality: 'excellent' }
        ],
        'bell pepper': [
            { name: 'poblano pepper', ratio: 1.0, notes: '1:1 ratio, slightly spicier', quality: 'excellent' },
            { name: 'anaheim pepper', ratio: 1.0, notes: '1:1 ratio, mild heat', quality: 'good' },
            { name: 'cubanelle pepper', ratio: 1.0, notes: '1:1 ratio, similar mild flavor', quality: 'good' }
        ],
        'mushrooms': [
            { name: 'portobello mushrooms', ratio: 1.0, notes: '1:1 ratio, meatier texture', quality: 'excellent' },
            { name: 'shiitake mushrooms', ratio: 1.0, notes: '1:1 ratio, more umami flavor', quality: 'excellent' },
            { name: 'cremini mushrooms', ratio: 1.0, notes: '1:1 ratio, similar to button', quality: 'excellent' }
        ],

        // Herb and Spice Substitutions
        'basil': [
            { name: 'oregano', ratio: 1.0, notes: '1:1 ratio, stronger flavor', quality: 'good' },
            { name: 'thyme', ratio: 1.0, notes: '1:1 ratio, earthier flavor', quality: 'fair' },
            { name: 'parsley', ratio: 1.0, notes: '1:1 ratio, milder flavor', quality: 'fair' }
        ],
        'cilantro': [
            { name: 'parsley', ratio: 1.0, notes: '1:1 ratio, milder flavor, no soapy taste', quality: 'good' },
            { name: 'basil', ratio: 1.0, notes: '1:1 ratio, different but works in some dishes', quality: 'fair' }
        ],
        'parsley': [
            { name: 'cilantro', ratio: 1.0, notes: '1:1 ratio, stronger flavor', quality: 'good' },
            { name: 'chives', ratio: 1.0, notes: '1:1 ratio, milder onion flavor', quality: 'good' }
        ],
        'thyme': [
            { name: 'oregano', ratio: 1.0, notes: '1:1 ratio, similar Mediterranean flavor', quality: 'excellent' },
            { name: 'rosemary', ratio: 0.5, notes: 'Use 1/2 amount, stronger flavor', quality: 'good' },
            { name: 'marjoram', ratio: 1.0, notes: '1:1 ratio, milder than oregano', quality: 'excellent' }
        ],
        'oregano': [
            { name: 'thyme', ratio: 1.0, notes: '1:1 ratio, earthier flavor', quality: 'excellent' },
            { name: 'marjoram', ratio: 1.0, notes: '1:1 ratio, milder flavor', quality: 'excellent' },
            { name: 'basil', ratio: 1.0, notes: '1:1 ratio, sweeter flavor', quality: 'good' }
        ],

        // Legume Substitutions
        'black beans': [
            { name: 'kidney beans', ratio: 1.0, notes: '1:1 ratio, similar texture', quality: 'excellent' },
            { name: 'pinto beans', ratio: 1.0, notes: '1:1 ratio, creamier texture', quality: 'excellent' },
            { name: 'navy beans', ratio: 1.0, notes: '1:1 ratio, smaller and creamier', quality: 'good' }
        ],
        'chickpeas': [
            { name: 'cannellini beans', ratio: 1.0, notes: '1:1 ratio, similar creamy texture', quality: 'excellent' },
            { name: 'white beans', ratio: 1.0, notes: '1:1 ratio, similar texture', quality: 'excellent' },
            { name: 'lentils', ratio: 1.0, notes: '1:1 ratio, smaller and cook faster', quality: 'good' }
        ],

        // Grain Substitutions
        'rice': [
            { name: 'quinoa', ratio: 1.0, notes: '1:1 ratio, higher protein', quality: 'excellent' },
            { name: 'cauliflower rice', ratio: 1.0, notes: '1:1 ratio, low-carb option', quality: 'good' },
            { name: 'barley', ratio: 1.0, notes: '1:1 ratio, chewier texture', quality: 'good' },
            { name: 'couscous', ratio: 1.0, notes: '1:1 ratio, smaller grains', quality: 'good' }
        ],
        'pasta': [
            { name: 'zucchini noodles', ratio: 1.0, notes: '1:1 ratio, low-carb option', quality: 'good' },
            { name: 'spaghetti squash', ratio: 1.0, notes: '1:1 ratio, low-carb option', quality: 'good' },
            { name: 'rice noodles', ratio: 1.0, notes: '1:1 ratio, gluten-free', quality: 'excellent' },
            { name: 'quinoa pasta', ratio: 1.0, notes: '1:1 ratio, higher protein', quality: 'excellent' }
        ],

        // Other Common Substitutions
        'soy sauce': [
            { name: 'tamari', ratio: 1.0, notes: '1:1 ratio, gluten-free soy sauce', quality: 'excellent' },
            { name: 'coconut aminos', ratio: 1.0, notes: '1:1 ratio, sweeter and milder', quality: 'excellent' },
            { name: 'worcestershire sauce', ratio: 0.5, notes: 'Use 1/2 amount, different flavor profile', quality: 'fair' }
        ],
        'lemon juice': [
            { name: 'lime juice', ratio: 1.0, notes: '1:1 ratio, slightly different flavor', quality: 'excellent' },
            { name: 'white wine vinegar', ratio: 1.0, notes: '1:1 ratio, more acidic', quality: 'good' },
            { name: 'apple cider vinegar', ratio: 0.75, notes: 'Use 3/4 amount, sweeter', quality: 'fair' }
        ],
        'lime juice': [
            { name: 'lemon juice', ratio: 1.0, notes: '1:1 ratio, slightly different flavor', quality: 'excellent' },
            { name: 'white wine vinegar', ratio: 1.0, notes: '1:1 ratio, more acidic', quality: 'good' }
        ],
        'white wine': [
            { name: 'chicken broth', ratio: 1.0, notes: '1:1 ratio, no alcohol', quality: 'good' },
            { name: 'vegetable broth', ratio: 1.0, notes: '1:1 ratio, no alcohol', quality: 'good' },
            { name: 'white wine vinegar + water', ratio: 0.5, notes: '1/2 vinegar + 1/2 water', quality: 'fair' }
        ],
        'breadcrumbs': [
            { name: 'panko', ratio: 1.0, notes: '1:1 ratio, crispier texture', quality: 'excellent' },
            { name: 'crushed crackers', ratio: 1.0, notes: '1:1 ratio, similar texture', quality: 'excellent' },
            { name: 'almond flour', ratio: 1.0, notes: '1:1 ratio, gluten-free option', quality: 'good' }
        ]
    };

    // ============================================================================
    // HELPER FUNCTIONS
    // ============================================================================

    /**
     * Normalize ingredient name
     * @param {string} name - Ingredient name
     * @returns {string} Normalized name
     */
    function normalizeName(name) {
        if (!name) return '';
        return name.toLowerCase().trim();
    }

    /**
     * Find substitutions for an ingredient
     * @param {string} ingredientName - Name of ingredient to find substitutions for
     * @param {boolean} checkPantry - If true, only return substitutions available in pantry
     * @param {Array} pantryItems - Array of pantry items to check against
     * @returns {Array} Array of substitution objects with availability info
     */
    function findSubstitutions(ingredientName, checkPantry = false, pantryItems = []) {
        const normalized = normalizeName(ingredientName);
        
        // Direct lookup
        let substitutions = SUBSTITUTION_DATABASE[normalized] || [];
        
        // Try to find via synonym database if available
        if (typeof IngredientSynonymDB !== 'undefined') {
            const canonical = IngredientSynonymDB.getCanonical(ingredientName);
            if (canonical !== ingredientName) {
                const canonicalSubs = SUBSTITUTION_DATABASE[normalizeName(canonical)] || [];
                substitutions = [...substitutions, ...canonicalSubs];
            }
        }
        
        // Remove duplicates based on name
        const seen = new Set();
        substitutions = substitutions.filter(sub => {
            const key = normalizeName(sub.name);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
        
        // Check pantry availability if requested
        if (checkPantry && pantryItems.length > 0) {
            substitutions = substitutions.map(sub => {
                const available = pantryItems.some(item => {
                    if (typeof IngredientSynonymDB !== 'undefined') {
                        return IngredientSynonymDB.match(item.name, sub.name);
                    }
                    return normalizeName(item.name) === normalizeName(sub.name);
                });
                return { ...sub, available };
            });
        }
        
        // Sort by quality (excellent > good > fair) and then by availability
        substitutions.sort((a, b) => {
            const qualityOrder = { 'excellent': 3, 'good': 2, 'fair': 1 };
            const qualityDiff = (qualityOrder[b.quality] || 0) - (qualityOrder[a.quality] || 0);
            if (qualityDiff !== 0) return qualityDiff;
            
            // If checking pantry, prioritize available items
            if (checkPantry) {
                if (a.available && !b.available) return -1;
                if (!a.available && b.available) return 1;
            }
            
            return 0;
        });
        
        return substitutions;
    }

    /**
     * Check if a substitution is available in pantry
     * @param {string} originalIngredient - Original ingredient name
     * @param {string} substitutionName - Substitution ingredient name
     * @param {Array} pantryItems - Array of pantry items
     * @returns {boolean} True if substitution is available
     */
    function isSubstitutionAvailable(originalIngredient, substitutionName, pantryItems) {
        if (!pantryItems || pantryItems.length === 0) return false;
        
        return pantryItems.some(item => {
            if (typeof IngredientSynonymDB !== 'undefined') {
                return IngredientSynonymDB.match(item.name, substitutionName);
            }
            return normalizeName(item.name) === normalizeName(substitutionName);
        });
    }

    /**
     * Get best substitution for an ingredient (highest quality available in pantry)
     * @param {string} ingredientName - Name of ingredient
     * @param {Array} pantryItems - Array of pantry items
     * @returns {Object|null} Best substitution or null if none available
     */
    function getBestSubstitution(ingredientName, pantryItems = []) {
        const substitutions = findSubstitutions(ingredientName, true, pantryItems);
        
        // Return first available substitution (already sorted by quality)
        const available = substitutions.find(sub => sub.available);
        return available || null;
    }

    // ============================================================================
    // PUBLIC API
    // ============================================================================

    return {
        /**
         * Find all possible substitutions for an ingredient
         * @param {string} ingredientName - Name of ingredient to find substitutions for
         * @param {boolean} checkPantry - If true, check which substitutions are in pantry
         * @param {Array} pantryItems - Array of pantry items {name, quantity, unit}
         * @returns {Array} Array of substitution objects with name, ratio, notes, quality, and optionally available flag
         */
        findSubstitutions: function(ingredientName, checkPantry = false, pantryItems = []) {
            return findSubstitutions(ingredientName, checkPantry, pantryItems);
        },

        /**
         * Check if a substitution is available in pantry
         * @param {string} originalIngredient - Original ingredient name
         * @param {string} substitutionName - Substitution ingredient name
         * @param {Array} pantryItems - Array of pantry items
         * @returns {boolean} True if substitution is available
         */
        isAvailable: function(originalIngredient, substitutionName, pantryItems) {
            return isSubstitutionAvailable(originalIngredient, substitutionName, pantryItems);
        },

        /**
         * Get the best substitution for an ingredient (highest quality available)
         * @param {string} ingredientName - Name of ingredient
         * @param {Array} pantryItems - Array of pantry items
         * @returns {Object|null} Best substitution object or null
         */
        getBest: function(ingredientName, pantryItems = []) {
            return getBestSubstitution(ingredientName, pantryItems);
        },

        /**
         * Check if substitutions exist for an ingredient
         * @param {string} ingredientName - Name of ingredient
         * @returns {boolean} True if substitutions are available
         */
        hasSubstitutions: function(ingredientName) {
            const normalized = normalizeName(ingredientName);
            return SUBSTITUTION_DATABASE[normalized] !== undefined && 
                   SUBSTITUTION_DATABASE[normalized].length > 0;
        },

        /**
         * Add custom substitution
         * @param {string} ingredientName - Original ingredient name
         * @param {Object} substitution - Substitution object {name, ratio, notes, quality}
         */
        addSubstitution: function(ingredientName, substitution) {
            const normalized = normalizeName(ingredientName);
            if (!SUBSTITUTION_DATABASE[normalized]) {
                SUBSTITUTION_DATABASE[normalized] = [];
            }
            SUBSTITUTION_DATABASE[normalized].push(substitution);
        }
    };
})();

// Export for use in Node.js or module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IngredientSubstitutionDB;
}

