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
      var textFields = Ember.$('.ember-text-field');
      console.log('EMBER TEXT FIELD: ', textFields);
      // var labels = Ember.$('label');
      // console.log('LABELS: ', labels);
      // for (i = 0; i < textFields.length; i++) {
      //   var currentFieldValue = textFields[i].value;
      //   var currentLabel = labels[i].innerHTML;
      // }
      var templateFields = form.get('template').get('templateFields');
      var submissionMaker = this.get('submissionMaker');
      templateFields.forEach(function(templateField, i) {
        var currentFieldValue = textFields[i].value;
        submissionMaker.generateSubmission(templateField.get('field'), user, form, currentFieldValue);
      });
      EmberInspector.inspect(user);
      user.get('_internalModel').save();
      form.set('isComplete', 'Y');
      form.set('dateFilledOut', new Date());
      form.save();
      this.transitionTo('user-forms');
    }
  }
});
