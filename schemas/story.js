export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true,
      description: 'Name your story',
    },
    {
      name: 'actors',
      title: 'Actors',
      type: 'array',
      of: [{ type: 'actor' }],
      required: true,
      description: 'The actors used in the story',
    }
  ]
}
