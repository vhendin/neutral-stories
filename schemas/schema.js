import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import actor from './actor.js';
import story from './story.js';
import body from './body.js';
import cast from './cast.js';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    actor,
    story,
    body,
    cast,
  ])
});
