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
        userAttribute = user.get('firstName');
        break;
      case 'Middle Name':
        userAttribute = user.get('middleName');
        break;
      case 'Last Name':
        userAttribute = user.get('lastName');
        break;
      case 'Gender':
        userAttribute = user.get('gender');
        break;
      case 'Last 4 Of SSN':
        userAttribute = user.get('ssn');
        break;
      case 'Address Line One':
        userAttribute = user.get('addressLineOne');
        break;
      case 'Address Line Two':
        userAttribute = user.get('addressLineTwo');
        break;
      case 'Zip Code':
        userAttribute = user.get('zipCode');
        break;
      case 'City':
        userAttribute = user.get('city');
        break;
      case 'State':
        userAttribute = user.get('state');
        break;
    }

    var submission = this.get('store').createRecord('submission');
    submission.set('form', form);
    submission.set('field', field);
    submission.set('submissionText', userAttribute);
    submission.save();
  }
});
