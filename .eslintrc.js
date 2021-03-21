module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",

    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],

    // React 17 is not necessarily use import react
    "react/react-in-jsx-scope": "off",
    "react/state-in-constructor": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",

    semi: [0],
    quotes: [1, "double"],
    camelcase: 2,
    "comma-dangle": [2, "only-multiline"],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, "last"],
    "accessor-pairs": 2,
  },
};
