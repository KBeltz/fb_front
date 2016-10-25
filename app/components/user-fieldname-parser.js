import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service('store'),

  field: null,

  model() {
    return this.get('store').createRecord('submission', {});
  },

  willRender() {
    this._super(...arguments);
    this.field = this.get('field.fieldName');
    switch(this.field) {
      case 'First Name':
        this.set('finalFieldNameValue', 'firstName');
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

  }
});
