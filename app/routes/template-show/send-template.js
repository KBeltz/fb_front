import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  queryParams: {
    template: {
      refreshModel: true
    }
  },
  model(params) {
    const template = this.get('store').findRecord('template', params['template']);
    return RSVP.hash ({
      template: template,
      user: this.get('store').findAll('user', {reload: true}).then(users => users.sortBy('lastName', 'firstName')),
      form: this.store.createRecord('form')
    });
  },
  renderTemplate() {
    this.render('template-show.send-template', { into: 'application' });
  },
  actions: {
    sendTemplate(user, form, template) {
      console.log('template' + template.id);
      form.set('isComplete', 'N');
      form.set('recipientUser', user);
      this.get('store').findRecord('template', template.id).then(function(t) {
        form.set('template', t);
        form.save().catch(function(reason) {
          console.log(reason);
          this.transitionTo('send-template');
        });
      });
    this.transitionTo('template-show');
    }
  }
});
