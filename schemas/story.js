import Icon from 'react-icons/lib/md/book'

export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true,
      description: 'Name your story',
    },
    {
      name: 'body',
      title: 'Body',
      description: 'The actual story',
      type: 'body',
      required: true,
    },
  ]
}
