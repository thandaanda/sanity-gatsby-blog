export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ecf7455bf36227c0fbfd5aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dx1ry5gx',
                  apiId: 'd97104ec-af2b-4e50-90ac-397e2cd86645'
                },
                {
                  buildHookId: '5ecf74553dbc29476ab440c9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qdz2rid6',
                  apiId: '29e3fb82-0a19-4fc9-9044-748a9dc77271'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thandaanda/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qdz2rid6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
