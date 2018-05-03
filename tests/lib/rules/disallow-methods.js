/**
 * @fileoverview add your not allowed methd
 * @author maoxunxing
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/disallow-methods"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("disallow-methods", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var a = [1,23].indexOf(1);",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
