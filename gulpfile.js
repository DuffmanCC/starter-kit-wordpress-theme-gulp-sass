var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	sass 		= require('gulp-ruby-sass'),
	livereload	= require('gulp-livereload');


// Uglify js files
gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
});


// Compile scss files to css
gulp.task('compile', function(){
	return sass('src/sass/style.scss', {
		style: 'nested'
	})
	.on('error', sass.logError)
	.pipe(gulp.dest('dist/'))
	.pipe(livereload());
});


// Watch
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/**/*.*', ['compile']);
});


gulp.task('default', ['scripts', 'compile']);


