# Middleman-Base

This is a Middleman base site that I personally use for my projects. There a few
nice things included with this. This is for use with Middleman 4, it is not
compatible with Middleman 3.

## What's in it?

The gems and plugins used in this are my personal preference, but they're
just really cool in general.

* #[gulp](https://github.com/gulpjs/gulp) by #[gulpjs](https://github.com/gulpjs/gulp) (The streaming build system)
* #[poststylus](https://github.com/seaneking/poststylus) by #[seaneking](https://github.com/seaneking) (PostCSS adapter for Stylus)
* #[gulp-stylus](https://github.com/stevelacy/gulp-stylus) by #[stevelacy](https://github.com/stevelacy) (Stylus plugin for gulp)
* #[lost](https://github.com/peterramsing/lost) by #[peterramsing](https://github.com/peterramsing) (PostCSS fractional grid system)
* #[autoprefixer](https://github.com/postcss/autoprefixer) by #[postcss](https://github.com/postcss) (Parse CSS and add vendor prefixes to rules)
* #[gulp-cssnano](https://github.com/ben-eb/gulp-cssnano) by #[ben-eb](https://github.com/ben-eb) (Minify CSS with cssnano)
* #[gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) by #[floridoo](https://github.com/floridoo) (Source map support for Gulp.js)
* #[browser-sync](https://github.com/BrowserSync/browser-sync) by #[BrowserSync](https://github.com/BrowserSync) (Keep multiple browsers & devices in sync when building websites)
* gulp integration through middleman's #[external asset pipeline](https://middlemanapp.com/advanced/external-pipeline)
* #[bower](https://github.com/bower/bower) by #[bower](https://github.com/bower) (A package manager for the web)
* #[normalize.styl](https://github.com/bymathias/normalize.styl) by #[bymathias](https://github.com/bymathias) (Stylus version of normalize.css)

## Usage with Middleman

Using templates with Middleman is incredibly easy, you just need to reference
the repository for the template in the ``--template`` flag when you call
``middleman init``. It looks like this:

```
middleman init my-project --template=sebastianbarfurth/middleman-base
```

Once you have the middleman project you will need to install the npm and bower
dependencies. You will need Node.js and npm, as well as a global install of
bower on your system.

```
cd my-project
npm install
bower install
```

Now you can simply run ``middleman``. This will start the BrowserSync proxy
and it will open for you. You can then edit your stylesheets and views and your
browser will automatically reload on all devices.

## Known issues

* Sometimes Stylus injection fails, the easiest way to fix this by hitting save
on the file again. Of course you may also just reload the page manually.

* Views do not refresh properly after saving, the best solution is to manually
reload the browser or save twice.

* The original Stylus files are placed in the build directory after a build. You
can safely ignore them, but it's an issue nonetheless.
