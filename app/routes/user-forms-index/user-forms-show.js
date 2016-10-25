import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('user-forms-index.user-forms-show', { into: 'application' });
  },
  //
  // model(params) {
  //   return this.get('store').findRecord('form', params.form_id);
  // },

  actions: {
    saveSubmissions(form) {
      form.set('isComplete', 'Y');
      form.save();
      this.transitionTo('user-forms');
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
