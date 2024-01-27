import gulp from 'gulp'

const srcPath = './src/**/*.*'
const distPath = './dist/'

gulp.task('copy', () => {
  return gulp.src(srcPath)
    .pipe(gulp.dest(distPath))
})

const devSeries = gulp.series('copy')

gulp.task('dev', devSeries)
gulp.task('default', devSeries)