# eslint-plugin-ie8-not-allowed
check es5 method that not allowed in ie8

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ie8-not-allowed`:

```
$ npm install eslint-plugin-ie8-not-allowed --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ie8-not-allowed` globally.

## Usage

Add `ie8-not-allowed` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ie8-not-allowed"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ie8-not-allowed/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
