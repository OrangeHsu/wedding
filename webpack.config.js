const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env) => {
  const DEV_BABEL_PRESETS = env.dev
    ? [
        [
          "env",
          {
            modules: false,
            loose: true,
            useBuiltIns: true,
            targets: { chrome: 55 },
          },
        ],
      ]
    : [];

  const DEV_BABEL_PLUGINS = env.dev
    ? [
        "react-hot-loader/babel",
        ["transform-object-rest-spread", { useBuiltIns: true }],
      ]
    : [];

  const DEV_WEBPACK_ENTRIES = env.dev
    ? [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://127.0.0.0:8080",
        "webpack/hot/only-dev-server",
      ]
    : [];

  const DEV_WEBPACK_PLUGINS = env.dev
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
      ]
    : [];

  const PROD_BABEL_PRESETS = env.prod
    ? [
        [
          "env",
          {
            modules: false,
            loose: true,
            useBuiltIns: true,
            targets: { ie: 11 },
          },
        ],
      ]
    : [];

  const PROD_BABEL_PLUGINS = env.prod
    ? [
        ["transform-object-rest-spread", { useBuiltIns: true }],
        [
          "transform-runtime",
          { helpers: false, polyfill: false, regenerator: true },
        ],
      ]
    : [];

  const PROD_WEBPACK_ALIASES = /*env.prod ? { react: 'react-lite', 'react-dom': 'react-lite' } :*/ {};

  const PROD_WEBPACK_PLUGINS = env.prod
    ? [
        new webpack.DefinePlugin({
          "process.env": { NODE_ENV: JSON.stringify("production") },
        }),
        new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      ]
    : [];

  return {
    entry: [...DEV_WEBPACK_ENTRIES, __dirname + "/index.js"],
    output: {
      filename: "build/bundle.js",
      path: __dirname,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: [...DEV_BABEL_PRESETS, ...PROD_BABEL_PRESETS, "react"],
            plugins: [
              ...DEV_BABEL_PLUGINS,
              ...PROD_BABEL_PLUGINS,
              "syntax-dynamic-import",
              "transform-class-properties",
              ["transform-es2015-classes", { loose: true }],
            ],
          },
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          use: ["file-loader", "image-webpack-loader"],
        },

        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                // Prefer `dart-sass`
                implementation: require("sass"),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve("./"), "node_modules"],
      extensions: [".js", ".jsx"],
      alias: PROD_WEBPACK_ALIASES,
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          optipng: { optimizationLevel: 7 },
          gifsicle: { interlaced: false },
          pngquant: { quality: "65-90", speed: 4 },
          mozjpeg: { quality: 65 },
        },
      }),
      ...DEV_WEBPACK_PLUGINS,
      ...PROD_WEBPACK_PLUGINS,
      new MiniCssExtractPlugin(),
      new UglifyJsPlugin(),
      //new BundleAnalyzerPlugin()
    ],
    devServer: {
      hot: env.dev,
      disableHostCheck: true,
      contentBase: __dirname,
      stats: "errors-only",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    },
    performance: { hints: false },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            mangle: true,
            warnings: false,
            compress: {
              pure_getters: true,
              unsafe: true,
              unsafe_comps: true,
              //screw_ie8: true, // no such option in uglify
            },
            output: {
              comments: false,
            },
          },
          exclude: [
            /\.min\.js$/gi,
            /\.html$/,
            /\.(js|jsx)$/,
            /\.css$/,
            /\.json$/,
            /\.svg$/,
            /\.scss$/, //Add this line
          ],
        }),
      ],
    },
  };
};
