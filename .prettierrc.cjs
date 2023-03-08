/** @type {import('prettier').Config} */
const prettierConfig = {
  semi: false,
  singleQuote: true,

  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

module.exports = prettierConfig
