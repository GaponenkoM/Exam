"use strict"
var gulp = require('gulp');
var styl = require('gulp-styl'); 
var imagemin = require('gulp-imagemin'); 
//var uglify = require('gulp-uglify');
var concat = require('gulp-concat'); 
var sass = require('gulp-sass');
var del = require('del');
var spritesmith = require('gulp.spritesmith');

gulp.task('script', function(){
    gulp.src(['js/*.js'])
        .pipe(concat('main.min.js'))
	//	.pipe(uglify())
        .pipe(gulp.dest('release/js'));
})	

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task('styles', function(){		
	gulp.src(['css/*.css'])
		.pipe(styl({compress : true}))
		.pipe(concat('main.min.css'))
        .pipe(gulp.dest('release/css'));
})		

gulp.task('image', function(){			
	gulp.src(['img/**/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('release/img'));
})	

gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprites/*.png')
        .pipe(spritesmith({
            /* this whole image path is used in css background declarations */
            imgName: '../img/sprite.png',
            cssName: '_sprite.scss'
        }));
    spriteData.img.pipe(gulp.dest('release/img/'));
    spriteData.css.pipe(gulp.dest('sass/core'));
});

	gulp.task('default', function(){
	gulp.run('script', 'sass', 'styles', 'image', 'sprite');
 
	gulp.watch('sass/**/*.scss', ['sass'], function () {
	gulp.run('sass');
  })
  
	gulp.watch("js/*.js", function(event){
    gulp.run('script');
  })
  
	gulp.watch("css/*.css", function(event){
    gulp.run('styles');
  })
  
	gulp.watch("img/*", function(event){
    gulp.run('image');
  })
  
  gulp.task('watch', function () {
    gulp.watch(['img/sprites/**/*.png'], ['sprite']);
});
});


