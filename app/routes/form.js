import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("HERE look HERE for params" + params["form_id"])
    return this.get('store').find('form', params["form_id"]);
  }
});
