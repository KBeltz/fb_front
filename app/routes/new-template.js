import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('template');
    // return {};
  },
  
  actions: {
    createTemplate(data) {
      var template = this.get('model');
      console.log("template.templateName: " + data.get('templateName'))
    }
  }
});
