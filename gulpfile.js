const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    //1. where is my scss file
    return gulp.src('./scss/**/*.scss')
    //2. pass that file thru the sass compiler
    .pipe(sass().on('error', sass.logError))
    //3. where do i save the compiled css?
    .pipe(gulp.dest('./css'))
    //4.  stream changes to all browsers, not the refresh part
    .pipe(browserSync.stream());
}

//*can make baseDir your dev directory too if needed 
function watch (){
    browserSync.init({
        server: {
            baseDir: './'

        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*html').on('change', browserSync.reload)
    gulp.watch('./*js/**/*.js').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;