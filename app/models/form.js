import DS from 'ember-data';

export default DS.Model.extend({
  dateFilledOut: DS.attr('date'),
  isComplete: DS.attr('string'),
  // updateBy: DS.attr('number'),
  // insertBy: DS.attr('number'),
  // updateTime: DS.attr('date'),
  // insertTime: DS.attr('date'),
  submissions: DS.hasMany('submission'),
  template: DS.belongsTo('template'),
  user: DS.belongsTo('user')
});
