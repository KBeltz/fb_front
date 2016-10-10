import DS from 'ember-data';

export default DS.Model.extend({
  orderNum: DS.attr('number'),
  // updateBy: DS.attr('number'),
  // insertBy: DS.attr('number'),
  // updateTime: DS.attr('date'),
  // insertTime: DS.attr('date'),
  template: DS.belongsTo('template'),
  field: DS.belongsTo('field')
});
