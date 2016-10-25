import Ember from 'ember';

export default Ember.Component.extend({
  // selectedFields: Ember.A([]),
  store: Ember.inject.service(),

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
    this.get('addField')(fieldId);
  },

});
