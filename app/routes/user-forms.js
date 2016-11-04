import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('user', {
      isComplete: 'N'
    }).then(users => users.sortBy('lastName', 'firstName'));
  }
});
