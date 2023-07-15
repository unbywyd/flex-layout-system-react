// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: {
    browser: "./index.tsx"
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devServer: {
    open: true,
    static: [
      {
        directory: __dirname,
        serveIndex: true,
        watch: true,
      }
    ],
    compress: true,
    liveReload: true,
    port: 9002,
    host: '127.0.0.1'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: "ts-loader"
          }
        ],
        exclude: /node_modules[\\/]((?!lit).)*$/
      }
    ],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".ts", ".js", ".tsx"],
    alias: {
      appConfig: path.join(__dirname, 'config', isProduction ? 'prod' : 'dev')
    }
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }

  return config;
};
