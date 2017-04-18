module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
      "sourceType": "module",
      "allowImportExportEverywhere": false,
      "codeFrame": false,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      }
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
        //"react/jsx-uses-vars": [2],
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-console": 0
    },
    "globals": {
      "React": true
    }
};
