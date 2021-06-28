const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["unsplash.com", "tailwindui.com", "images.unsplash.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
