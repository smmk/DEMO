// Util
const gulp = require('gulp');

// CSS/SCSS
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const gulpStylelint = require('gulp-stylelint');

// Settings
const paths = {
  css: {
    src: './src/scss/**/*.scss',
    dest: './htdocs/c/escrit/src/'
  }
};


// CSS
gulp.task('styles', function() {
  return gulp.src(paths.css.src)
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss([
      require('autoprefixer')(), // https://github.com/postcss/autoprefixer
      require('postcss-flexbugs-fixes')(), // https://github.com/luisrudge/postcss-flexbugs-fixes
      require('postcss-round-float')(4), // https://github.com/hail2u/postcss-round-float
      require('postcss-easing-gradients')(), // https://github.com/larsenwork/postcss-easing-gradients
      require('postcss-normalize-charset')(), // https://github.com/TrySound/postcss-normalize-charset
      require('css-mqpacker')() // https://github.com/hail2u/node-css-mqpacker
    ]))
    .pipe(gulpStylelint({
      failAfterError: false,
      fix: true,
      reporters: [// エラーを表示する場合はコメントを外す
      //  {formatter: 'string', console: true}
      ]
    }))
    .pipe(gulp.dest(paths.css.dest));
});




// WATCH
gulp.task('watch',
  gulp.series('styles', ()=> {
    gulp.watch(paths.css.src, gulp.task('styles'));
  })
);

// WATCH(SHORTCUT)
gulp.task('w', gulp.task('watch'));

// BUILD
gulp.task('build', gulp.task('styles'));

// DEFAULT
gulp.task('default', gulp.task('build'));

