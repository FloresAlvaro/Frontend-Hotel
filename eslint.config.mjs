import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // El formato de las etiquetas queda a cargo de Prettier.
    'vue/html-self-closing': 'off'
  }
})
