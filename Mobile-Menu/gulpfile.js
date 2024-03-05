const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const purgecss = require("gulp-purgecss");
function buildStyles() {
  return (
    src("src/css/main.scss")
      .pipe(sass())
      // .pipe(purgecss({ content: ["src/index.html"] }))
      .pipe(dest("./dist/"))
  );
}
function watchTask() {
  watch(["src/css/main.scss"], buildStyles);
}
exports.default = series(buildStyles, watchTask);
