import { type Config } from "prettier";

const config: Config = {
  plugins: ["prettier-plugin-astro"],
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  semi: true,
  bracketSpacing: true,
  arrowParens: "avoid",
  trailingComma: "all",
  bracketSameLine: false,
  printWidth: 100,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
