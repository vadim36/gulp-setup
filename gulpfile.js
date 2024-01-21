import gulp  from 'gulp';
import path from 'path';

const srcPath = './src/**/*.*';
const distPath = path.resolve(__dirname, 'dist');

function copy() {
  return gulp.src(srcPath)
    .pipe(gulp.dest(distPath));
}

function watch() {
  gulp.watch(srcPath, copy);
}

const dev = gulp.series(copy, watch);

gulp.task('default', dev);