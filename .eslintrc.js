module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'vitest'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-mutating-props': 'off',
        'vue/no-setup-props-destructure': 'off',
        'vue/no-parsing-error': 'off',
    },
}
