var gulp = require('gulp');
var uglify = require('gulp-uglify');

var Q = require('deferred');

gulp.task('default', function(){
		console.log('sample');
});

gulp.task('minify', function(){
	
	return gulp.src('*.js')
			.pipe(uglify())
			.pipe(gulp.dest('dist'));


});


gulp.task('defer', function(){
	var deferred = Q();

	console.log('waiting..');

	setTimeout(function(){
		console.log('done');
		deferred.resolve();
	},5000)

	return deferred.promise();
})