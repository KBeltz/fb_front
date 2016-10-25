import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
  },

  generateSubmission(field, user, form) {
    var fieldName = field.get('fieldName');
    var userAttribute = null;
    switch(fieldName) {
      case 'First Name':
        userAttribute = user.firstName;
        break;
      case 'Middle Name':
        this.set('finalFieldNameValue', 'middleName');
        break;
      case 'Last Name':
        this.set('finalFieldNameValue', 'lastName');
        break;
      case 'Gender':
        this.set('finalFieldNameValue', 'gender');
        break;
      case 'Last 4 Of SSN':
        this.set('finalFieldNameValue', 'ssn');
        break;
      case 'Address Line One':
        this.set('finalFieldNameValue', "addressLineOne");
        break;
      case 'Address Line Two':
        this.set('finalFieldNameValue', 'addressLineTwo');
        break;
      case 'Zip Code':
        this.set('finalFieldNameValue', 'zipCode');
        break;
      case 'City':
        this.set('finalFieldNameValue', 'city');
        break;
      case 'State':
        this.set('finalFieldNameValue', 'state');
        break;
    }
    return this.get('store').createRecord('submission', {
      form: form,
      field: field,
      submissionText: userAttribute
    });
  }
});
