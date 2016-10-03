import DS from 'ember-data';

export default DS.Model.extend({
  templateName: DS.attr('string'),
  updateBy: DS.attr('number'),
  updateTime: DS.attr('date'),
  insertTime: DS.attr('date'),
  forms: DS.hasMany('form'),
  templateFields: DS.hasMany('template-field'),
  user: DS.belongsTo('user')
});
