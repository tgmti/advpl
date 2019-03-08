const path = require('path')

const personalInfo = {
  nickname: "TGM",
  description: "Thiago Mota",
  email: "tgmspawn@gmail.com",
  location: "Cascavel - PR, Brasil",

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
}

const nav = [
  { text: "Home", exact: true, link: "/" },
  { text: "Funções", exact: false, link: "/posts/categories/functions/" },
  { text: "Exemplos", exact: false, link: "/posts/categories/examples/" },
  { text: "Como fazer", exact: false, link: "/posts/categories/howto/" },
  { text: "Blog", exact: false, link: "/posts/categories/blog/" },
  { text: "Contribuir", exact: false, link: "/posts/categories/contribution/" },
  { text: "Sobre", exact: false, link: "/about/" }
]

module.exports = {
  title: "ADVPL Dicas",
  description: "Dicas, Exemplos, Referências e Tutoriais em ADVPL",
  base: '/advpl/',
  theme: path.resolve(__dirname, '../../vuepress-theme-meteorlxy/lib'),
  
  head: [["link", { rel: "icon", href: "/assets/img/avatar.jpg" }]],
  
  locales: {
    '/': {
      lang: 'pt-BR',
    },
  },  

  themeConfig: {
    
    lang: require(path.resolve(__dirname, '../../vuepress-theme-meteorlxy/lib/langs/pt-BR')),

    nav: nav,
    personalInfo: personalInfo,
    
    // headerBackground priority: url > useGeo
    headerBackground: {
      // url: '/advpl/assets/img/bg.jpg',
      useGeo: true
    },
  },

  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    },
    config: md => {
      md.use(require('markdown-it-task-lists'))
    },
  },

}