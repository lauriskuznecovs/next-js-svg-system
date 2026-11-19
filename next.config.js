// SVGO settings applied to every imported SVG (matches the previous
// next-optimized-images / svgo v2 output: viewBox is dropped when it
// equals the width/height, <title> is stripped).
const svgoLoader = {
  loader: 'svgo-loader',
  options: {
    configFile: false,
    multipass: false,
    plugins: ['preset-default', 'removeViewBox', 'removeTitle'],
  },
}

module.exports = {
  images: {
    // SVGs are handled by the custom rules below.
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          // `import icon from './icon.svg?include'` -> raw SVG markup string
          resourceQuery: /include/,
          type: 'asset/source',
          use: [svgoLoader],
        },
        {
          // `import icon from './icon.svg'` -> base64 data URI
          // (`asset` + always-inline instead of `asset/inline`, because Next
          // sets a global asset generator `filename` that `asset/inline` rejects)
          type: 'asset',
          parser: { dataUrlCondition: () => true },
          use: [svgoLoader],
        },
      ],
    })

    return config
  },
}
