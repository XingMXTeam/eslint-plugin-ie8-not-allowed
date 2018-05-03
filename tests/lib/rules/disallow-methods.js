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
        {
            code: "someObject.someMethod()",
            options: [[{
                'object': 'someObject',
                'method': 'anotherMethod'
            }]]
        }
    ],

    invalid: [
        {
            code: "someObject.indexOf()",
            options: [[
                {
                    method: "indexOf"
                }
            ]],
            errors: [
                {
                    message: "Calling someObject.disallowedMethod() is disallowed",
                    type: "MemberExpression"
                }
            ]
        }
    ]
});
