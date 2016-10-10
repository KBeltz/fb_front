import DS from 'ember-data';

export default DS.Model.extend({
  fieldName: DS.attr('string'),
  // updateBy: DS.attr('number'),
  // insertBy: DS.attr('number'),
  // updateTime: DS.attr('date'),
  // insertTime: DS.attr('date'),
  submissions: DS.hasMany('submission'),
  templateFields: DS.hasMany('template-field')
});
