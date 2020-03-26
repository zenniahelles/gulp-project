let connect = require("gulp-connect");
let { watchHTML, htmlTask }  = require("./tasks/html");
let { sassTask, watchScss } = require("./tasks/scss");
let { jsTask, watchJs } = require("./tasks/js");
let { imageTask, watchImages } = require("./tasks/images");
let { mediaTask, watchMedia } = require("./tasks/media");



  function watch() {
      watchHTML();
      watchScss();
      watchJs();
      watchImages();
      watchMedia();
      connect.server({
        livereload: true,
        root: "dist"
    });
  }

  function build(done) {
    htmlTask();
    sassTask();
    jsTask();
    imageTask();
    mediaTask();
    done();
  }

  exports.default = watch;
  exports.build = build;