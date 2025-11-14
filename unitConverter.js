/**
 * Comprehensive Unit Conversion Library
 * Supports volume, weight, temperature, and length conversions
 * Designed for cooking and recipe applications
 */

const UnitConverter = (function() {
    'use strict';

    // ============================================================================
    // UNIT CATEGORIES AND DEFINITIONS
    // ============================================================================

    /**
     * Unit categories
     */
    const UNIT_CATEGORIES = {
        VOLUME: 'volume',
        WEIGHT: 'weight',
        TEMPERATURE: 'temperature',
        LENGTH: 'length',
        COUNT: 'count' // Non-convertible units like "pieces", "whole", etc.
    };

    /**
     * Volume units (US Customary and Metric)
     * Base unit: milliliters (ml)
     */
    const VOLUME_UNITS = {
        // Metric
        'ml': { name: 'milliliter', category: UNIT_CATEGORIES.VOLUME, toBase: 1, aliases: ['milliliters', 'millilitre', 'millilitres'] },
        'l': { name: 'liter', category: UNIT_CATEGORIES.VOLUME, toBase: 1000, aliases: ['liters', 'litre', 'litres'] },
        'dl': { name: 'deciliter', category: UNIT_CATEGORIES.VOLUME, toBase: 100, aliases: ['deciliters', 'decilitre', 'decilitres'] },
        
        // US Customary
        'tsp': { name: 'teaspoon', category: UNIT_CATEGORIES.VOLUME, toBase: 4.92892, aliases: ['teaspoons', 't', 'tsps'] },
        'tbsp': { name: 'tablespoon', category: UNIT_CATEGORIES.VOLUME, toBase: 14.7868, aliases: ['tablespoons', 'T', 'Tbs', 'Tbsp', 'tbsps'] },
        'fl oz': { name: 'fluid ounce', category: UNIT_CATEGORIES.VOLUME, toBase: 29.5735, aliases: ['fluid ounces', 'floz', 'fl. oz.', 'fl oz.'] },
        'cup': { name: 'cup', category: UNIT_CATEGORIES.VOLUME, toBase: 236.588, aliases: ['cups', 'c', 'C'] },
        'pint': { name: 'pint', category: UNIT_CATEGORIES.VOLUME, toBase: 473.176, aliases: ['pints', 'pt', 'pts'] },
        'quart': { name: 'quart', category: UNIT_CATEGORIES.VOLUME, toBase: 946.353, aliases: ['quarts', 'qt', 'qts'] },
        'gallon': { name: 'gallon', category: UNIT_CATEGORIES.VOLUME, toBase: 3785.41, aliases: ['gallons', 'gal', 'gals'] },
        
        // Imperial (UK)
        'imperial tsp': { name: 'imperial teaspoon', category: UNIT_CATEGORIES.VOLUME, toBase: 5.91939, aliases: ['imperial teaspoons', 'imp tsp'] },
        'imperial tbsp': { name: 'imperial tablespoon', category: UNIT_CATEGORIES.VOLUME, toBase: 17.7582, aliases: ['imperial tablespoons', 'imp tbsp'] },
        'imperial fl oz': { name: 'imperial fluid ounce', category: UNIT_CATEGORIES.VOLUME, toBase: 28.4131, aliases: ['imperial fluid ounces', 'imp fl oz'] },
        'imperial cup': { name: 'imperial cup', category: UNIT_CATEGORIES.VOLUME, toBase: 284.131, aliases: ['imperial cups', 'imp cup'] },
        'imperial pint': { name: 'imperial pint', category: UNIT_CATEGORIES.VOLUME, toBase: 568.261, aliases: ['imperial pints', 'imp pint'] },
        'imperial quart': { name: 'imperial quart', category: UNIT_CATEGORIES.VOLUME, toBase: 1136.52, aliases: ['imperial quarts', 'imp quart'] },
        'imperial gallon': { name: 'imperial gallon', category: UNIT_CATEGORIES.VOLUME, toBase: 4546.09, aliases: ['imperial gallons', 'imp gallon'] }
    };

    /**
     * Weight units (US Customary and Metric)
     * Base unit: grams (g)
     */
    const WEIGHT_UNITS = {
        // Metric
        'mg': { name: 'milligram', category: UNIT_CATEGORIES.WEIGHT, toBase: 0.001, aliases: ['milligrams', 'milligramme', 'milligrammes'] },
        'g': { name: 'gram', category: UNIT_CATEGORIES.WEIGHT, toBase: 1, aliases: ['grams', 'gramme', 'grammes'] },
        'kg': { name: 'kilogram', category: UNIT_CATEGORIES.WEIGHT, toBase: 1000, aliases: ['kilograms', 'kilogramme', 'kilogrammes'] },
        
        // US Customary
        'oz': { name: 'ounce', category: UNIT_CATEGORIES.WEIGHT, toBase: 28.3495, aliases: ['ounces', 'oz.', 'ozs'] },
        'lb': { name: 'pound', category: UNIT_CATEGORIES.WEIGHT, toBase: 453.592, aliases: ['pounds', 'lbs', 'lbs.', 'pound', '#'] },
        'lbs': { name: 'pound', category: UNIT_CATEGORIES.WEIGHT, toBase: 453.592, aliases: ['pounds', 'lb', 'lbs.', 'pound', '#'] },
        
        // Other
        'ton': { name: 'ton', category: UNIT_CATEGORIES.WEIGHT, toBase: 907185, aliases: ['tons', 'short ton'] },
        'metric ton': { name: 'metric ton', category: UNIT_CATEGORIES.WEIGHT, toBase: 1000000, aliases: ['metric tons', 'tonne', 'tonnes'] }
    };

    /**
     * Temperature units
     * Special handling required (not linear conversion)
     */
    const TEMPERATURE_UNITS = {
        '°C': { name: 'Celsius', category: UNIT_CATEGORIES.TEMPERATURE, aliases: ['celsius', 'C', 'centigrade', 'deg C', 'degree C'] },
        '°F': { name: 'Fahrenheit', category: UNIT_CATEGORIES.TEMPERATURE, aliases: ['fahrenheit', 'F', 'deg F', 'degree F'] },
        'K': { name: 'Kelvin', category: UNIT_CATEGORIES.TEMPERATURE, aliases: ['kelvin', 'deg K', 'degree K'] }
    };

    /**
     * Length units (for cooking measurements)
     * Base unit: millimeters (mm)
     */
    const LENGTH_UNITS = {
        // Metric
        'mm': { name: 'millimeter', category: UNIT_CATEGORIES.LENGTH, toBase: 1, aliases: ['millimeters', 'millimetre', 'millimetres'] },
        'cm': { name: 'centimeter', category: UNIT_CATEGORIES.LENGTH, toBase: 10, aliases: ['centimeters', 'centimetre', 'centimetres'] },
        'm': { name: 'meter', category: UNIT_CATEGORIES.LENGTH, toBase: 1000, aliases: ['meters', 'metre', 'metres'] },
        
        // US Customary
        'in': { name: 'inch', category: UNIT_CATEGORIES.LENGTH, toBase: 25.4, aliases: ['inches', 'inch', '"'] },
        'ft': { name: 'foot', category: UNIT_CATEGORIES.LENGTH, toBase: 304.8, aliases: ['feet', 'foot', "'"] }
    };

    /**
     * Count units (non-convertible)
     */
    const COUNT_UNITS = {
        'piece': { name: 'piece', category: UNIT_CATEGORIES.COUNT, aliases: ['pieces', 'pcs', 'pc', 'whole', 'wholes', 'item', 'items'] },
        'clove': { name: 'clove', category: UNIT_CATEGORIES.COUNT, aliases: ['cloves'] },
        'slice': { name: 'slice', category: UNIT_CATEGORIES.COUNT, aliases: ['slices'] },
        'head': { name: 'head', category: UNIT_CATEGORIES.COUNT, aliases: ['heads'] },
        'bunch': { name: 'bunch', category: UNIT_CATEGORIES.COUNT, aliases: ['bunches'] },
        'stalk': { name: 'stalk', category: UNIT_CATEGORIES.COUNT, aliases: ['stalks'] },
        'can': { name: 'can', category: UNIT_CATEGORIES.COUNT, aliases: ['cans'] },
        'package': { name: 'package', category: UNIT_CATEGORIES.COUNT, aliases: ['packages', 'pkg', 'pkgs'] },
        'bottle': { name: 'bottle', category: UNIT_CATEGORIES.COUNT, aliases: ['bottles'] },
        'box': { name: 'box', category: UNIT_CATEGORIES.COUNT, aliases: ['boxes'] },
        'bag': { name: 'bag', category: UNIT_CATEGORIES.COUNT, aliases: ['bags'] }
    };

    /**
     * Combined unit registry with alias lookup
     */
    const UNIT_REGISTRY = {};
    const ALIAS_REGISTRY = {};

    // Build registry from all unit definitions
    function buildRegistry() {
        const allUnits = [
            ...Object.entries(VOLUME_UNITS),
            ...Object.entries(WEIGHT_UNITS),
            ...Object.entries(TEMPERATURE_UNITS),
            ...Object.entries(LENGTH_UNITS),
            ...Object.entries(COUNT_UNITS)
        ];

        allUnits.forEach(([key, unit]) => {
            UNIT_REGISTRY[key.toLowerCase()] = unit;
            ALIAS_REGISTRY[key.toLowerCase()] = key.toLowerCase();
            
            if (unit.aliases) {
                unit.aliases.forEach(alias => {
                    ALIAS_REGISTRY[alias.toLowerCase()] = key.toLowerCase();
                });
            }
        });
    }

    // Initialize registry
    buildRegistry();

    // ============================================================================
    // HELPER FUNCTIONS
    // ============================================================================

    /**
     * Normalize unit string (lowercase, trim)
     * @param {string} unit - Unit string
     * @returns {string} Normalized unit
     */
    function normalizeUnit(unit) {
        if (!unit) return null;
        return unit.toLowerCase().trim();
    }

    /**
     * Resolve unit alias to canonical unit name
     * @param {string} unit - Unit string (may be alias)
     * @returns {string|null} Canonical unit name or null if not found
     */
    function resolveUnit(unit) {
        const normalized = normalizeUnit(unit);
        if (!normalized) return null;
        
        const canonical = ALIAS_REGISTRY[normalized];
        if (canonical) {
            return canonical;
        }
        
        // Try direct lookup
        if (UNIT_REGISTRY[normalized]) {
            return normalized;
        }
        
        return null;
    }

    /**
     * Get unit definition
     * @param {string} unit - Unit string
     * @returns {Object|null} Unit definition or null
     */
    function getUnitDefinition(unit) {
        const canonical = resolveUnit(unit);
        if (!canonical) return null;
        return UNIT_REGISTRY[canonical];
    }

    /**
     * Check if two units are in the same category
     * @param {string} unit1 - First unit
     * @param {string} unit2 - Second unit
     * @returns {boolean} True if same category
     */
    function sameCategory(unit1, unit2) {
        const def1 = getUnitDefinition(unit1);
        const def2 = getUnitDefinition(unit2);
        
        if (!def1 || !def2) return false;
        return def1.category === def2.category;
    }

    // ============================================================================
    // CONVERSION FUNCTIONS
    // ============================================================================

    /**
     * Convert volume units
     * @param {number} quantity - Quantity to convert
     * @param {string} fromUnit - Source unit
     * @param {string} toUnit - Target unit
     * @returns {number} Converted quantity
     */
    function convertVolume(quantity, fromUnit, toUnit) {
        const fromDef = getUnitDefinition(fromUnit);
        const toDef = getUnitDefinition(toUnit);
        
        if (!fromDef || !toDef) {
            throw new Error(`Invalid volume units: ${fromUnit} or ${toUnit}`);
        }
        
        // Convert to base (ml), then to target
        const inBase = quantity * fromDef.toBase;
        return inBase / toDef.toBase;
    }

    /**
     * Convert weight units
     * @param {number} quantity - Quantity to convert
     * @param {string} fromUnit - Source unit
     * @param {string} toUnit - Target unit
     * @returns {number} Converted quantity
     */
    function convertWeight(quantity, fromUnit, toUnit) {
        const fromDef = getUnitDefinition(fromUnit);
        const toDef = getUnitDefinition(toUnit);
        
        if (!fromDef || !toDef) {
            throw new Error(`Invalid weight units: ${fromUnit} or ${toUnit}`);
        }
        
        // Convert to base (g), then to target
        const inBase = quantity * fromDef.toBase;
        return inBase / toDef.toBase;
    }

    /**
     * Convert length units
     * @param {number} quantity - Quantity to convert
     * @param {string} fromUnit - Source unit
     * @param {string} toUnit - Target unit
     * @returns {number} Converted quantity
     */
    function convertLength(quantity, fromUnit, toUnit) {
        const fromDef = getUnitDefinition(fromUnit);
        const toDef = getUnitDefinition(toUnit);
        
        if (!fromDef || !toDef) {
            throw new Error(`Invalid length units: ${fromUnit} or ${toUnit}`);
        }
        
        // Convert to base (mm), then to target
        const inBase = quantity * fromDef.toBase;
        return inBase / toDef.toBase;
    }

    /**
     * Convert temperature units
     * @param {number} quantity - Temperature value
     * @param {string} fromUnit - Source unit
     * @param {string} toUnit - Target unit
     * @returns {number} Converted temperature
     */
    function convertTemperature(quantity, fromUnit, toUnit) {
        const fromNormalized = normalizeUnit(fromUnit);
        const toNormalized = normalizeUnit(toUnit);
        
        // Convert to Celsius first
        let celsius;
        if (fromNormalized === '°c' || fromNormalized === 'celsius' || fromNormalized === 'c') {
            celsius = quantity;
        } else if (fromNormalized === '°f' || fromNormalized === 'fahrenheit' || fromNormalized === 'f') {
            celsius = (quantity - 32) * 5 / 9;
        } else if (fromNormalized === 'k' || fromNormalized === 'kelvin') {
            celsius = quantity - 273.15;
        } else {
            throw new Error(`Invalid temperature unit: ${fromUnit}`);
        }
        
        // Convert from Celsius to target
        if (toNormalized === '°c' || toNormalized === 'celsius' || toNormalized === 'c') {
            return celsius;
        } else if (toNormalized === '°f' || toNormalized === 'fahrenheit' || toNormalized === 'f') {
            return (celsius * 9 / 5) + 32;
        } else if (toNormalized === 'k' || toNormalized === 'kelvin') {
            return celsius + 273.15;
        } else {
            throw new Error(`Invalid temperature unit: ${toUnit}`);
        }
    }

    // ============================================================================
    // PUBLIC API
    // ============================================================================

    return {
        /**
         * Convert quantity from one unit to another
         * @param {number} quantity - Quantity to convert
         * @param {string} fromUnit - Source unit (supports aliases)
         * @param {string} toUnit - Target unit (supports aliases)
         * @returns {number} Converted quantity
         * @throws {Error} If units are invalid or incompatible
         */
        convert: function(quantity, fromUnit, toUnit) {
            if (typeof quantity !== 'number' || isNaN(quantity)) {
                throw new Error('Quantity must be a valid number');
            }
            
            if (!fromUnit || !toUnit) {
                throw new Error('Both fromUnit and toUnit must be provided');
            }
            
            // Normalize units
            const fromNormalized = normalizeUnit(fromUnit);
            const toNormalized = normalizeUnit(toUnit);
            
            // Same unit, no conversion needed
            if (fromNormalized === toNormalized) {
                return quantity;
            }
            
            // Resolve aliases
            const fromCanonical = resolveUnit(fromUnit);
            const toCanonical = resolveUnit(toUnit);
            
            if (!fromCanonical || !toCanonical) {
                throw new Error(`Unknown unit: ${fromUnit} or ${toUnit}`);
            }
            
            const fromDef = UNIT_REGISTRY[fromCanonical];
            const toDef = UNIT_REGISTRY[toCanonical];
            
            // Check if same category
            if (fromDef.category !== toDef.category) {
                throw new Error(`Cannot convert between ${fromDef.category} (${fromUnit}) and ${toDef.category} (${toUnit})`);
            }
            
            // Handle count units (non-convertible)
            if (fromDef.category === UNIT_CATEGORIES.COUNT) {
                // Only allow conversion if same unit type
                if (fromCanonical === toCanonical) {
                    return quantity;
                }
                throw new Error(`Cannot convert between different count units: ${fromUnit} and ${toUnit}`);
            }
            
            // Route to appropriate conversion function
            switch (fromDef.category) {
                case UNIT_CATEGORIES.VOLUME:
                    return convertVolume(quantity, fromCanonical, toCanonical);
                case UNIT_CATEGORIES.WEIGHT:
                    return convertWeight(quantity, fromCanonical, toCanonical);
                case UNIT_CATEGORIES.LENGTH:
                    return convertLength(quantity, fromCanonical, toCanonical);
                case UNIT_CATEGORIES.TEMPERATURE:
                    return convertTemperature(quantity, fromCanonical, toCanonical);
                default:
                    throw new Error(`Conversion not supported for category: ${fromDef.category}`);
            }
        },

        /**
         * Check if conversion is possible between two units
         * @param {string} fromUnit - Source unit
         * @param {string} toUnit - Target unit
         * @returns {boolean} True if conversion is possible
         */
        canConvert: function(fromUnit, toUnit) {
            try {
                const fromDef = getUnitDefinition(fromUnit);
                const toDef = getUnitDefinition(toUnit);
                
                if (!fromDef || !toDef) return false;
                if (fromDef.category !== toDef.category) return false;
                
                // Count units can only convert to themselves
                if (fromDef.category === UNIT_CATEGORIES.COUNT) {
                    const fromCanonical = resolveUnit(fromUnit);
                    const toCanonical = resolveUnit(toUnit);
                    return fromCanonical === toCanonical;
                }
                
                return true;
            } catch (e) {
                return false;
            }
        },

        /**
         * Get unit category
         * @param {string} unit - Unit string
         * @returns {string|null} Unit category or null
         */
        getCategory: function(unit) {
            const def = getUnitDefinition(unit);
            return def ? def.category : null;
        },

        /**
         * Get unit name
         * @param {string} unit - Unit string
         * @returns {string|null} Unit name or null
         */
        getName: function(unit) {
            const def = getUnitDefinition(unit);
            return def ? def.name : null;
        },

        /**
         * Get all available units for a category
         * @param {string} category - Unit category
         * @returns {Array<string>} Array of unit keys
         */
        getUnitsByCategory: function(category) {
            return Object.keys(UNIT_REGISTRY)
                .filter(key => UNIT_REGISTRY[key].category === category)
                .sort();
        },

        /**
         * Get all supported units
         * @returns {Array<string>} Array of all unit keys
         */
        getAllUnits: function() {
            return Object.keys(UNIT_REGISTRY).sort();
        },

        /**
         * Validate if a unit is supported
         * @param {string} unit - Unit string
         * @returns {boolean} True if unit is supported
         */
        isValidUnit: function(unit) {
            return getUnitDefinition(unit) !== null;
        },

        /**
         * Get unit categories constant
         * @returns {Object} Unit categories
         */
        CATEGORIES: UNIT_CATEGORIES
    };
})();

// Export for use in Node.js or module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UnitConverter;
}

