module.exports = {
  title: 'Coco-UI',
  description: '一个适合学习的 UI 框架',
  base: '/coco/',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: 'Github', link: 'https://github.com/zenglinan/coco'},
      {text: 'Home', link: '/'}
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: [
          'views/guide/install.md',
          'views/guide/start.md'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          'views/components/basic/',
          'views/components/data/',
          'views/components/navigation/',
          'views/components/notice/',
          'views/components/others/',
        ]
      }

    ],
  }
}