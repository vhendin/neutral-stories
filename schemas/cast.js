export default {
  name: 'cast',
  title: 'Cast',
  type: 'document',
  fields: [
    {
      name: 'story',
      title: 'Story',
      type: 'reference',
      to: [{type: 'story'}],
    },
    {
      name: 'actors',
      title: 'Actors',
      type: 'array',
      of: [{type: 'actor'}],
      required: true,
    },
  ],
  preview: {
    select: {
      storyTitle: 'story.title',
      actors: 'actors'
    },
    prepare(selection) {
      const {storyTitle, actors} = selection

      return {
        title: `For: ${storyTitle}`,
        subtitle: `${actors.length} actors`
      }
    }
  }
}
