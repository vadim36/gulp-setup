import gulp from 'gulp'

import htmlHandler from './tasks/html-handler.js'
import scssHandler from './tasks/scss-handler.js'
import clean from './tasks/clean.js'
import startServer from './tasks/server.js'

const dev = gulp.series(
  clean,
  gulp.parallel(htmlHandler, scssHandler),
  startServer
)

const build = gulp.series(
  clean,
  gulp.parallel(htmlHandler, scssHandler)
)

gulp.task('default', dev)
gulp.task('dev', dev)
gulp.task('build', build)