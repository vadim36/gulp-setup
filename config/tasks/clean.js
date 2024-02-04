import gulp from 'gulp'
import {paths} from '../utils/paths.js'
import { plugins } from '../utils/plugins.js'
import fs from 'fs'

export default function clean(done) {
  if (!fs.existsSync(paths.buildPath)) return done();
  return gulp.src(paths.buildPath)
    .pipe(plugins.gulpClean({force: true}))
}