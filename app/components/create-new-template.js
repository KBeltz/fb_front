import Ember from 'ember';

export default Ember.Component.extend({

  orderNumber: 0,

  sortedFieldsList: Ember.computed.sort('availableFieldsList', 'sortDefinition'),
  sortDefinition: ['id:desc'],


  store: Ember.inject.service('store'),

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
      this.transitionTo('users');
    },

    addTemplateFieldToTemplate(fieldId) {
      var orderNumber = this.set('orderNumber', this.get('orderNumber') +1);
      var template = this.get('template');
      var field = this.get('store').peekRecord('field', fieldId);
      return this.get('store').createRecord('template-field', {
        template: template,
        field: field,
        orderNum: orderNumber
      });
    },

    removeTemplateFieldFromTemplate(templateField) {
      var templateFields = this.get('template').get('templateFields');
      templateFields.removeObject(templateField);
      var fieldId = templateField.get('field').get('id');
      var sortedFieldsList = this.get('sortedFieldsList');
      var fieldToAdd = this.get('store').peekRecord('field', fieldId);
      sortedFieldsList.addObject(fieldToAdd);
    },

    removeFieldFromFieldsList(fieldId) {
      var sortedFieldsList = this.get('sortedFieldsList');
      // var fieldToDisable = availableFieldsList.get('field', fieldId);

      // set(fieldToDisable, 'selectable', false);
      // find(function(item) {
      //   if (item.id === fieldToDisable.id) {
      //
      //   }
      // }, availableFieldsList)
      // EmberInspector.inspect(fieldToDisable);
      var fieldToRemove = this.get('store').peekRecord('field', fieldId);
      sortedFieldsList.removeObject(fieldToRemove);
    },

    // addFieldToFieldsList(fieldId) {
    //   console.log("Field with ID " + fieldId + " would have reappeared in the list!");
    //   var availableFieldsList = this.get('availableFieldsList');
    //   var fieldToAdd = this.get('store').peekRecord('field', fieldId);
    //   availableFieldsList.addObject(fieldToAdd);
    // }
  }
});
