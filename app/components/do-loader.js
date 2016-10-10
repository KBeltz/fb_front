import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments)
    do_loader();
  },
  didDestroyElement() {
    do_loader();
  }
});
