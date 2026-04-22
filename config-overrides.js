// config-overrides.js
module.exports = function override(config, env) {
    // Ignore specific warnings from source-map-loader
    config.ignoreWarnings = [
      {
        module: /react-type-animation/,
        message: /Failed to parse source map/
      }
    ];
    return config;
  };
  