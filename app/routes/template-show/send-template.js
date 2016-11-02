import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash ({
      user: this.get('store').findAll('user', {reload: true}).then(users => users.sortBy('lastName', 'firstName')),
      template: this.get('store').findAll('template'),
      form: this.store.createRecord('form')
    });
  },
  renderTemplate() {
    this.render('template-show.send-template', { into: 'application' });
  },
  actions: {
    sendTemplate(user) {
      console.log("send template action");
      console.log(user.id);
    }
  }
});
