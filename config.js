/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

const Prism = require('prismjs')

module.exports = {
  build: {
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },
    destination: {
      path: 'build_local',
    },
    posthtml: {
      plugins: [
        require('posthtml-prism')(),
      ],
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
    templates: {
      root: 'src/templates',
    },
  },
  markdown: {
    markdownit: {
      highlight: (code, lang) => {
        lang = lang || 'markup'
        return Prism.highlight(code, Prism.languages[lang], lang)
      },
    }
  },
}
