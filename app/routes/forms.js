import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    // return this.get('store').query('form', {
    //   isComplete: 'Y'
    // });
    return RSVP.hash({
      form: this.get('store').query('form', {
        isComplete: 'Y'
      }),
      user: this.get('store').findAll('user')
    });
  }
});
