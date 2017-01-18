// webpack.config.js
module.exports = {
  module: {
    loaders: [
      {
        test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
      }
    ]
  }
}
