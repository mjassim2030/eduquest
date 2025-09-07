module.exports = {
  root: true,
  ignorePatterns: ["**/dist/**", "**/.next/**"],
  overrides: [
    { files: ["**/*.ts","**/*.tsx"], parserOptions: { project: false } }
  ]
};
