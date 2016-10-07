import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    
  },
  
  store: Ember.inject.service(),
  
  fields: null,

  didInsertElement() {
    this._super(...arguments);
    this.get('store').findAll('field').then((fields) => {
       this.set('fields', fields);
    });
  },
  
  showMe: false,
  
  actions: {
    toggleMe() {
      this.toggleProperty('showMe');
    }
  }
});
