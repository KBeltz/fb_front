import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      template: this.store.createRecord('template'),
      user: this.get('store').findRecord('user', params['user_id']),
      availableFieldsList: this.get('store').findAll('field').then(list => list.sortBy('numericId:asc'))
    });
  },


});
