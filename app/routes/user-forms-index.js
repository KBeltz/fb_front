import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('form', {
       userId: params['user_id']
    });
  }
});
