const buildPath = '../dist'
const srcPath = '../src'
const publicPath = '../public/**/*'

export const paths = {
  buildPath,
  srcPath,
  publicPath,
  src: {
    htmlPages: `${srcPath}/html/pages/*.html`,
    styles: `${srcPath}/styles/*.scss`,
  },
  build: {
    styles: `${buildPath}/styles`
  }
}