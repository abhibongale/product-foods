module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/' + process.env.PUBLISH_DIR + '/' : '',
  basePath: process.env.GITHUB_PAGES ? '/' + process.env.PUBLISH_DIR : '',
  trailingSlash: true,
  reactStrictMode: true,
};