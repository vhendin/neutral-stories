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
            name: 'name',
            title: 'Namn',
            type: 'reference',
            to: [{type: 'actor'}],
            blockEditor: {
              icon: () => 'N'
            }
          },
          {
            name: 'namePossessive',
            title: 'Namn (possessive)',
            type: 'reference',
            to: [{type: 'actor'}],
            blockEditor: {
              icon: () => 'NP'
            }
          },
          {
            name: 'subjectivePersonalPronoun',
            title: 'Han, hon, hen',
            type: 'reference',
            to: [{type: 'actor'}],
            blockEditor: {
              icon: () => 'SPP'
            }
          },
          {
            name: 'objectivePersonalPronoun',
            title: 'Honom, henne, henom',
            type: 'reference',
            to: [{type: 'actor'}],
            blockEditor: {
              icon: () => 'OPP'
            }
          },
          {
            name: 'possessivePronoun',
            title: 'hans, hennes, hens',
            type: 'reference',
            to: [{type: 'actor'}],
            blockEditor: {
              icon: () => 'PP'
            }
          }
        ]
      }
    }
  ]
}
