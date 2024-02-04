import gulp from 'gulp'
import {paths} from '../utils/paths.js'
import { plugins } from '../utils/plugins.js'

export default function htmlHandler() {
  return gulp.src(paths.src.htmlPages)
    .pipe(plugins.fileInclude('@@'))
    .pipe(plugins.gulpReplace(/@img/g, 'img'))
    .pipe(plugins.gulpReplace(/@styles/g, 'styles'))
    .pipe(plugins.gulpReplace(/.s[ac]ss/g, '.css'))
    .pipe(plugins.gulpReplace(/@scripts\//g, ''))
    .pipe(plugins.htmlClean())
    .pipe(gulp.dest(paths.buildPath))
}