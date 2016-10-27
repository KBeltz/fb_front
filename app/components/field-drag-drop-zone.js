import Ember from 'ember';

export default Ember.Component.extend({
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
    this.get('addFieldToTemplate')(fieldId);
  },

});
