module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/,
      },
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app/,
        'vendor.css': /^(?!app)/,
      },
    },
  },
  npm: {
    styles: {
      'material-design-lite': [
        'dist/material.min.css',
      ],
    },
  },
  modules: {
    autoRequire: {
      'app.js': ['index'],
    },
  },
  plugins: {
    eslint: {
      pattern: /^app\/.*\.js?$/,
      warnOnly: true,
    },
  },
};
