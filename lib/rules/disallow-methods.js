/**
 * @fileoverview add your not allowed methd
 * @author maoxunxing
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "add your not allowed methd",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here
        var disallowedMethods = context.options[0];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            'CallExpression': function (node) {
                disallowedMethods.forEach(function(disallowedMethod) {
                    var calledObject = node.callee.object && node.callee.object.name;
                    var calledMethod = node.callee.property && node.callee.property.name;

                    if (calledObject && calledObject === disallowedMethod.object &&
                        calledMethod && calledMethod === disallowedMethod.method) {
                        context.report(node, 'Calling ' + disallowedMethod.object + '.' + disallowedMethod.method + '() is disallowed');
                    }
                });
            }
        };
    }
};
