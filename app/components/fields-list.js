import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    
  },
  
  showMe: false,
  
  actions: {
    toggleMe() {
      this.toggleProperty('showMe');
    }
  }
});
