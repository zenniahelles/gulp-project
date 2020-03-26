let gulp = require("gulp");
let sass = require ("gulp-sass");
let connect = require("gulp-connect");
let sourcemaps = require("gulp-sourcemaps");
let clean = require("gulp-clean-css");
let concat = require("gulp-concat");

function sassTask() {
    return gulp.src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    // .pipe(concat("style-bundle.css"))
    .pipe(clean({ compatibility: "ie6" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(connect.reload());
}

function watchScss(){
    return gulp.watch("src/scss/*scss", { ignoreInitial: false }, sassTask);
}

module.exports = {
    sassTask,
    watchScss
};