import { moduleForModel, test } from 'ember-qunit';

moduleForModel('template', 'Unit | Model | template', {
  // Specify the other units that are required for this test.
  needs: ['model:form', 'model:template-field', 'model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});