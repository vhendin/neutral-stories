import Icon from 'react-icons/lib/md/person'

export default {
  name: 'actor',
  title: 'Actor',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'defaultName',
      title: 'Default name',
      type: 'string',
      required: true,
      description: 'The initial name of the actor.',
    },
    {
      name: 'defaultGender',
      title: 'Default gender',
      type: 'string',
      required: true,
      description: 'The initial gender of the actor.',
      options: {
        list: [
          {title: 'Male', value: 'male'},
          {title: 'Female', value: 'female'},
          {title: 'Neutral', value: 'neutral'},
        ],
      },
    }
  ]
}
