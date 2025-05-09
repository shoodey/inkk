/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
    printWidth: 120,
    tabWidth: 4,
    trailingComma: "es5",
    overrides: [
        {
            files: ["*.yaml", "*.yml", "*.json", "*.md"],
            options: {
                tabWidth: 2,
            },
        },
    ],
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    importOrder: [
        "^((.*)react-scan(.*))$", // https://github.com/aidenybai/react-scan/blob/main/docs/installation/vite.md
        "<TYPES>",
        "^(react$)|^(react/(.*)$)|^(react-dom(.*)$)",
        "^(@tauri-apps/.*)$",
        "<THIRD_PARTY_MODULES>",
        "",
        "<TYPES>^@inkk",
        "^@inkk/(.*)$",
        "",
        "<TYPES>^[.|..|~]",
        "^~/",
        "^[../]",
        "^[./]",
    ],
    importOrderTypeScriptVersion: "5.7.0",
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};

export default config;
