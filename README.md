# Gulp

- [Introduction](#introduction)
  - [Why to Use Gulp](#why-to-use-gulp)
- [Build System](#build-system)
  - [Package Managers](#package-managers)
  - [Preprocessors](#preprocessors)
  - [Task Runners](#task-runners)
- [How to Use](#how-to-use)
  - [Declaring required dependencies](#declaring-required-dependencies)
  - [Create Task](#create-task)
  - [Running the Task](#running-the-task)
  - [Watch the Task](#watch-the-task)
- [Combining Multiple Tasks](#combining-multiple-tasks)
- [Some other Cool Features](#some-other-cool-features)

## Introduction

Gulp is a task runner that uses a NodeJs as a plateform. It purely uses the javascript code and helps to run frontend tasks. Gulp builds system automated tasks like CSS and HTML minification, concatenation library files and compile SCSS files.
It was build on Node.js and NPM

### Why to Use Gulp

- It is simpler, shorter and faster as compared to other task runner.
- Easy to understand and build gulpFile.js as gulp use pure Javascript codes.
- Optimizing assets like CSS, Javascript and Images.
- Converts LESS or SASS to CSS compilation.

## Build System

Build System is referred to as collection of tasks which automate the repetitive work.

_In modern frontend workflow the build system works 3 components_

- Package Managers.
- Preprocessors.
- Task runners and build tools.

### Package Managers

Is is used to automate the installation, upgrade and removel of required dependencies clean libraries and packages used in the development environment.
<br />
**Some package managers are bower and npm**

### Preprocessors

Preprocessors compiles code into native languages. Preprocessors are very usefull in modern workflow. some of the preprocessors are.

- CSS (SASS, LESS and Stylus)
- JS (CoffeeScript, TypeScript etc)
- HTML (Markdown, Jade, Slim etc)

### Task Runners

Task runners automate tasks like SASS into css, minify the files, optimize the images and many other tasks used in development workflow. Gulp, Grunt are the task runners.

## How to Use

Install node.js, install gulp globally by using belown mentioned and command. and the create package.json file.

**All Gulp configuration goes in a file called gulpfile.js located at the root of the project.**

```javascript
npm install -g gulp-cli

npm install --save-dev gulp

gulp --version
npm init -y
```

### Declaring Required Dependencies

When you are installing plugins for the application, you need to specify dependencies for the plugins. The dependencies are handled by the package manager such as NPM and bower.

Add dependencies to your configuration file.

```javascript
npm install gulp-imagemin --save-dev

var imagemin = require('gulp-imagemin');
```

### Create Task

We need to create a task for each dependency which we find and install. Task have the following structure.

```javascript
gulp.task("task-name", function () {
  // code
});

gulp.task("imagemin", function () {
  var imageSrc = "src/images/*";
  var imageDes = "build/images/";
  gulp
    .src(imageSrc)
    .pipe(changed(imageDes))
    .pipe(imagemin())
    .pipe(gulp.dest(imageDes));
});
```

### Running the Task

Gulp file is setup and ready to use you have to use below mentioned command to run gulp file.

```javascript
gulp imagemin
```

### Watch the Task

```JS
brent@brent-laptop:/var/www/github/gulp-tutorials$ gulp
[01:08:35] Using gulpfile /var/www/GITHUB/gulp-tutorials/gulpfile.js
[01:08:35] Starting 'default'...
[01:08:35] Starting 'imagemin'...
[01:08:38] gulp-imagemin: Minified 1 image (saved 2.06 MB - 69.6%)
[01:08:38] Finished 'imagemin' after 2.92 s
[01:08:38] Starting 'sass-cont'...
[01:08:38] Finished 'sass-cont' after 153 ms
[01:08:38] Finished 'default' after 3.07 s
brent@brent-laptop:/var/www/github/gulp-tutorials$
```

## Combining Multiple Tasks

We can combined multiple task into one command as a default task, Gulp provide default keyword to combined multiple tasks.

**imagemin, sass-combined**

```javascript
gulp.task("default", gulp.series("imagemin", "sass-combined"));
```

## Some other Cool Features

Gulp also have some other cool features like **watch** and **live reloading**.

### Watch

The watch method is used to monitor your source files when any changes to the source file is made the watch file run approprite task.

```js
gulp.task("run", gulp.series("scss", "css"));

gulp.task("watch", function () {
  gulp.watch("./sass/*.scss", gulp.series("scss"));
  gulp.watch("./css/*.css", gulp.series("css"));
});

gulp.task("default", gulp.series("run", "watch"));
```
