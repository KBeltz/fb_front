import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('user', {reload: true}).then(users => users.sortBy('lastName', 'firstName'));
  },

  actions: {
    sendTemplate() {
      console.log("send template action");
    }
  }
});
