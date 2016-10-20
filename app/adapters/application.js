import DS from 'ember-data';

import Ember from 'ember';
const { underscore, pluralize } = Ember.String;

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },
});
