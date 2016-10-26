import Ember from 'ember';

export default Ember.Route.extend({

  submissionMaker: Ember.inject.service(),

  renderTemplate() {
    this.render('user-forms-index.user-forms-show', { into: 'application' });
  },
  //
  // model(params) {
  //   return this.get('store').findRecord('form', params.form_id);
  // },

  actions: {
    saveSubmissions(form) {
      var user = form.get('recipientUser');
      var templateFields = form.get('template').get('templateFields');
      var submissionMaker = this.get('submissionMaker');
      templateFields.forEach(function(templateField) {
        submissionMaker.generateSubmission(templateField.get('field'), user, form);
      });
      form.set('isComplete', 'Y');
      form.set('dateFilledOut', new Date());
      form.save();
      this.transitionTo('user-forms');
    }
  }
});
