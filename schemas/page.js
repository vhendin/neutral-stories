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
            title: 'Emphasis',
            value: 'emphasis',
            blockEditor: {
              icon: HighlightIcon,
              render: Highlight,
            },
          }
        ]
      }
    }
  ]
}
