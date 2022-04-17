var gulp = require("gulp");

// Gulp Sass convert SASS code into CSS
var sass = require("gulp-sass")(require("sass"));

// Gulp Imagemin is used to optimized images
var imagemin = require("gulp-imagemin");

// Gulp Uglifycss is used to minify css file
var Uglifycss = require("gulp-uglifycss");

// Rename file with updated name
var rename = require("gulp-rename");

gulp.task("imagemin", function () {
  return gulp.src("./src/*").pipe(imagemin()).pipe(gulp.dest("./dist"));
});

gulp.task("scss", function () {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

gulp.task("css", function () {
  return gulp
    .src("./css/*.css")
    .pipe(
      Uglifycss({
        maxLinLen: 80,
        uglycomments: true,
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("run", gulp.series("scss", "css"));

gulp.task("watch", function () {
  gulp.watch("./sass/*.scss", gulp.series("scss"));
  gulp.watch("./css/*.css", gulp.series("css"));
});

gulp.task("default", gulp.series("run", "watch"));

// gulp.task("default", gulp.series("sass-combined", "css-minified"));
// gulp.task("default", function () {
//   gulp.watch("sass/*.scss", function () {
//     gulp.run("styles");
//   });
// });
