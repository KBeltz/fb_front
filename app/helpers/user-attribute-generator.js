import Ember from 'ember';

export function userAttributeGenerator(params/*, hash*/) {
  var fieldToUse = this.get('model');
  var fieldName = fieldToUse.template.templateField.field.fieldName;
  Ember.computed('templateField.field.fieldName', function() {
    var userAttr = this.get('templateField.field.fieldName').camelize();
    console.log(userAttr);
    return 'model.user.' + userAttr;
  });
}

export default Ember.Helper.helper(userAttributeGenerator);
