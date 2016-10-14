import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('user-forms-index.user-forms-show', { into: 'application' });
  }
});
