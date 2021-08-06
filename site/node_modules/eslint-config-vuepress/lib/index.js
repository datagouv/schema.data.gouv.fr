module.exports = {
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'jsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
  },
}
