import fileInclude from 'gulp-file-include'
import * as nodeSass from 'sass'
import gulpSass from 'gulp-sass'
import browserSync from 'browser-sync'
import gulpReplace from 'gulp-replace'
import gulpClean from 'gulp-clean'
import htmlClean from 'gulp-htmlclean'

const sassHandler = gulpSass(nodeSass)

export const plugins = {
  fileInclude,
  sassHandler,
  browserSync,
  gulpReplace,
  gulpClean,
  htmlClean
}