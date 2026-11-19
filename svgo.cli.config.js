// Config for the `npm run svgo` cleanup script (SVGO 4 dropped the `--enable` CLI flag).
// Not used by the webpack build, which configures svgo-loader in next.config.js.
module.exports = {
  multipass: true,
  js2svg: { pretty: true },
  plugins: [
    'preset-default',
    'removeTitle',
    'removeRasterImages',
    'sortAttrs',
    'removeDimensions',
    'removeOffCanvasPaths',
    'reusePaths',
  ],
}
