### Package Management
- __NPM__

The JavaScript node package manager, typically abbreviated in all lowercase as npm, is the default method for managing packages in the Node.js runtime environment. It relies upon a command line client and a database made up of public and premium packages known as the the npm registry. Users can access the registry via the client and browse the many packages available through the npm website. Both npm and its registry are managed by npm, Inc.

- __Yarn__

Yarn was developed by Facebook in attempt to resolve some of npm’s shortcomings. Yarn isn’t technically a replacement for npm since it relies on modules from the npm registry. Think of Yarn as a new installer that still relies upon the same npm structure. The registry itself hasn’t changed, but the installation method is different. Since Yarn gives you access to the same packages as npm, moving from npm to Yarn doesn’t require you to make any changes to your workflow.

- __Bower__

Npm and Bower are both dependency management tools. But the main difference between both is npm is used for installing Node js modules but bower js is used for managing front end components like html, css, js etc.

- __Browserify__

Browserify is an open-source JavaScript tool that allows developers to write Node.js-style modules that compile for use in the browser. Browserify lets you use require in the browser, the same way you'd use it in Node. It's not just syntactic sugar for loading scripts on the client.

- __Gulp__

Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more. The kicker for gulp is that its a streaming build system which doesn't write temp files.


- __Parcel__

Blazing fast, zero configuration web application __bundler__




- __Module__


Modules are declarative; the relationships between modules are specified in terms of imports and exports at the file level.

Modules import one another using a module loader. At runtime the module loader is responsible for locating and executing all dependencies of a module before executing it. Well-known modules loaders used in JavaScript are the CommonJS module loader for Node.js and require.js for Web applications.

In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).


### Links

- [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

- [CommonJS vs AMD vs ES2015](https://auth0.com/blog/javascript-module-systems-showdown/)

- [Borserify Handbook](https://github.com/browserify/browserify-handbook)

- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

- [How to automate all things with gulp](https://hackernoon.com/how-to-automate-all-the-things-with-gulp-b21a3fc96885)

- [Gulp parallel task](https://fettblog.eu/gulp-4-parallel-and-series/)

- [Gulp-Inject](https://www.npmjs.com/package/gulp-inject)

- [Gulp-Inject-Partials](https://www.npmjs.com/package/gulp-inject-partials)

- [Gulp-Inject-String](https://www.npmjs.com/package/gulp-inject-string)

- [JavaScript](https://www.geeksforgeeks.org/javascript-tutorial/)



### TypeScript, Gulp, Browserify, Uglify, Watchify, Babel

This part completely copied from typescript offical website. Please [click here](https://www.typescriptlang.org/docs/handbook/gulp.html) to see original document.




#### __Gulp__
This quick start guide will teach you how to build TypeScript with gulp and then add Browserify, uglify, or Watchify to the gulp pipeline. This guide also adds functionality for Babel functionality using Babelify.

We assume that you’re already using Node.js with npm.

1. __Minimal project__
Let’s start out with a new directory. We’ll name it proj for now, but you can change it to whatever you want.

``` shell
mkdir proj
cd proj
```
To start, we’re going to structure our project in the following way:


proj/
   ├─ src/
   └─ dist/


TypeScript files will start out in your src folder, run through the TypeScript compiler and end up in dist.

Let’s scaffold this out:

``` shell
mkdir src
mkdir dist
```
- __Initialize the project__
Now we’ll turn this folder into an npm package.

``` shell
npm init
```

You’ll be given a series of prompts. You can use the defaults except for your entry point. For your entry point, use ./dist/main.js. You can always go back and change these in the package.json file that’s been generated for you.

- __Install our dependencies__
Now we can use npm install to install packages. First install gulp-cli globally (if you use a Unix system, you may need to prefix the npm install commands in this guide with sudo).

``` shell
npm install -g gulp-cli
```
Then install typescript, gulp and gulp-typescript in your project’s dev dependencies. Gulp-typescript is a gulp plugin for Typescript.

``` shell
npm install --save-dev typescript gulp gulp-typescript
```

- __Write a simple example__

Let’s write a Hello World program. In src, create the file main.ts:
``` javascript
function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");
```
In the project root, proj, create the file tsconfig.json:

``` javascript
{
    "files": [
        "src/main.ts"
    ],
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es5"
    }
}
```
- __Create a gulpfile.js__

In the project root, create the file gulpfile.js:
``` javascript
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
```
- __Test the resulting app__
``` shell
gulp
node dist/main.js
```
The program should print “Hello from TypeScript!”.

- __Add modules to the code__

Before we get to Browserify, let’s build our code out and add modules to the mix. This is the structure you’re more likely to use for a real app.

Create a file called src/greet.ts:

``` javascript
export function sayHello(name: string) {
    return `Hello from ${name}`;
}
```
Now change the code in src/main.ts to import sayHello from greet.ts:

``` javascript
import { sayHello } from "./greet";

console.log(sayHello("TypeScript"));
Finally, add src/greet.ts to tsconfig.json:

{
    "files": [
        "src/main.ts",
        "src/greet.ts"
    ],
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es5"
    }
}
```
Make sure that the modules work by running gulp and then testing in Node:

```shell
gulp
node dist/main.js
```
Notice that even though we used ES2015 module syntax, TypeScript emitted CommonJS modules that Node uses. We’ll stick with CommonJS for this tutorial, but you could set module in the options object to change this.

2. __Browserify__
Now let’s move this project from Node to the browser. To do this, we’d like to bundle all our modules into one JavaScript file. Fortunately, that’s exactly what Browserify does. Even better, it lets us use the CommonJS module system used by Node, which is the default TypeScript emit. That means our TypeScript and Node setup will transfer to the browser basically unchanged.

First, install browserify, tsify, and vinyl-source-stream. tsify is a Browserify plugin that, like gulp-typescript, gives access to the TypeScript compiler. vinyl-source-stream lets us adapt the file output of Browserify back into a format that gulp understands called vinyl.
```shell
npm install --save-dev browserify tsify vinyl-source-stream
```
- __Create a page__
Create a file in src named index.html:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello World!</title>
    </head>
    <body>
        <p id="greeting">Loading ...</p>
        <script src="bundle.js"></script>
    </body>
</html>
```
Now change main.ts to update the page:

``` javascript
import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");

```
Calling showHello calls sayHello to change the paragraph’s text. Now change your gulpfile to the following:
``` javascript
var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});
```
This adds the copy-html task and adds it as a dependency of default. That means any time default is run, copy-html has to run first. We’ve also changed default to call Browserify with the tsify plugin instead of gulp-typescript. Conveniently, they both allow us to pass the same options object to the TypeScript compiler.

After calling bundle we use source (our alias for vinyl-source-stream) to name our output bundle bundle.js.

Test the page by running gulp and then opening dist/index.html in a browser. You should see “Hello from TypeScript” on the page.

Notice that we specified debug: true to Browserify. This causes tsify to emit source maps inside the bundled JavaScript file. Source maps let you debug your original TypeScript code in the browser instead of the bundled JavaScript. You can test that source maps are working by opening the debugger for your browser and putting a breakpoint inside main.ts. When you refresh the page the breakpoint should pause the page and let you debug greet.ts.

3. __Watchify, Babel, and Uglify__
Now that we are bundling our code with Browserify and tsify, we can add various features to our build with browserify plugins.

Watchify starts gulp and keeps it running, incrementally compiling whenever you save a file. This lets you keep an edit-save-refresh cycle going in the browser.

Babel is a hugely flexible compiler that converts ES2015 and beyond into ES5 and ES3. This lets you add extensive and customized transformations that TypeScript doesn’t support.

Uglify compacts your code so that it takes less time to download.

- __Watchify__
We’ll start with Watchify to provide background compilation:

```shell
npm install --save-dev watchify gulp-util
```

Now change your gulpfile to the following:
``` javascript
var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", ["copy-html"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
```
There are basically three changes here, but they require you to refactor your code a bit.

We wrapped our browserify instance in a call to watchify, and then held on to the result.
We called watchedBrowserify.on("update", bundle); so that Browserify will run the bundle function every time one of your TypeScript files changes.
We called watchedBrowserify.on("log", gutil.log); to log to the console.
Together (1) and (2) mean that we have to move our call to browserify out of the default task. And we have to give the function for default a name since both Watchify and Gulp need to call it. Adding logging with (3) is optional but very useful for debugging your setup.

Now when you run Gulp, it should start and stay running. Try changing the code for showHello in main.ts and saving it. You should see output that looks like this:
``` shell
proj$ gulp
[10:34:20] Using gulpfile ~/src/proj/gulpfile.js
[10:34:20] Starting 'copy-html'...
[10:34:20] Finished 'copy-html' after 26 ms
[10:34:20] Starting 'default'...
[10:34:21] 2824 bytes written (0.13 seconds)
[10:34:21] Finished 'default' after 1.36 s
[10:35:22] 2261 bytes written (0.02 seconds)
[10:35:24] 2808 bytes written (0.05 seconds)
```
- __Uglify__
First install Uglify. Since the point of Uglify is to mangle your code, we also need to install vinyl-buffer and gulp-sourcemaps to keep sourcemaps working.
```shell
npm install --save-dev gulp-uglify vinyl-buffer gulp-sourcemaps
```
Now change your gulpfile to the following:
``` javascript
var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['src/*.html']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"));
});
```
Notice that uglify itself has just one call — the calls to buffer and sourcemaps exist to make sure sourcemaps keep working. These calls give us a separate sourcemap file instead of using inline sourcemaps like before. Now you can run Gulp and check that bundle.js does get minified into an unreadable mess:

``` shell
gulp
cat dist/bundle.js
```
4. __Babel__
First install Babelify and the Babel preset for ES2015. Like Uglify, Babelify mangles code, so we’ll need vinyl-buffer and gulp-sourcemaps. By default Babelify will only process files with extensions of .js, .es, .es6 and .jsx so we need to add the .ts extension as an option to Babelify.

``` shell
npm install --save-dev babelify babel-core babel-preset-es2015 vinyl-buffer gulp-sourcemaps
```

Now change your gulpfile to the following:
``` javascript
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['src/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyHtml'], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});
```
We also need to have TypeScript target ES2015. Babel will then produce ES5 from the ES2015 code that TypeScript emits. Let’s modify tsconfig.json:
``` javascript
{
    "files": [
        "src/main.ts"
    ],
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es2015"
    }
}
```
Babel’s ES5 output should be very similar to TypeScript’s output for such a simple script.










