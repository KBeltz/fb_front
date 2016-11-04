import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
  },

  generateSubmission(field, user, form, currentFieldValue) {
    var fieldName = field.get('fieldName');
    var userAttribute = null;
    switch(fieldName) {
      case 'First Name':
        user.set('firstName', currentFieldValue);
        userAttribute = user.get('firstName');
        break;
      case 'Middle Name':
        user.set('middleName', currentFieldValue);
        userAttribute = user.get('middleName');
        break;
      case 'Last Name':
        user.set('lastName', currentFieldValue);
        userAttribute = user.get('lastName');
        break;
      case 'Gender':
        user.set('gender', currentFieldValue);
        userAttribute = user.get('gender');
        break;
      case 'Last 4 Of SSN':
        user.set('ssn', currentFieldValue);
        userAttribute = user.get('ssn');
        break;
      case 'Address Line One':
        user.set('addressLineOne', currentFieldValue);
        userAttribute = user.get('addressLineOne');
        break;
      case 'Address Line Two':
        user.set('addressLineTwo', currentFieldValue);
        userAttribute = user.get('addressLineTwo');
        break;
      case 'Zip Code':
        user.set('zipCode', currentFieldValue);
        userAttribute = user.get('zipCode');
        break;
      case 'City':
        user.set('city', currentFieldValue);
        userAttribute = user.get('city');
        break;
      case 'State':
        user.set('state', currentFieldValue);
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
