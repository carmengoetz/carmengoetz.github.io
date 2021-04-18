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
				'https://carmengoetz.github.io/',
				'https://carmengoetz.github.io/career',
				'https://carmengoetz.github.io/skills',
				'https://carmengoetz.github.io/projects',
				'https://carmengoetz.github.io/contact',
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