import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: 'img',
  classNames: ['draggable-item'],
  attributeBindings: ['draggable', 'src'],
  draggable: 'true',
  // src: 'http://www.funnykittensite.com/pictures/Kitten_In_The_Grass.jpg',
  dragStart(event) {
    event.dataTransfer.setData('text/data', event.target.id);
  }
});
