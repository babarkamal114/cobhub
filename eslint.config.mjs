import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configurations
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "import": importPlugin,
      "jsx-a11y": a11yPlugin,
      "prettier": prettierPlugin,
    },
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      
      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // Import rules
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          "alphabetize": { "order": "asc" }
        }
      ],
      "import/no-duplicates": "error",
      
      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      
      // General rules
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "prettier/prettier": "error",
      "no-unused-vars": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  // Storybook specific configuration
  {
    files: ["**/*.stories.{ts,tsx}"],
    rules: {
      // Allow story exports to be unused
      "@typescript-eslint/no-unused-vars": ["error", { 
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true 
      }],
      
      // Allow default exports in stories
      "import/no-default-export": "off",
      
      // Allow storyOf usage
      "react-hooks/rules-of-hooks": "off",
      
      // Allow console.log in stories for debugging
      "no-console": "off",
      
      // Allow any type in stories for flexibility
      "@typescript-eslint/no-explicit-any": "off",
      
      // Allow unused variables in stories
      "no-unused-vars": "off",
      
      // Allow spreading props in stories
      "react/jsx-props-no-spreading": "off",
      
      // Allow default props in stories
      "react/require-default-props": "off",
      
      // Allow function declarations without return type
      "@typescript-eslint/explicit-function-return-type": "off",
      
      // Allow module boundary types to be implicit
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  }
];

export default eslintConfig;
