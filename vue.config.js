module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Carmen Goetz";
            args[0].description = "Portfolio for Carmen Goetz, software developer based out of Saskatoon.";
            args[0].google = "ZWHzJcUYXJzVrjxNEYBUdknrSi0XK7YbfHSbhRJk7z8";
            return args;
        })
  },
  pluginOptions: {
		sitemap: {
			urls: [
				'https://carmengoetz.ca/',
				'https://carmengoetz.ca/career',
				'https://carmengoetz.ca/skills',
				'https://carmengoetz.ca/projects',
				'https://carmengoetz.ca/contact',
			]
		}
	},
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