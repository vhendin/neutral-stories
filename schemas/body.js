export default {
  title: 'Body',
  name: 'body',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [],
        annotations: [
          {
            name: 'actor', title: 'Actors', type: 'reference', to: {type: 'actor'}
          }
        ]
      }
    }
  ]
}
