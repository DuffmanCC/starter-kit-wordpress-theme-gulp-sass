var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	livereload	= require('gulp-livereload'),
	compass		= require('gulp-compass');


// Uglify .js files
gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
});

// Compass to css
gulp.task('compass', function(){
	gulp.src('src/sass/*.sass')
	.pipe(compass({
		config_file: './config.rb',
	    css: 'dist/',
	    sass: 'src/sass',
	    style: 'expanded'
	}))
	.pipe(gulp.dest('dist/'))
	.pipe(livereload());
});

// Copy .php files from scr/ to dist/
gulp.task('copyphp', function(){
	gulp.src('src/**/*.php')
	.pipe(gulp.dest('dist/'));
});

// Watch con compass
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/sass/*.scss', ['compass']);
	gulp.watch('src/**/*.php', ['copyphp']);
	gulp.watch('src/js/*.js', ['scripts'])
});

gulp.task('default', ['scripts', 'compass', 'copyphp']);


