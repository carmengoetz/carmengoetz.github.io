module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/portfolio/'
  //   : '/',
    css: {
        loaderOptions: {
          sass: {
            additionalData: `
              @import "@/styles/_variables.scss";
            `
          }
        }
      }
}