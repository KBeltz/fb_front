import Ember from 'ember';

export default Ember.Component.extend({

  orderNumber: 0,

  store: Ember.inject.service('store'),

  actions: {
    createTemplate(data) {
      var template = this.get('model');
      var name = data.get('templateName');
      template.set('templateName', name);

      // var promise = new Promise(function(resolve, reject) {
      //   // on success
      //   resolve(value);
      //
      //   // on failure
      //   reject(reason);
      // });
      //
      // promise.then(function(value) {
      //   // on fulfillment
      // }, function(reason) {
      //   // on rejection
      // });


      // var user = this.get('store').find('user', 27).then(function(userData) {
      //   template.set('user', userData);
      //   template.save();
      //
      // });
      var now = new Date();

      var user = this.get('store').createRecord('user', {
        firstName: 'John',
        lastName: 'Johnson',
        middleName: 'Joe',
        gender: 'MALE',
        addressLineOne: '123 JJJ Place',
        addressLineTwo: '',
        unitNumber: '',
        state: 'NE',
        city: 'Omaha',
        zipCode: '68104',
        birthdate: now,
        personalPhone: '4025555555',
        ssn: '123456789',
      });
      var form = this.get('store').findRecord('form', 1);
      user.
      user.save();

      // console.log("user: " + user);
      // EmberInspector.inspect(user);
    },

    addFieldToTemplate(fieldId) {
      this.set('orderNumber', this.get('orderNumber') +1);
      var template = this.get('model');
      var field = this.get('store').peekRecord('field', fieldId);
      return this.get('store').createRecord('template-field', {
        template: template,
        field: field,
        orderNum: this.get('orderNumber')
      });

    },
  }
});
