import DS from 'ember-data';

export default DS.Model.extend({
  submissionText: DS.attr('string'),
  updateBy: DS.attr('number'),
  insertBy: DS.attr('number'),
  updateTime: DS.attr('date'),
  insertTime: DS.attr('date'),
  form: DS.belongsTo('form'),
  field: DS.belongsTo('field')
});
