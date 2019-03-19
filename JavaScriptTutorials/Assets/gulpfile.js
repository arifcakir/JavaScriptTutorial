//konu ile çok detaylı bir örnek

//https://github.com/remojansen/modern-workflow-demo/blob/master/gulpfile.js


var gulp = require('gulp');
var browserify = require("browserify");
var gulpbrowserify = require('gulp-browserify');
var source = require('vinyl-source-stream');
var gulpless = require('gulp-less');
var path = require('path');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


//var uglifyify = require('uglifyify');
//var gutil = require('gulp-util');




//typescript i diğer task manager larla kullnabilmek için
//The TypeScript gets compiled in this recipe using a browserify transform.
// Transforms allow you to hook into the browserify packaging process,
// in this case to compile TypeScript. Luckily, there exists a pre-written 
//TypeScript transform for browserify called tsify.
var tsify = require("tsify");


//Technically, in this task, vinyl-buffer isn't needed. However,
// if you'd like to pipe your browserified stream into another pipe 
//such as uglify() you'll need to run it through this vinyl-buffer first. 
//Otherwise, you'll find yourself at the mercy of an unhandled error.
var buffer = require('vinyl-buffer');  


//Gulp can perform operations on special types of node streams 
//called vinyl file streams. Essentially, vinyl is a format for describing
// files (more info here). However, browserify().bundle() returns a regular 
//text-based node stream. vinyl-source-stream takes one of these conventional 
//node text streams and returns a vinyl file stream (that gulp can deal with).
var source = require('vinyl-source-stream'); 


//en üstte default task olsun diye konuldu
gulp.task('default', defaultTask);
function defaultTask(done) {
  // place code for your default task here
  console.log("default task başladı");
  done();
};


//less dosyaları çeviriliyor
gulp.task('lessTask', lessTask);
function  lessTask() {  

return gulp.src('./Styles/Less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./Styles/bundles/'));
    
};






//uglify kullanmayla ilgili olarak
//https://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp

//browserify ile ts dosyarıda compile ediliyor tsify ile
//ancak istenirze JS dosyaları da concat edilebilir
//konu ile ilgili https://fettblog.eu/gulp-browserify-multiple-bundles/ 
gulp.task("browserifyTask", browserifyTask);

function browserifyTask() {
  browserify({basedir:'.',debug:true,entries:['scripts/content.ts'],cache:{},packageCache: {}})
  .plugin(tsify)
  .bundle()
  .pipe(source('content.js'))
  .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify()) // now gulp-uglify works 
  .pipe(sourcemaps.write(""))
  .pipe(gulp.dest("scripts/bundles/"));


  browserify({basedir:'.',debug:true,entries:['index.ts'],cache:{},packageCache:{}})
  .plugin(tsify)
  .bundle()
  .pipe(source('index.js'))
  .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify()) // now gulp-uglify works 
  .pipe(sourcemaps.write(""))
  .pipe(gulp.dest(""));

};