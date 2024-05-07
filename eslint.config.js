import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    extends: [
      "prettier"
    ],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
]
