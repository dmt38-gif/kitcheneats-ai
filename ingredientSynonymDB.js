/**
 * Comprehensive Ingredient Synonym Database
 * Maps ingredient names to their canonical forms and synonyms
 * Used for improved ingredient matching in recipes and pantry
 */

const IngredientSynonymDB = (function() {
    'use strict';

    // ============================================================================
    // INGREDIENT SYNONYM DATABASE
    // ============================================================================
    // Each entry maps a canonical name to an array of synonyms
    // The canonical name is typically the most common or standard form

    const SYNONYM_DATABASE = {
        // Poultry
        'chicken': ['chicken breast', 'chicken thighs', 'chicken wings', 'chicken drumsticks', 'chicken meat', 'poultry', 'chicken fillet', 'chicken cutlet'],
        'chicken breast': ['chicken', 'chicken fillet', 'chicken cutlet', 'boneless chicken breast', 'chicken breast fillet'],
        'chicken thighs': ['chicken', 'chicken thigh', 'bone-in chicken thighs'],
        'chicken wings': ['chicken', 'chicken wing', 'wings'],
        'turkey': ['turkey breast', 'turkey meat', 'ground turkey'],
        'duck': ['duck breast', 'duck meat'],

        // Beef
        'beef': ['beef meat', 'ground beef', 'beef mince', 'hamburger meat'],
        'ground beef': ['beef', 'beef mince', 'hamburger meat', 'minced beef', 'ground meat'],
        'beef chuck': ['beef', 'chuck roast', 'chuck steak', 'beef roast'],
        'beef sirloin': ['beef', 'sirloin steak', 'sirloin', 'beef steak'],
        'steak': ['beef steak', 'beef', 'sirloin steak', 'ribeye', 'filet mignon'],

        // Pork
        'pork': ['pork meat', 'pork chop', 'pork tenderloin'],
        'bacon': ['bacon strips', 'bacon slices', 'smoked bacon', 'pork bacon'],
        'ham': ['ham slices', 'deli ham', 'cooked ham', 'ham meat'],

        // Seafood
        'salmon': ['salmon fillet', 'salmon filet', 'salmon steak', 'fresh salmon', 'atlantic salmon'],
        'salmon fillet': ['salmon', 'salmon filet', 'salmon steak'],
        'shrimp': ['shrimps', 'prawns', 'shrimp meat', 'fresh shrimp', 'frozen shrimp'],
        'prawns': ['shrimp', 'shrimps', 'prawn'],
        'fish': ['white fish', 'fish fillet', 'fish filet', 'fish steak'],
        'white fish': ['fish', 'cod', 'tilapia', 'halibut', 'haddock', 'fish fillet'],
        'tuna': ['tuna fish', 'canned tuna', 'fresh tuna', 'tuna steak'],

        // Dairy
        'milk': ['whole milk', '2% milk', 'skim milk', 'low-fat milk', 'dairy milk'],
        'butter': ['salted butter', 'unsalted butter', 'sweet butter', 'butter stick'],
        'cheese': ['cheddar cheese', 'mozzarella cheese', 'cheese slices'],
        'cheddar cheese': ['cheese', 'cheddar', 'sharp cheddar', 'mild cheddar'],
        'mozzarella cheese': ['cheese', 'mozzarella', 'fresh mozzarella', 'mozzarella ball'],
        'parmesan cheese': ['cheese', 'parmesan', 'parmigiano reggiano', 'grated parmesan', 'parmesan grated'],
        'feta cheese': ['cheese', 'feta', 'feta crumbles', 'crumbled feta'],
        'ricotta cheese': ['cheese', 'ricotta', 'ricotta cheese'],
        'sour cream': ['sour cream', 'dairy sour cream', 'light sour cream'],

        // Eggs
        'egg': ['eggs', 'large egg', 'whole egg', 'fresh egg', 'chicken egg'],
        'eggs': ['egg', 'large eggs', 'whole eggs', 'fresh eggs'],

        // Vegetables - Alliums
        'onion': ['onions', 'yellow onion', 'white onion', 'sweet onion', 'cooking onion'],
        'onions': ['onion', 'yellow onions', 'white onions'],
        'red onion': ['onion', 'red onions', 'purple onion'],
        'garlic': ['garlic cloves', 'fresh garlic', 'garlic bulb', 'garlic head'],
        'green onions': ['onion', 'scallions', 'spring onions', 'green onion', 'scallion'],
        'scallions': ['onion', 'green onions', 'spring onions', 'green onion'],
        'shallots': ['onion', 'shallot', 'french shallot'],

        // Vegetables - Nightshades
        'tomato': ['tomatoes', 'fresh tomato', 'ripe tomato', 'tomato fruit'],
        'tomatoes': ['tomato', 'fresh tomatoes', 'ripe tomatoes'],
        'cherry tomatoes': ['tomato', 'tomatoes', 'cherry tomato', 'grape tomatoes'],
        'bell pepper': ['pepper', 'bell peppers', 'sweet pepper', 'capsicum', 'green pepper', 'red pepper', 'yellow pepper'],
        'bell peppers': ['pepper', 'bell pepper', 'sweet peppers', 'capsicums'],
        'red pepper': ['pepper', 'bell pepper', 'red bell pepper', 'sweet red pepper'],
        'green pepper': ['pepper', 'bell pepper', 'green bell pepper', 'sweet green pepper'],

        // Vegetables - Cruciferous
        'broccoli': ['broccoli florets', 'fresh broccoli', 'broccoli head', 'broccoli crown'],
        'cabbage': ['green cabbage', 'white cabbage', 'fresh cabbage', 'cabbage head'],
        'cauliflower': ['cauliflower florets', 'fresh cauliflower', 'cauliflower head'],

        // Vegetables - Root
        'carrot': ['carrots', 'fresh carrot', 'baby carrot', 'carrot sticks'],
        'carrots': ['carrot', 'fresh carrots', 'baby carrots'],
        'potato': ['potatoes', 'russet potato', 'yukon gold potato', 'red potato', 'baking potato'],
        'potatoes': ['potato', 'russet potatoes', 'yukon gold potatoes', 'red potatoes'],

        // Vegetables - Leafy
        'lettuce': ['leaf lettuce', 'iceberg lettuce', 'romaine lettuce', 'lettuce leaves', 'salad lettuce'],
        'romaine lettuce': ['lettuce', 'romaine', 'romaine leaves', 'cos lettuce'],
        'spinach': ['fresh spinach', 'baby spinach', 'spinach leaves', 'leaf spinach'],
        'kale': ['fresh kale', 'kale leaves', 'curly kale', 'lacinato kale'],

        // Vegetables - Other
        'cucumber': ['cucumbers', 'english cucumber', 'persian cucumber', 'cucumber slices'],
        'cucumbers': ['cucumber', 'english cucumbers'],
        'zucchini': ['zucchinis', 'courgette', 'summer squash', 'zucchini squash'],
        'mushrooms': ['mushroom', 'button mushrooms', 'cremini mushrooms', 'portobello mushrooms', 'fresh mushrooms'],
        'mushroom': ['mushrooms', 'button mushroom', 'cremini mushroom'],
        'celery': ['celery stalks', 'celery sticks', 'celery ribs', 'fresh celery'],
        'corn': ['sweet corn', 'corn kernels', 'corn on the cob', 'fresh corn'],
        'peas': ['pea', 'green peas', 'frozen peas', 'fresh peas', 'sweet peas'],
        'pea': ['peas', 'green pea', 'frozen pea'],

        // Herbs
        'basil': ['fresh basil', 'basil leaves', 'sweet basil', 'italian basil'],
        'parsley': ['fresh parsley', 'parsley leaves', 'flat-leaf parsley', 'italian parsley', 'curly parsley'],
        'cilantro': ['fresh cilantro', 'coriander', 'cilantro leaves', 'chinese parsley'],
        'coriander': ['cilantro', 'fresh coriander', 'coriander leaves'],
        'oregano': ['dried oregano', 'fresh oregano', 'oregano leaves'],
        'thyme': ['fresh thyme', 'thyme leaves', 'dried thyme'],
        'rosemary': ['fresh rosemary', 'rosemary sprigs', 'rosemary leaves', 'dried rosemary'],
        'sage': ['fresh sage', 'sage leaves', 'dried sage'],
        'dill': ['fresh dill', 'dill weed', 'dill leaves'],
        'mint': ['fresh mint', 'mint leaves', 'spearmint', 'peppermint'],
        'chives': ['fresh chives', 'chive', 'chive leaves'],

        // Spices
        'salt': ['table salt', 'kosher salt', 'sea salt', 'iodized salt'],
        'black pepper': ['pepper', 'ground black pepper', 'peppercorns', 'freshly ground pepper'],
        'pepper': ['black pepper', 'ground pepper', 'peppercorns'],
        'red pepper flakes': ['crushed red pepper', 'red chili flakes', 'chili flakes', 'pepper flakes'],
        'chili powder': ['chili powder', 'chile powder', 'mexican chili powder'],
        'cumin': ['ground cumin', 'cumin seeds', 'cumin powder'],
        'paprika': ['sweet paprika', 'smoked paprika', 'hungarian paprika'],
        'cinnamon': ['ground cinnamon', 'cinnamon powder', 'cinnamon stick'],
        'nutmeg': ['ground nutmeg', 'nutmeg powder', 'whole nutmeg'],
        'ginger': ['fresh ginger', 'ginger root', 'ground ginger', 'ginger powder'],
        'curry powder': ['curry', 'indian curry powder', 'madras curry powder'],

        // Grains & Starches
        'rice': ['white rice', 'long-grain rice', 'jasmine rice', 'basmati rice', 'cooked rice'],
        'brown rice': ['rice', 'brown rice', 'whole grain rice'],
        'quinoa': ['quinoa grain', 'cooked quinoa', 'white quinoa', 'red quinoa'],
        'pasta': ['noodles', 'spaghetti', 'penne pasta', 'pasta noodles'],
        'spaghetti': ['pasta', 'spaghetti noodles', 'spaghetti pasta'],
        'penne pasta': ['pasta', 'penne', 'penne noodles'],
        'linguine': ['pasta', 'linguine noodles', 'linguini'],
        'lasagna noodles': ['pasta', 'lasagna sheets', 'lasagne noodles', 'lasagna pasta'],
        'egg noodles': ['pasta', 'noodles', 'egg pasta', 'wide egg noodles'],
        'bread': ['bread slices', 'bread loaf', 'white bread', 'whole wheat bread', 'sliced bread'],
        'breadcrumbs': ['bread crumbs', 'panko breadcrumbs', 'italian breadcrumbs', 'plain breadcrumbs'],

        // Legumes
        'black beans': ['beans', 'black bean', 'canned black beans', 'dried black beans'],
        'kidney beans': ['beans', 'kidney bean', 'red kidney beans', 'canned kidney beans', 'dried kidney beans'],
        'chickpeas': ['beans', 'garbanzo beans', 'chickpea', 'canned chickpeas', 'dried chickpeas'],
        'garbanzo beans': ['chickpeas', 'chickpea', 'garbanzo bean'],
        'beans': ['black beans', 'kidney beans', 'pinto beans', 'navy beans'],

        // Oils & Fats
        'olive oil': ['extra virgin olive oil', 'evoo', 'olive oil', 'virgin olive oil'],
        'vegetable oil': ['canola oil', 'cooking oil', 'neutral oil', 'sunflower oil'],
        'canola oil': ['vegetable oil', 'rapeseed oil', 'cooking oil'],
        'sesame oil': ['toasted sesame oil', 'sesame seed oil', 'asian sesame oil'],
        'coconut oil': ['virgin coconut oil', 'refined coconut oil', 'coconut cooking oil'],

        // Condiments & Sauces
        'soy sauce': ['soy', 'light soy sauce', 'dark soy sauce', 'tamari', 'japanese soy sauce'],
        'tomato sauce': ['pasta sauce', 'marinara sauce', 'italian tomato sauce', 'tomato pasta sauce'],
        'pasta sauce': ['tomato sauce', 'marinara sauce', 'spaghetti sauce'],
        'caesar dressing': ['caesar salad dressing', 'caesar', 'caesar sauce'],
        'lemon juice': ['fresh lemon juice', 'lemon', 'lemon juice from concentrate'],
        'lime juice': ['fresh lime juice', 'lime', 'lime juice from concentrate'],
        'balsamic vinegar': ['balsamic', 'balsamic vinaigrette', 'aged balsamic'],
        'white wine': ['dry white wine', 'white cooking wine', 'sauvignon blanc', 'pinot grigio'],

        // Sweeteners
        'sugar': ['white sugar', 'granulated sugar', 'table sugar', 'cane sugar'],
        'white sugar': ['sugar', 'granulated sugar', 'table sugar'],
        'brown sugar': ['light brown sugar', 'dark brown sugar', 'packed brown sugar'],
        'honey': ['raw honey', 'wildflower honey', 'clover honey'],
        'maple syrup': ['pure maple syrup', 'maple', 'grade a maple syrup'],

        // Baking
        'flour': ['all-purpose flour', 'white flour', 'plain flour', 'wheat flour'],
        'all-purpose flour': ['flour', 'white flour', 'plain flour', 'ap flour'],
        'baking powder': ['baking soda substitute', 'double-acting baking powder'],
        'baking soda': ['sodium bicarbonate', 'bicarbonate of soda', 'baking soda'],
        'vanilla extract': ['vanilla', 'pure vanilla extract', 'vanilla essence'],
        'chocolate chips': ['chocolate chips', 'semi-sweet chocolate chips', 'milk chocolate chips', 'dark chocolate chips'],

        // Fruits
        'avocado': ['avocados', 'ripe avocado', 'hass avocado', 'avocado fruit'],
        'avocados': ['avocado', 'ripe avocados'],
        'lemon': ['lemons', 'fresh lemon', 'lemon fruit'],
        'lime': ['limes', 'fresh lime', 'lime fruit'],

        // Nuts & Seeds
        'almonds': ['almond', 'sliced almonds', 'almond slivers', 'whole almonds'],
        'walnuts': ['walnut', 'chopped walnuts', 'walnut pieces'],
        'peanuts': ['peanut', 'roasted peanuts', 'salted peanuts'],
        'sesame seeds': ['sesame', 'toasted sesame seeds', 'white sesame seeds'],

        // Canned & Packaged
        'coconut milk': ['canned coconut milk', 'full-fat coconut milk', 'light coconut milk', 'coconut cream'],
        'beef broth': ['beef stock', 'beef bouillon', 'beef consomme'],
        'chicken broth': ['chicken stock', 'chicken bouillon', 'chicken consomme'],
        'vegetable broth': ['vegetable stock', 'vegetable bouillon', 'vegetable consomme'],
        'taco seasoning': ['taco spice mix', 'taco blend', 'mexican seasoning'],
        'fajita seasoning': ['fajita spice mix', 'fajita blend', 'fajita marinade'],

        // Other
        'pickles': ['pickle', 'dill pickles', 'pickle slices', 'pickled cucumber'],
        'pickle': ['pickles', 'dill pickle', 'pickle slice'],
        'croutons': ['crouton', 'homemade croutons', 'store-bought croutons', 'garlic croutons'],
        'kalamata olives': ['olives', 'kalamata olive', 'greek olives', 'black olives'],
        'olives': ['kalamata olives', 'black olives', 'green olives', 'olive'],
        'tortillas': ['tortilla', 'flour tortillas', 'corn tortillas', 'tortilla wraps'],
        'tortilla': ['tortillas', 'flour tortilla', 'corn tortilla'],
        'pizza dough': ['dough', 'pizza crust', 'homemade pizza dough', 'store-bought pizza dough'],
        'dough': ['pizza dough', 'bread dough', 'pastry dough']
    };

    // ============================================================================
    // REVERSE INDEX: Maps synonyms to canonical names
    // ============================================================================

    let reverseIndex = null;

    /**
     * Build reverse index for fast synonym lookup
     * Maps all synonyms to their canonical names
     */
    function buildReverseIndex() {
        if (reverseIndex !== null) return; // Already built

        reverseIndex = {};

        Object.keys(SYNONYM_DATABASE).forEach(canonical => {
            const normalizedCanonical = normalizeName(canonical);
            // Map canonical to itself
            reverseIndex[normalizedCanonical] = canonical;

            // Map all synonyms to canonical
            const synonyms = SYNONYM_DATABASE[canonical];
            if (synonyms && Array.isArray(synonyms)) {
                synonyms.forEach(synonym => {
                    const normalizedSynonym = normalizeName(synonym);
                    if (!reverseIndex[normalizedSynonym]) {
                        reverseIndex[normalizedSynonym] = canonical;
                    }
                });
            }
        });
    }

    // ============================================================================
    // HELPER FUNCTIONS
    // ============================================================================

    /**
     * Normalize ingredient name for matching
     * @param {string} name - Ingredient name
     * @returns {string} Normalized name
     */
    function normalizeName(name) {
        if (!name) return '';
        return name.toLowerCase().trim();
    }

    /**
     * Get canonical form of an ingredient name
     * @param {string} name - Ingredient name (may be synonym)
     * @returns {string} Canonical name or original if not found
     */
    function getCanonicalName(name) {
        buildReverseIndex();
        const normalized = normalizeName(name);
        return reverseIndex[normalized] || name;
    }

    /**
     * Get all synonyms for an ingredient
     * @param {string} name - Ingredient name
     * @returns {Array<string>} Array of synonyms including the canonical name
     */
    function getSynonyms(name) {
        const canonical = getCanonicalName(name);
        const synonyms = SYNONYM_DATABASE[canonical] || [];
        return [canonical, ...synonyms];
    }

    /**
     * Check if two ingredient names are synonyms
     * @param {string} name1 - First ingredient name
     * @param {string} name2 - Second ingredient name
     * @returns {boolean} True if they are synonyms
     */
    function areSynonyms(name1, name2) {
        const canonical1 = getCanonicalName(name1);
        const canonical2 = getCanonicalName(name2);
        return canonical1 === canonical2;
    }

    // ============================================================================
    // FUZZY MATCHING ALGORITHMS
    // ============================================================================

    /**
     * Common words to filter out when matching (descriptors that don't affect identity)
     */
    const COMMON_DESCRIPTORS = new Set([
        'fresh', 'dried', 'frozen', 'canned', 'raw', 'cooked', 'whole', 'sliced',
        'chopped', 'diced', 'minced', 'grated', 'shredded', 'crushed', 'ground',
        'powdered', 'boneless', 'skinless', 'bone-in', 'organic', 'free-range',
        'large', 'small', 'medium', 'extra', 'light', 'dark', 'sweet', 'sour',
        'hot', 'mild', 'spicy', 'smoked', 'roasted', 'toasted', 'aged', 'young',
        'ripe', 'unripe', 'baby', 'adult', 'wild', 'farm-raised', 'sea', 'freshly',
        'store-bought', 'homemade', 'premium', 'regular', 'low-fat', 'full-fat',
        'skim', 'whole', '2%', 'reduced-fat', 'fat-free', 'sugar-free', 'unsalted',
        'salted', 'unsweetened', 'sweetened', 'plain', 'flavored', 'unflavored'
    ]);

    /**
     * Remove common descriptors from ingredient name
     * @param {string} name - Ingredient name
     * @returns {string} Name with descriptors removed
     */
    function removeDescriptors(name) {
        const words = name.toLowerCase().split(/\s+/);
        return words.filter(word => !COMMON_DESCRIPTORS.has(word)).join(' ');
    }

    /**
     * Simple plural/singular normalization
     * @param {string} word - Word to normalize
     * @returns {Array<string>} Array of possible forms (singular and plural)
     */
    function getPluralForms(word) {
        const forms = [word];
        
        // Common plural patterns
        if (word.endsWith('ies')) {
            forms.push(word.slice(0, -3) + 'y'); // cherries -> cherry
        } else if (word.endsWith('es') && (word.endsWith('ches') || word.endsWith('shes') || word.endsWith('xes'))) {
            forms.push(word.slice(0, -2)); // boxes -> box
        } else if (word.endsWith('s') && !word.endsWith('ss')) {
            forms.push(word.slice(0, -1)); // tomatoes -> tomato
        } else if (!word.endsWith('s')) {
            // Try to make plural
            if (word.endsWith('y')) {
                forms.push(word.slice(0, -1) + 'ies'); // cherry -> cherries
            } else if (word.endsWith('ch') || word.endsWith('sh') || word.endsWith('x')) {
                forms.push(word + 'es'); // box -> boxes
            } else {
                forms.push(word + 's'); // tomato -> tomatoes
            }
        }
        
        return forms;
    }

    /**
     * Calculate Levenshtein distance between two strings
     * @param {string} str1 - First string
     * @param {string} str2 - Second string
     * @returns {number} Edit distance
     */
    function levenshteinDistance(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        
        if (len1 === 0) return len2;
        if (len2 === 0) return len1;
        
        const matrix = [];
        
        // Initialize matrix
        for (let i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }
        
        // Fill matrix
        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,      // deletion
                    matrix[i][j - 1] + 1,      // insertion
                    matrix[i - 1][j - 1] + cost // substitution
                );
            }
        }
        
        return matrix[len1][len2];
    }

    /**
     * Calculate similarity ratio (0-1) using Levenshtein distance
     * @param {string} str1 - First string
     * @param {string} str2 - Second string
     * @returns {number} Similarity ratio (1.0 = identical, 0.0 = completely different)
     */
    function similarityRatio(str1, str2) {
        if (str1 === str2) return 1.0;
        if (str1.length === 0 || str2.length === 0) return 0.0;
        
        const maxLen = Math.max(str1.length, str2.length);
        const distance = levenshteinDistance(str1, str2);
        return 1 - (distance / maxLen);
    }

    /**
     * Check if words match with fuzzy matching (handles typos and variations)
     * @param {string} word1 - First word
     * @param {string} word2 - Second word
     * @param {number} threshold - Minimum similarity threshold (0-1)
     * @returns {boolean} True if words match
     */
    function fuzzyWordMatch(word1, word2, threshold = 0.8) {
        const normalized1 = normalizeName(word1);
        const normalized2 = normalizeName(word2);
        
        // Exact match
        if (normalized1 === normalized2) return true;
        
        // Check plural forms
        const forms1 = getPluralForms(normalized1);
        const forms2 = getPluralForms(normalized2);
        
        for (const form1 of forms1) {
            for (const form2 of forms2) {
                if (form1 === form2) return true;
                if (similarityRatio(form1, form2) >= threshold) return true;
            }
        }
        
        return false;
    }

    /**
     * Match words ignoring order (for compound ingredients)
     * @param {Array<string>} words1 - First word array
     * @param {Array<string>} words2 - Second word array
     * @param {number} threshold - Minimum similarity threshold
     * @returns {number} Match score (0-1)
     */
    function matchWordsUnordered(words1, words2, threshold = 0.8) {
        if (words1.length === 0 && words2.length === 0) return 1.0;
        if (words1.length === 0 || words2.length === 0) return 0.0;
        
        // Remove descriptors
        const cleanWords1 = words1.filter(w => !COMMON_DESCRIPTORS.has(w));
        const cleanWords2 = words2.filter(w => !COMMON_DESCRIPTORS.has(w));
        
        if (cleanWords1.length === 0 && cleanWords2.length === 0) return 1.0;
        if (cleanWords1.length === 0 || cleanWords2.length === 0) return 0.0;
        
        // Try to match each word from shorter list to longer list
        const shorter = cleanWords1.length <= cleanWords2.length ? cleanWords1 : cleanWords2;
        const longer = cleanWords1.length > cleanWords2.length ? cleanWords1 : cleanWords2;
        
        let matchedCount = 0;
        const used = new Set();
        
        for (const word1 of shorter) {
            let bestMatch = null;
            let bestScore = 0;
            
            for (let i = 0; i < longer.length; i++) {
                if (used.has(i)) continue;
                
                const score = fuzzyWordMatch(word1, longer[i], threshold) ? 1.0 : 
                             similarityRatio(word1, longer[i]);
                
                if (score > bestScore && score >= threshold) {
                    bestScore = score;
                    bestMatch = i;
                }
            }
            
            if (bestMatch !== null) {
                used.add(bestMatch);
                matchedCount++;
            }
        }
        
        // Calculate match ratio
        return matchedCount / shorter.length;
    }

    /**
     * Calculate match confidence score (0-1)
     * @param {string} name1 - First ingredient name
     * @param {string} name2 - Second ingredient name
     * @returns {number} Confidence score (0-1)
     */
    function calculateMatchConfidence(name1, name2) {
        if (!name1 || !name2) return 0.0;
        
        const normalized1 = normalizeName(name1);
        const normalized2 = normalizeName(name2);

        // 1. Exact match (confidence: 1.0)
        if (normalized1 === normalized2) return 1.0;

        // 2. Check if synonyms (confidence: 1.0)
        if (areSynonyms(name1, name2)) return 1.0;

        // 3. Check canonical forms
        const canonical1 = getCanonicalName(name1);
        const canonical2 = getCanonicalName(name2);
        const normalizedCanonical1 = normalizeName(canonical1);
        const normalizedCanonical2 = normalizeName(canonical2);
        
        if (normalizedCanonical1 === normalizedCanonical2) return 0.95;

        // 4. Remove descriptors and check again
        const clean1 = removeDescriptors(normalized1);
        const clean2 = removeDescriptors(normalized2);
        
        if (clean1 === clean2 && clean1.length > 0) return 0.9;
        
        const cleanCanonical1 = removeDescriptors(normalizedCanonical1);
        const cleanCanonical2 = removeDescriptors(normalizedCanonical2);
        
        if (cleanCanonical1 === cleanCanonical2 && cleanCanonical1.length > 0) return 0.85;

        // 5. Word-based fuzzy matching
        const words1 = normalized1.split(/\s+/).filter(w => w.length > 0);
        const words2 = normalized2.split(/\s+/).filter(w => w.length > 0);
        
        // Single word matching with fuzzy
        if (words1.length === 1 && words2.length === 1) {
            if (fuzzyWordMatch(words1[0], words2[0], 0.7)) {
                const sim = similarityRatio(words1[0], words2[0]);
                return Math.max(0.7, sim);
            }
        }
        
        // Multi-word matching (order-independent)
        if (words1.length > 1 || words2.length > 1) {
            const wordMatchScore = matchWordsUnordered(words1, words2, 0.7);
            if (wordMatchScore > 0) {
                return wordMatchScore * 0.9; // Slightly lower confidence for multi-word
            }
        }

        // 6. Substring matching with validation (for compound names)
        if (normalized1.includes(normalized2) || normalized2.includes(normalized1)) {
            const shorter = normalized1.length <= normalized2.length ? normalized1 : normalized2;
            const longer = normalized1.length > normalized2.length ? normalized1 : normalized2;
            
            if (shorter.length >= 3) {
                const index = longer.indexOf(shorter);
                if (index >= 0) {
                    const before = index > 0 ? longer[index - 1] : ' ';
                    const after = index + shorter.length < longer.length ? longer[index + shorter.length] : ' ';
                    
                    if ((before === ' ' || before === '-') && (after === ' ' || after === '-')) {
                        // Calculate confidence based on length ratio
                        const lengthRatio = shorter.length / longer.length;
                        return 0.7 + (lengthRatio * 0.2); // 0.7 to 0.9
                    }
                }
            }
        }

        // 7. Similarity-based matching (for typos and variations)
        const fullSimilarity = similarityRatio(clean1 || normalized1, clean2 || normalized2);
        if (Math.min(clean1.length, clean2.length) >= 4) {
            return fullSimilarity * 0.8; // Slightly lower for similarity-only matches
        }

        // 8. Check canonical forms with similarity
        const canonicalSimilarity = similarityRatio(cleanCanonical1 || normalizedCanonical1, 
                                                     cleanCanonical2 || normalizedCanonical2);
        if (Math.min(cleanCanonical1.length, cleanCanonical2.length) >= 4) {
            return canonicalSimilarity * 0.75;
        }

        return 0.0;
    }

    /**
     * Find matching ingredients using synonym database and advanced fuzzy matching
     * @param {string} name1 - First ingredient name
     * @param {string} name2 - Second ingredient name
     * @param {number} confidenceThreshold - Minimum confidence threshold (0-1, default 0.7)
     * @returns {boolean} True if ingredients match
     */
    function matchIngredients(name1, name2, confidenceThreshold = 0.7) {
        const confidence = calculateMatchConfidence(name1, name2);
        return confidence >= confidenceThreshold;
    }

    // ============================================================================
    // PUBLIC API
    // ============================================================================

    return {
        /**
         * Check if two ingredients match (using synonyms and fuzzy matching)
         * @param {string} name1 - First ingredient name
         * @param {string} name2 - Second ingredient name
         * @param {number} threshold - Optional confidence threshold (0-1, default 0.7)
         * @returns {boolean} True if ingredients match
         */
        match: function(name1, name2, threshold) {
            return matchIngredients(name1, name2, threshold);
        },

        /**
         * Get match confidence score between two ingredients
         * @param {string} name1 - First ingredient name
         * @param {string} name2 - Second ingredient name
         * @returns {number} Confidence score (0-1, where 1.0 is perfect match)
         */
        getMatchConfidence: function(name1, name2) {
            return calculateMatchConfidence(name1, name2);
        },

        /**
         * Get canonical form of an ingredient name
         * @param {string} name - Ingredient name
         * @returns {string} Canonical name
         */
        getCanonical: function(name) {
            return getCanonicalName(name);
        },

        /**
         * Get all synonyms for an ingredient
         * @param {string} name - Ingredient name
         * @returns {Array<string>} Array of synonyms
         */
        getSynonyms: function(name) {
            return getSynonyms(name);
        },

        /**
         * Check if two ingredients are synonyms
         * @param {string} name1 - First ingredient name
         * @param {string} name2 - Second ingredient name
         * @returns {boolean} True if synonyms
         */
        areSynonyms: function(name1, name2) {
            return areSynonyms(name1, name2);
        },

        /**
         * Normalize ingredient name
         * @param {string} name - Ingredient name
         * @returns {string} Normalized name
         */
        normalize: function(name) {
            return normalizeName(name);
        },

        /**
         * Add custom synonym entry
         * @param {string} canonical - Canonical name
         * @param {Array<string>} synonyms - Array of synonyms
         */
        addSynonym: function(canonical, synonyms) {
            if (!SYNONYM_DATABASE[canonical]) {
                SYNONYM_DATABASE[canonical] = [];
            }
            SYNONYM_DATABASE[canonical] = [
                ...SYNONYM_DATABASE[canonical],
                ...synonyms
            ];
            // Invalidate reverse index to force rebuild
            reverseIndex = null;
        },

        /**
         * Get all canonical ingredient names
         * @returns {Array<string>} Array of canonical names
         */
        getAllCanonicals: function() {
            return Object.keys(SYNONYM_DATABASE).sort();
        }
    };
})();

// Export for use in Node.js or module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IngredientSynonymDB;
}

