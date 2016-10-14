import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, error) {
    let title = 'You have died of dysentery.';
    // let code = error.code;
    if (error) {
      if (error.isAdapterError) {
        title = 'Oops, there was an adapter error…';
      } else {
        title = "Opps, can't find this one…";
      }
      controller.set('title', title);
    }
    this._super(controller, error);
    // {{debugger}}
  }
});