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
    sendTemplate(user, form) {
      console.log("send template action");
      console.log(user.id);
      form.set('isComplete', 'N');
      form.set('recipientUser', user);
      this.get('store').findRecord('template', 30).then(function(t) {
        form.set('template', t);
        console.log("FORM: " + form);
        form.save().catch(function(reason) {
          console.log("REASON");
          console.log(reason);
          this.transitionTo('users');
        });
      });


    this.transitionTo('users');
    }
  }
});
