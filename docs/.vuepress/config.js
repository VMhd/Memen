module.exports = {
    // site config
    lang: 'fr-FR',
    title: 'Mento',
    description: 'This is my first VuePress site',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      sidebar: ["/guide/competence.md", "/guide/cadres_enquete.md"]
    
      
    },
    themePlugins: {
        container: true
    },
    patterns: ['**/*.md', '**/*.vue', '!./guide/.~cadres_enquete.md'],
  }