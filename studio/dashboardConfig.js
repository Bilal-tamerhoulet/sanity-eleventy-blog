export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624027165b538664ce136afa',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-aiv4az4a',
                  apiId: 'b888eca0-7f47-425c-b36a-5dae439fdf33'
                },
                {
                  buildHookId: '6240271697363c6cbe02f803',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-qk8hnbh1',
                  apiId: '078c4f8b-a34a-4b19-8b69-32525f3febbd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bilal-tamerhoulet/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-qk8hnbh1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
