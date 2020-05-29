var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");

// Компиляция sass в css и минификация
// -------------------------------------------------------------------------------
gulp.task("sass", function () {
  return gulp
    .src("styles/sass/**/*.sass") // Выбор файлов
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ["last 2 versions"] }))
    .pipe(gulp.dest("styles/")) // Вывод в папку
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(gulp.dest("styles/minify/"));
});
// -------------------------------------------------------------------------------

// Наблюдение за имзенениями sass файлов
// -------------------------------------------------------------------------------
gulp.task("watch", function () {
  gulp.watch("styles/sass/**/*.sass", gulp.series("sass"));
});
// -------------------------------------------------------------------------------

// Default task
// -------------------------------------------------------------------------------
gulp.task("default", gulp.series("watch"));
// -------------------------------------------------------------------------------
