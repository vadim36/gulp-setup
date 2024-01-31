import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import nodeSass from 'sass'
import gulpSass from 'gulp-sass'
import browserSync from 'browser-sync'

const sassHandler = gulpSass(nodeSass)

const paths = {
  build: './dist',
  htmlPages: './src/html/pages/*.html',
  styles: './src/styles/*.scss',
  buildHtml: './dist/pages',
  buildStyles: './dist/styles',
  public: './public/**/*'
}

const plugins = {
  fileInclude,
  sassHandler,
  browserSync
}

gulp.task('html-include', () => {
  return gulp.src(paths.htmlPages)
    .pipe(plugins.fileInclude())
    .pipe(gulp.dest(paths.buildHtml))  
})

gulp.task('scss-handler', () => {
  return gulp.src(paths.styles)
    .pipe(plugins.sassHandler())
    .pipe(gulp.dest(paths.buildStyles))
})

//gulp.task('start-server', () => {
//  return plugins.browserSync.init({
//    server: {
//      baseDir: paths.build
//    },
//    notify: false,
//    port: 3000 //!!
//  })
//})