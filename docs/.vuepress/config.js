const path = require('path')

module.exports = {
  title: "ADVPL Dicas",
  description: "Dicas, Exemplos, Referências e Tutoriais em ADVPL",
  base: "/advpl/",
  
  head: [["link", { rel: "icon", href: "/assets/img/avatar.jpg" }]],

  theme: path.resolve(__dirname, '../../meteorlxy_local_theme'),
  themeConfig: {
    nav: [
      { text: "Home", exact: true, link: "/" },
      { text: "Funções", exact: false, link: "/posts/categories/functions/" },
      { text: "Exemplos", exact: false, link: "/posts/categories/examples/" },
      { text: "Como fazer", exact: false, link: "/posts/categories/howto/" },
      { text: "Blog", exact: false, link: "/posts/categories/blog/" },
      { text: "Contribuir", exact: false, link: "/posts/categories/contribution/" },
      { text: "Sobre", exact: false, link: "/about/" }
    ],
    sidebar: "auto",
    personalInfo: {
      nickname: "tgmti",
      description: "Thiago Mota<br/>Desenvolvedor",
      email: "tgmspawn@gmail.com",
      location: "Cascavel - PR",
      organization: "TGM",

      avatar: "/advpl/assets/img/avatar.jpg",

      sns: {
        github: {
          account: "tgmti",
          link: "https://github.com/tgmti"
        },
        facebook: {
          account: "tgmti",
          link: "https://www.facebook.com/tgmti"
        },
        linkedin: {
          account: "tgmota",
          link: "http://www.linkedin.com/in/tgmota"
        },
        twitter: {
          account: "tgm_ti",
          link: "https://twitter.com/tgm_ti"
        }
      }
    },
    locales: {
      "/": {
        lang: "en-US"
      }
    },

    // headerBackground priority: url > useGeo
    headerBackground: {
      // url: '/advpl/assets/img/bg.jpg',
      useGeo: true
    },
    lastUpdated: true,
  },

  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    }
  },


  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      //config.node.set('Buffer', false)

      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all'
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all'
          }
        }
      });
    }
  }
};
