module.exports = {
    "extends": ["react-app", "airbnb"],
    "plugins": ["jsx-a11y"],

    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "legacyDecorators": true
        }
    },

    "rules": {
        "arrow-parens": "off",
        "class-methods-use-this": "off",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "implicit-arrow-linebreak": "off",
        "import/extensions": "warn",
        "import/named": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "error",
        "import/prefer-default-export": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/label-has-for": "off",
        "jsx-a11y/no-noninteractive-tabindex": "warn",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-quotes": ["error", "prefer-double"],
        "linebreak-style": "off",
        "lines-between-class-members": "warn",
        "max-len": ["error", 150, 4, {
            "ignoreUrls": true,
            "ignoreComments": false
        }],
        "no-confusing-arrow": "off",
        "no-continue": "off",
        "no-mixed-operators": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": ["error", { "props": false }],
        "no-plusplus": "off",
        "no-return-assign": "off",
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        "object-curly-newline": ["warn", { "consistent": true } ],
        "operator-linebreak": "off",
        "prefer-destructuring": "off",
        "prefer-template": "warn",
        "react/no-trailing-spaces": "off",
        "react/destructuring-assignment": "off",
        "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
        "react/no-unused-state": "warn",
        "react/no-unused-prop-types": "warn",
        "react/require-default-props": "off",
        "react/jsx-closing-tag-location": "warn",
        "react/jsx-curly-brace-presence": "warn",
        "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-max-props-per-line": ["error", {"maximum": 5}],
        "react/jsx-no-bind": ["off", {
            "ignoreRefs": true
        }],
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-wrap-multilines": ["warn", {
            "prop": "ignore"
        }],
        "react/no-array-index-key": "off",
        "react/no-access-state-in-setstate": "warn",
        "react/prefer-es6-class": "off",
        "react/prefer-stateless-function": "off",
        "react/sort-comp": ["error", {
            "order": [
                "static-methods",
                "lifecycle",
                "/^handle.+$/",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "everything-else",
                "/^render.+$/",
                "render"
            ]
        }],
        "yoda": "off"
    },

    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true
    },

    "settings": {
        "import/resolver": { "webpack": { "config": { "resolve": { "modules": ["src"] } } } }
    },

    "globals": {
        "$": true,
        "ga": true,
        "l": true,
        "nl": true,
        "sprintf": true
    }
};
