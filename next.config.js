module.exports = {
  webpack: (config, options) => {
    config.module.node.push({
      fs: "empty"
    })

    return config
  },
}
