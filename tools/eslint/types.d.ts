declare module "eslint-plugin-import" {
    import type { Linter, Rule } from "eslint";

    export const configs: {
        recommended: { rules: Linter.RulesRecord };
    };
    export const rules: Record<string, Rule.RuleModule>;
}

declare module "eslint-plugin-jsx-a11y" {
    import type { Linter, Rule } from "eslint";

    export const configs: {
        strict: { rules: Linter.RulesRecord };
    };
    export const rules: Record<string, Rule.RuleModule>;
}
