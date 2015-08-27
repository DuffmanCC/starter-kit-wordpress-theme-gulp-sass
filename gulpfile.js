var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	sass 		= require('gulp-ruby-sass'),
	livereload	= require('gulp-livereload');


// Uglify .js files
gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
});

// Compile .scss files to .css
gulp.task('compile', function(){
	return sass('src/sass/style.scss', {
		style: 'nested'
	})
	.on('error', sass.logError)
	.pipe(gulp.dest('dist/'))
	.pipe(livereload());
});

// Copy .php files from scr/ to dist/
gulp.task('copyphp', function(){
	gulp.src('src/**/*.php')
	.pipe(gulp.dest('dist/'));
});

// Watch
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/sass/*.scss', ['compile']);
	gulp.watch('src/**/*.php', ['copyphp']);
	gulp.watch('src/js/*.js', ['scripts'])
});


gulp.task('default', ['scripts', 'compile', 'copyphp']);


