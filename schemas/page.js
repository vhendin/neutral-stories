export default {
  title: 'Page',
  name: 'page',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong'
          }, {
            title: 'Emphasis',
            value: 'emphasis',
            blockEditor: {
              icon: HighlightIcon,
              render: Highlight,
            },
          }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          },
          {
            title: 'MAILTO',
            name: 'mailto',
            type: 'object',
            fields: [
              {
                title: 'Email',
                name: 'email',
                type: 'string'
              }
            ],
            blockEditor: {
              icon: EmailIcon,
            }
          }
        ]
      }
    },
  ]
}
