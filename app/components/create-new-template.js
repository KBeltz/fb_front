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

      var _this = this;

      var user = this.get('store').find('user', 27).then(function(userData) {
        setTimeout(function() {
          EmberInspector.inspect(userData);
          template.set('insertBy', userData);
          // template.set('createdBy', userData);
          // template.set('user', userData);
          template.save().then(function(templateData) {
            _this.get('store').findAll('field').then(function(fieldsData) {
              var allTemplateFields = Ember.A([]);
              fieldsData.forEach(function(field, index) {
                var templateField = _this.get('store').createRecord('templateField', {
                  indexNumber: index,
                  field: field,
                  template: template
                });
                allTemplateFields.push(templateField);
              });
              template.set('templateFields', allTemplateFields);
              template.save();
            });
          });
        }, 1500);

      });
      var now = new Date();




      // var user = this.get('store').createRecord('user', {
      //   firstName: 'John',
      //   lastName: 'Johnson',
      //   middleName: 'Joe',
      //   gender: 'MALE',
      //   addressLineOne: '123 JJJ Place',
      //   addressLineTwo: '',
      //   unitNumber: '',
      //   state: 'NE',
      //   city: 'Omaha',
      //   zipCode: '68104',
      //   birthdate: now,
      //   personalPhone: '4025555555',
      //   ssn: '123456789',
      // });
      // user.save();

      // this.get('store').findRecord('form', 1).then(function(form) {
      //
      //   user.get('forms').pushObject(form);
      //   setTimeout(function() {
      //
      //     user.save();
      //   }, 3000);
      //
      // });
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
