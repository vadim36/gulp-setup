import gulp from 'gulp'
import {paths} from '../utils/paths.js'
import { plugins } from '../utils/plugins.js'

export default function scssHandler() {
  return gulp.src(paths.src.styles)
    .pipe(plugins.sassHandler())
    .pipe(gulp.dest(paths.build.styles))
}