const { merge } = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const commonConfig = require("./webpack.common")
const packageJson = require("../package.json")

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        projectManager: "projectManager@http://localhost:8081/remoteEntry.js",
        humanResources: "humanResources@http://localhost:8082/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      title: "Your custom title",
      template: "./public/index.html",
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
