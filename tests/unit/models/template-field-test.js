import { moduleForModel, test } from 'ember-qunit';

moduleForModel('template-field', 'Unit | Model | template field', {
  // Specify the other units that are required for this test.
  needs: ['model:template', 'model:field']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
