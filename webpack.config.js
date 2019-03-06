const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const outputDirectory = "dist";

const clientConfig = {
  target: "web",
  entry: [
    "babel-polyfill",
    "./src/client/scripts/index.tsx",
    "./src/client/styles/app.scss"
  ],
  output: {
    path: path.join(__dirname, outputDirectory, "client"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: "ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};

const serverConfig = {
  target: "node",
  entry: [
    "./src/server/server.tsx",
  ],
  output: {
    path: path.join(__dirname, outputDirectory, "server"),
    filename: "server.js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: "ts-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}

module.exports = [clientConfig, serverConfig];