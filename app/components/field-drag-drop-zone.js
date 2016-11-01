import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  classNames: ['draggable-dropzone'],
  classNameBindings: ['dragClass'],
  dragClass: 'deactivated',
  dragLeave(event) {
    event.preventDefault();
    return this.set('dragClass', 'deactivated');
  },
  dragOver(event) {
    event.preventDefault();
    return this.set('dragClass', 'activated');
  },
  drop(event) {
    this.set('dragClass', 'deactivated');
    var fieldId = event.dataTransfer.getData('text/data');
    this.get('removeFieldFromFieldsList')(fieldId);
    this.get('addTemplateFieldToTemplate')(fieldId);
  },

  actions: {
    // removeTemplateField(templateField) {
    //   var selectedFields = template.get('templateFields');
    //   EmberInspector.inspect(template);
    //   console.log(selectedFields);
    //   console.log("selectedFields: " + selectedFields);
    //   selectedFields.removeObject(templateField);
    //   var fieldId = templateField.get('field').get('id');
    //   this.get('addFieldToFieldsList')(fieldId);
    // }
  }

});
