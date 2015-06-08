// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var del = require('del')
// var concat = require('gulp-concat');
// var jshint = require('gulp-jshint');


// Concatonate our Javascript Files
gulp.task('scripts',function(){
    gulp.src(['app/js/**/*.js','!app/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(reload({stream:true}));
});

// Sass
gulp.task('sass',function(){
    gulp.src('app/scss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});

// HTML Task
gulp.task('html',function(){
    gulp.src('app/*.html')
    .pipe(reload({stream:true}));
});

// ////////////////////////
// Build Tasks

// clean out all files and foulders from build folder
gulp.task('build:cleanfolder',function(cb){
    del([
        'build/**'
    ], cb);
});
// task to create built directory of all files
gulp.task('build:copy',['build:cleanfolder'],function(){
    return gulp.src('app/**/*/')
    .pipe(gulp.dest('build/'))
});
// task to remove unwanted files
// list all files and directories here that you don't want to include
gulp.task('build:remove', ['build:copy',], function(cb){
    del([
        'build/scss/',
        'build/js/!(*min.js)'
    ], cb);
});

gulp.task('build', ['build:copy','build:remove']);
// ////////////////////////

//Browser Sync tasks
gulp.task('browser-sync',function(){
    browserSync({
        server:{
            baseDir: "./app/"
        }
    })
});

gulp.task('build:serve',function(){
    browserSync({
        server:{
            baseDir: "./build/"
        }
    })
});

// Watch Task
gulp.task('watch',function(){
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/*.html', ['html']);
});

// Default Task
gulp.task ('default',['scripts','sass','html','browser-sync','watch']);