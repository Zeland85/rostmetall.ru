const webpack = require("webpack");
const path = require("path");

const distDir = path.resolve(__dirname, "catalog/view/theme/rm/dist");
const srcDir = path.resolve(__dirname, "catalog/view/theme/rm");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    "script" : [
      "jquery",
      // path.resolve(srcDir, "js/jquery.min"),
      path.resolve(srcDir, "js/input-mask/jquery.inputmask.js"),
      path.resolve(srcDir, "js/jquery-migrate-1.4.1.min"),
      path.resolve(srcDir, "js/fancybox/jquery.fancybox"),
      path.resolve(srcDir, "js/foundation/js/foundation.min"),
      path.resolve(srcDir, "js/foundation/js/vendor/jquery.cookie.js"),
      path.resolve(srcDir, "js/foundation/js/vendor/placeholder.js"),
      path.resolve(srcDir, "js/foundation/js/vendor/fastclick.js"),
      path.resolve(srcDir, "js/jquery.elevatezoom.js"),
      path.resolve(srcDir, "js/slick/slick.min.js"),
      path.resolve(srcDir, "js/timer.js"),
      path.resolve(srcDir, "js/script.js"),
      path.resolve(srcDir, "js/youtube.js"),
      path.resolve(srcDir, "js/lazy-img.js")
      // path.resolve(srcDir, "script.js")
    ],
    "style" : [path.resolve(srcDir, "style.scss")]
  },
  output: {
    path: distDir
  },
  externals: {
    jquery: 'jQuery'
  },
  amd: {
    jQuery: true,
    jquery: true
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      slick: path.resolve(srcDir, "js/slick/slick.min.js"),
      modernizr: path.resolve(srcDir, "js/foundation/js/vendor/modernizr.js"),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(srcDir, "js/slick/fonts"),
        to: path.resolve(srcDir, "fonts"),
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(srcDir, "js/slick//fonts"),
        to: path.resolve(distDir, "fonts"),
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(srcDir, "js/foundation/icons/foundation-icons.+(ttf|woff|svg|eot)"),
        to: distDir,
        // to: path.resolve(distDir, "css"),
        flatten: true,
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(srcDir, "js/slick/ajax-loader.gif"),
        to: distDir,
        flatten: true,
      }
    ]),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options : {
              "presets": ["es2015", "stage-2"]
            }
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            unsafe: true,
            inline: true,
            passes: 2,
            keep_fargs: false,
          },
          output: {
            beautify: false,
          },
          mangle: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["advanced", { discardComments: { removeAll: true } }],
          safe: true,
          map: { "inline": false },
          // preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ]
  }
};
