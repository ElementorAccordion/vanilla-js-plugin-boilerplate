/* =============================================================================================
   PLUGIN
   ============================================================================================= */

;(function (root, factory) {
    // Set the plugin name
    const pluginName = 'Boilerplate';

    // Check if the plugin should be instantiated via AMD, CommonJS or the Browser
    if (typeof define === 'function' && define.amd) {
        define([], factory(pluginName));
    } else if (typeof exports === 'object') {
        module.exports = factory(pluginName);
    } else {
        root[pluginName] = factory(pluginName);
    }
}((window || module || {}), function(pluginName) {
    // Use strict mode
    'use strict';

    // Create an empty plugin object
    const plugin = {};

    // Set the plugin defaults
    const defaults = {
        property: 'Value'
    };

    /**
     * Constructor
     * @param  {object}   options  The plugin options
     * @param  {element}  element  The initialized element
     * @return {void}
     */
    function Plugin(options, element) {
        // Set the plugin instance, name, element, default settings, user options and extended settings
        plugin.this = this;
        plugin.name = pluginName;
        plugin.element = element;
        plugin.defaults = defaults;
        plugin.options = options;
        plugin.settings = extendDefaults(defaults, options);

        // Initialize the plugin
        plugin.this.initialize();
    }

    /**
     * Merge the default plugin settings with the user options
     * @param  {object}  defaults  The default plugin settings
     * @param  {object}  options   The user options
     * @return {object}            The extended plugin settings
     */
    const extendDefaults = (defaults, options) => {
        // Cycle through the user options
        for (let property in options) {
            // Check if the property exists in the user options
            if (options.hasOwnProperty(property)) {
                // Set the property key value in the defaults object with the options property key value
                defaults[property] = options[property];
            }
        }

        // Return the extended plugin settings
        return defaults;
    };

    /**
     * An example of a private method
     * @return {void}
     */
    const privateMethod = () => {
        // Your private method code here...
    }

    /**
     * Public variables and methods
     * @type {object}
     */
    Plugin.prototype = {
        /**
         * Initialize the plugin
         * @return {void}
         */
        initialize: () => {
            // Destroy the existing initialization
            plugin.this.destroy();

            // Initialize the plugin here...
        },

        /**
         * An example of a public method
         * @return {void}
         */
        publicMethod: () => {
            // Your public method code here...
        },

        /**
         * Refresh the plugin by destroying an existing initialization and initializing again
         * @return {void}
         */
        refresh: () => {
            // Destroy the existing initialization
            plugin.this.destroy();

            // Initialize the plugin
            plugin.this.initialize();
        },

        /**
         * Destroy an existing initialization
         * @return {void}
         */
        destroy: () => {
            // Remove anything set by the initialization method here
        }
    };

    // Return the plugin
    return Plugin;
}));
