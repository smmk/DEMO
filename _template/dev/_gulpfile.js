var
gulp = require('gulp'),
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'), //ベンダープレフィックス
plumber = require('gulp-plumber'), //watch停止防止
replace = require( 'gulp-replace' ),
convertEncoding = require('gulp-convert-encoding'),
concat = require('gulp-concat'),
// crLfReplace = require('gulp-cr-lf-replace'),
// rename = require("gulp-rename"),
// replaceName = require('gulp-replace-name'),
nunjucksRender = require('gulp-nunjucks-render'),
data = require('gulp-data');
// runSequence = require('run-sequence');

// var dir = [
// 	'acup',
// 	'chiisakushorts',
// 	'sanitaryshorts'
// ]

var path = {
	templates: './src/templates/',
	assets: './src/assets/',
	dest: '../',
	dest_css: '../common2/css/',
	dest_js: '../common2/js/',
	dest_plugins: '../common2/js/',
	src_scss: './src/assets/scss/**/*.scss',
	src_js: './src/assets/js/**/*.js',
	src_plugins: './src/assets/js/plugins/*.js',
	src_njk: './src/templates/**/*.njk'
}

gulp.task('sass', function() {
	return gulp.src(path.src_scss)
		.pipe(plumber()) //watch停止防止
		.pipe(sass({outputStyle:'expanded'}))
		.pipe(postcss([
			autoprefixer({
				browsers: ['last 4 versions','ie >= 9','iOS >= 8'],
				cascade: false
			}), //ベンダープレフィックス
			require('css-mqpacker')(), //メディアクエリ最適化
			require('postcss-combine-duplicated-selectors'), //automatically join identical css selectors.
			require('postcss-flexbugs-fixes'),
			require('postcss-round-float')(4),
			require('postcss-normalize-charset')//Add necessary or remove extra charset with PostCSS
		]))
		// .pipe(crLfReplace({changeCode: 'CR+LF'}))//改行コード変換
		// .pipe(replace('UTF-8', 'Shift_JIS'))
		// .pipe(convertEncoding({to: 'shift_jis'}))
		.pipe(gulp.dest(path.dest_css))
});



gulp.task('scripts', function() {
	gulp.src([path.src_js, '!'+path.src_plugins])
		.pipe(gulp.dest(path.dest_js));
});

gulp.task('plugins', function() {
	gulp.src(path.src_plugins)
		.pipe(concat('plugins.js'))
		.pipe(gulp.dest(path.dest_plugins));
});

// gulp.task('copy', function() {
// 	gulp.src(path.dest_plugins+'*.js')
// 		.pipe(gulp.dest(path.dest+dir[0]+'/js/'));
// 	gulp.src(path.dest_plugins+'*.js')
// 		.pipe(gulp.dest(path.dest+dir[1]+'/js/'));
// 	gulp.src(path.dest_plugins+'*.js')
// 		.pipe(gulp.dest(path.dest+dir[2]+'/js/'));
// });



gulp.task('njk', function () {
	return gulp.src([path.templates+'**/*.njk', '!'+path.templates+'**/_*.njk'])
		.pipe(data(function() {
			return require(path.templates+'_data/html.json');
		}))
		.pipe(nunjucksRender({
			path: [path.templates]
		}))
		.pipe(replace(/[\t]+\n/g, '\n'))
		// .pipe(crLfReplace({changeCode: 'CR+LF'}))//改行コード変換
		// .pipe(replace('utf-8', 'Shift_JIS'))
		// .pipe(convertEncoding({to: 'shift_jis'}))
		.pipe(gulp.dest(path.dest));
});



// gulp.task('default', function(callback) {
// 	runSequence(
// 		['njk', 'sass','scripts','plugins'],
// 		// ['njk', 'sass','plugins'],
// 		// 'copy',
// 		// 'jsp',
// 		callback);
// });

gulp.task('default', ['njk', 'sass','scripts','plugins']);

gulp.task('w', function(){
	// gulp.watch(path.src_njk, function(){
	// 	runSequence('njk','jsp');
	// });
	gulp.watch(path.src_njk,['njk']);
	gulp.watch(path.src_scss, ['sass']);
	gulp.watch(path.src_js, ['scripts']);
	gulp.watch(path.src_plugins,['plugins']);
	// gulp.watch(path.src_plugins, function(){
	// 	runSequence('plugins','copy');
	// });
});





