var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
//var browserify = require("browserify");
//var source = require('vinyl-source-stream');
//var tsify = require("tsify");
var less = require('gulp-less');
var inject = require('gulp-inject');


//farklı ts  moduller için bundan biekaçtane hazırlanabilir
function ts(done) {
    
    tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist/Scripts"));

    done();
}
exports.ts=ts;


function less(done) {
    
    gulp.src(["src/Styles/**/*.less"]).
        pipe(less()).
        //pipe(minifyCSS({})).
        pipe(gulp.dest("dist/Styles"));
    done();
}
exports.less=less;


function bootstrap(done) {

    gulp.src(["node_modules/bootstrap/dist/**/*"]).
        pipe(gulp.dest("dist/ExtLib/bootstrap"));
    done();
}
exports.bootstrap=bootstrap;


function jquery(done) {

    gulp.src(["node_modules/jquery/dist/*.js"]).
        pipe(gulp.dest("dist/ExtLib/jquery/dist"));
    done();
}
exports.jquery=jquery;


function injectIndex(done) {

    var css = gulp.src("dist/ExtLib/bootstrap/css/bootstrap.min.css");
    var js = gulp.src("dist/ExtLib/jquery/dist/jquery.min.js");

    gulp.src("src/index.html")
        .pipe(inject(css, { relative: false }))
        .pipe(inject(js, { relative: false }))
        .pipe(gulp.dest("dist"));
    done();
}
exports.injectIndex=injectIndex;


function injectHTMLs(done) {

    var js=gulp.src("/dist/Scripts/**/*.js");
    
    gulp.src("src/Scripts/**/*.html")
      .pipe(inject(js, {relative: false}))
      .pipe(gulp.dest("dist/Scripts"));
    done();
}
exports.injectHTMLs=injectHTMLs;


exports.series = gulp.series(bootstrap, jquery, less, ts);

exports.parallel = gulp.parallel(injectHTMLs, injectIndex)