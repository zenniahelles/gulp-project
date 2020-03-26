let gulp = require("gulp");
let connect = require("gulp-connect");
let sourcemaps = require("gulp-sourcemaps");
let babel = require("gulp-babel");
let uglify = require ("gulp-uglify");

function jsTask() {
return gulp.src("src/js/*.js")
.pipe(sourcemaps.init())
.pipe(babel({ presets: ["@babel/env"] }))
.pipe(uglify())
.pipe(sourcemaps.write("."))
.pipe(gulp.dest("dist/assets/js"))
.pipe(connect.reload());
}

function watchJs() {
    return gulp.watch("src/js/**/*.js", { ignoreInitial: false }, jsTask);
}

module.exports = {
    jsTask,
    watchJs
};