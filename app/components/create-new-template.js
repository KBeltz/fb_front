import Ember from 'ember';

export default Ember.Component.extend({

  orderNumber: 0,

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

    addFieldToTemplate(fieldId) {
      var orderNumber = this.set('orderNumber', this.get('orderNumber') +1);
      var template = this.get('template');
      var field = this.get('store').peekRecord('field', fieldId);
      return this.get('store').createRecord('template-field', {
        template: template,
        field: field,
        orderNum: orderNumber
      });
    },

    removeFieldFromFieldsList(fieldId) {
      var availableFieldsList = this.get('availableFieldsList');

      //SKY IS WORKING ON THIS, SO DON'T REMOVE IT -10/27

      // var fieldToDisable = availableFieldsList.get('field', fieldId);

      // set(fieldToDisable, 'selectable', false);
      // find(function(item) {
      //   if (item.id === fieldToDisable.id) {
      //
      //   }
      // }, availableFieldsList)
      // EmberInspector.inspect(fieldToDisable);
      var fieldToRemove = this.get('store').peekRecord('field', fieldId);
      availableFieldsList.removeObject(fieldToRemove);


    },

    reAddFieldToList() {
      console.log("I would have reappeared in the list!");
    }
  }
});
