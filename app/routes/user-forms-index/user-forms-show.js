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
    saveSubmissions(field, user, form) {
      this.get('submissionMaker').generateSubmission(field, user, form);
      form.set('isComplete', 'Y');
      form.save();
      this.transitionTo('user-forms-index');
      // var field = this.get('model.field');
      // var text = this.get('finalFieldNameValue');
      // this.get('store').createRecord('submission', {
      //   field: field,
      //   form: form,
      //   submissionText: text
      // }).save();
      // return form.updateRecord('form', form, {
      //   isComplete: 'Y'
      // }).save();
    }
  }
});
// TODO Need to do WillRender with user and form
// TODO Iterate over form fields
