import Ember from 'ember';

export default Ember.Component.extend({

  orderNumber: 0,

  sortedFieldsList: Ember.computed('availableFieldsList', function() {
    return this.get('availableFieldsList');
  }),


  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    createTemplate(template, user) {
      var name = template.get('templateName');
      template.setProperties({
        templateName: name,
        insertBy: user
      });
      template.save().then(function(templateData) {
        var currentTemplateFields = template.get('templateFields');
        currentTemplateFields.forEach(function(templateField) {
          templateField.save();
        });
      });
      this.get('routing').transitionTo('users');
    },

    addTemplateFieldToTemplate(fieldId) {
      var orderNumber = this.set('orderNumber', this.get('orderNumber') +1);
      var template = this.get('template');
      var field = this.get('store').peekRecord('field', fieldId);
      console.log(orderNumber)
      return this.get('store').createRecord('template-field', {
        template: template,
        field: field,
        orderNum: orderNumber
      });
    },

    removeTemplateFieldFromTemplate(templateField) {
      var templateFields = this.get('template').get('templateFields');
      var fieldId = templateField.get('field').get('id');

      var oldTemplateField = templateFields.removeObject(templateField);
      templateField.destroyRecord();
      var sortedFieldsList = this.get('sortedFieldsList');
      var fieldToAdd = this.get('store').peekRecord('field', fieldId);

      this.set('orderNumber', this.get('orderNumber') -1);
      templateFields.forEach(function(templateField, index) {
        templateField.set('orderNum', (index + 1));
      });

      sortedFieldsList.addObject(fieldToAdd).sort('sortedFieldsList', 'sortDefinition');
    },

    removeFieldFromFieldsList(fieldId) {
      var sortedFieldsList = this.get('sortedFieldsList');
      var fieldToRemove = this.get('store').peekRecord('field', fieldId);
      sortedFieldsList.removeObject(fieldToRemove);
    },

    addFieldToDisabledFieldsList(fieldId) {
      var fieldToDisable = this.get('store').peekRecord('field', fieldId);
      this.get('disabledFieldsList').pushObject(fieldToDisable);
    },
  }
});
