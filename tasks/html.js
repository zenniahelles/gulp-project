let gulp = require("gulp");
let sourcemaps = require("gulp-sourcemaps");
let rename = require("gulp-rename");
let connect = require("gulp-connect");
let pug = require("gulp-pug");

function htmlTask() {
    return gulp.src("src/html/*.pug")
    .pipe(sourcemaps.init())
    .pipe(pug({
        pretty: false,
        doctype: "html",
    }))
    .pipe(
        rename(function(path) {
        if (path.basename != "index") {
            path.dirname = path.basename;
            path.basename = "index";
            path.extname = ".html";
        } else {
            path.extname = ".html";
        }
    })
    )
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
  }

  function  watchHTML() {
      return gulp.watch("src/html/*.pug", { ignoreInitial: false },htmlTask);
  }

  module.exports = {
      htmlTask,
      watchHTML
  };