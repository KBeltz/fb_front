import Ember from 'ember';

const UserFieldnameParserComponent = Ember.Component.extend({
// export default Ember.Component.extend({
//   finalFieldNameValue: null,
//
  user: Ember.computed('params.[]', function() {

    var user = this.get('params')[0];
    console.log("User in computed param: " + user);
    return user;
  }),

  // model(params) {
  //   this.get('store').find('user', params[0].id);
  //   // this.get('store').find('user', 27);
  // },
//
  field: Ember.computed('params.[]', function(){
    return this.get('params')[1];
  }),
//   // didInsertElement() {
//   //   this._super(...arguments);
//   //   var field = this.get('field');
//   //   var user = this.get('model');
//   //   switch(field) {
//   //     case 'First Name':
//   //       this.set('finalFieldNameValue', user.firstName);
//   //       break;
//   //
//   // }
  didUpdateAttrs() {
    this._super(...arguments);
    var field = this.get('field');
    var user = this.get('user');
    console.log(user);
    switch(field) {
      case 'First Name':
        this.set('finalFieldNameValue', user);
        break;
      case 'Middle Name':
        this.set('finalFieldNameValue', 'Hrhe');
        break;
      case 'Last Name':
        this.set('finalFieldNameValue', 'NLsdrjh');
        break;
      case 'Gender':
        this.set('finalFieldNameValue', 'Fbjenf');
        break;
      case 'Last 4 Of SSN':
        this.set('finalFieldNameValue', '9999');
        break;
      case 'Address Line One':
        this.set('finalFieldNameValue', user);
        break;
      case 'Address Line Two':
        this.set('finalFieldNameValue', 'jkfkjsdnf');
        break;
      case 'Zip Code':
        this.set('finalFieldNameValue', '93923');
        break;
      case 'City':
        this.set('finalFieldNameValue', 'CHuenrn');
        break;
      case 'State':
        this.set('finalFieldNameValue', 'JJ');
        break;
    }

  }
});
//
UserFieldnameParserComponent.reopenClass({
  positionalParams: 'params'
});


// });
export default UserFieldnameParserComponent;
