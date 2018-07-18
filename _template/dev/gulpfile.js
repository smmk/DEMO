const gulp = require('gulp');

// CSS/SCSS
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const gulpStylelint = require('gulp-stylelint');

// js
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// html
const fs = require('fs'); //default
const data = require('gulp-data');
const nunjucksRender = require('gulp-nunjucks-render');
const replace = require('gulp-replace');

// Settings
const paths = {
  css: {
    src: './src/assets/scss/**/*.scss',
    dest: '../htdocs/css/'
  },
  js: {
    src: './src/assets/js/**/*.js',
    plg: './src/assets/js/plugins/*.js',
    dest: '../htdocs/js/'
  },
  njk: {
    path: './src/templates/',
    src: './src/templates/**/*.njk',
    inc: './src/templates/**/_*.njk',
    dest: '../htdocs/'
  }
};



/* CSS
------------------------------------------ */
gulp.task('styles', (done)=> {
  gulp.src(paths.css.src)
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
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
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(paths.css.dest))
  done()
});


/* JS
------------------------------------------ */
gulp.task('scripts', (done)=> {
  gulp.src([paths.js.src, '!'+paths.js.plg])
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(concat('scripts.js'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(paths.js.dest))
  done()
});

gulp.task('plugins', (done)=> {
  gulp.src(paths.js.plg)
  .pipe(concat('plugins.js'))
  .pipe(uglify())
  .pipe(gulp.dest(paths.js.dest))
  done()
});

gulp.task('js', gulp.series('plugins', 'scripts', (done)=> {
  done()
}));


/* HTML
------------------------------------------ */
gulp.task('njk', (done)=> {
  gulp.src([paths.njk.src, '!'+paths.njk.inc])
  .pipe(data(()=> {
    return JSON.parse(fs.readFileSync(paths.njk.path+'_data/site.json', 'utf8'));
  }))
  .pipe(nunjucksRender({
    path: [paths.njk.path]
  }))
  .pipe(replace(/[\t]+\n/g, '\n'))
  .pipe(gulp.dest(paths.njk.dest))
  done()
});


/* Command
------------------------------------------ */

// BUILD
gulp.task('build', gulp.parallel('styles', 'js', 'njk')); //parallel=並列

// WATCH
gulp.task('watch', ()=> {
  gulp.watch(paths.css.src, gulp.task('styles'));
  gulp.watch(paths.js.src, gulp.task('js'));
  gulp.watch(paths.njk.path, gulp.task('njk'));
});

// DEFAULT
gulp.task('default', gulp.task('build'));

// WATCH(SHORTCUT)
gulp.task('w', gulp.task('watch'));
