import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  gender: DS.attr('string'),
  addressLineOne: DS.attr('string'),
  addressLineTwo: DS.attr('string'),
  unitNumber: DS.attr('string'),
  state: DS.attr('string'),
  city: DS.attr('string'),
  zipCode: DS.attr('string'),
  birthdate: DS.attr('date'),
  personalPhone: DS.attr('string'),
  ssn: DS.attr('string'),
  // updateBy: DS.attr('number'),
  // insertBy: DS.attr('number'),
  // updateTime: DS.attr('date'),
  // insertTime: DS.attr('date'),
  templates: DS.hasMany('template'),
  forms: DS.hasMany('form')
});
