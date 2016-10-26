import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    // return this.get('store').query('form', {
    //    userId: params['user_id']
    // });
    return RSVP.hash({
      form: this.get('store').query('form', {
        userId: params['user_id']
      }),
      user: this.get('store').findRecord('user', params['user_id'])
    });
  }
});
