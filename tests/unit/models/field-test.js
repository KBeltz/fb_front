import { moduleForModel, test } from 'ember-qunit';

moduleForModel('field', 'Unit | Model | field', {
  // Specify the other units that are required for this test.
  needs: ['model:submission', 'model:template-field']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
