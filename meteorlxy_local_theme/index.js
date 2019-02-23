module.exports = ({
  comments = {},
}) => {
  return {
    plugins: [
      '@vuepress/plugin-nprogress',
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      ['@vssue/vuepress-plugin-vssue', Object.assign({
        platform: 'github',
      }, comments)],
      ['@vuepress/search', {
        searchMaxSuggestions: 10      
      }],
      require('./plugins/blog'),
      require('./plugins/theme'),
    ],
  }
}
