var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
//var browserify = require("browserify");
//var source = require('vinyl-source-stream');
//var tsify = require("tsify");
var less = require('gulp-less');
var inject = require('gulp-inject');


//farklı ts  moduller için bundan birkaç tane hazırlanabilir
function ts(done) {

    tsProject.src("src/Scripts/**/*.ts")
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist/Scripts"));

    done();
}
exports.ts = ts;


function lessCSS(done) {

    gulp.src(["src/Styles/**/*.less"]).
        pipe(less()).
        //pipe(minifyCSS({})).
        pipe(gulp.dest("dist/Styles"));
    done();
}
exports.lessCSS = lessCSS;


function bootstrap(done) {

    gulp.src(["node_modules/bootstrap/dist/**/*"]).
        pipe(gulp.dest("dist/ExtLib/bootstrap"));
    done();
}
exports.bootstrap = bootstrap;


function jquery(done) {

    gulp.src(["node_modules/jquery/dist/*.js"]).
        pipe(gulp.dest("dist/ExtLib/jquery/dist"));
    done();
}
exports.jquery = jquery;


function injectMain(done) {

    var css = gulp.src("dist/ExtLib/bootstrap/css/bootstrap.min.css");
    var js = gulp.src(["dist/ExtLib/jquery/dist/jquery.min.js", "dist/Scripts/Main.js"]);

    gulp.src("src/main.html")
        .pipe(inject(css, { relative: false }))
        .pipe(inject(js, { relative: false }))
        .pipe(gulp.dest("dist"));
    done();
}
exports.injectMain = injectMain;


function injectDeclaration(done) {

    var js = gulp.src("/dist/Scripts/Declaration/Declaration.js");

    gulp.src("src/Scripts/Declaration/Declaration.html")
        .pipe(inject(js, { relative: false }))
        .pipe(gulp.dest("dist/Scripts/Declaration"));
    done();
}
exports.injectDeclaration = injectDeclaration;

exports.series = gulp.series(bootstrap, jquery, lessCSS, ts);

exports.parallel = gulp.parallel(injectDeclaration, injectMain)