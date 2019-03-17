var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var less = require('gulp-less');
var inject = require('gulp-inject');


//farklı ts  moduller için bundan biekaçtane hazırlanabilir
gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist/Scripts"));
});


gulp.task("less", function () {
    return gulp.src(["src/Styles/Main.less"]).
        pipe(less()).
        //pipe(minifyCSS({})).
        pipe(gulp.dest("dist/Styles"));
});


gulp.task("bootstrap", function () {

    return gulp.src(["node_modules/bootstrap/dist/**/*"]).
        pipe(gulp.dest("dist/ExtLib/bootstrap"))

});

gulp.task("jquery", function () {

    return gulp.src(["node_modules/jquery/dist/*.js"]).
        pipe(gulp.dest("dist/ExtLib/jquery/dist"))


});


gulp.task("inject", function () {

    var css = gulp.src("dist/ExtLib/bootstrap/css/bootstrap.min.css");
    var js = gulp.src("dist/ExtLib/jquery/dist/jquery.min.js");

    return gulp.src("src/index.html")
        .pipe(inject(css, { relative: false }))
        .pipe(inject(js, { relative: false }))
        .pipe(gulp.dest("dist"));
});

gulp.task("injectHTMLs", function () {






});



gulp.task("default", gulp.series(["bootstrap", "jquery", "less", "ts", "inject"]));


