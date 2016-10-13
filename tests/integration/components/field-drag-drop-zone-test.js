import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('field-drag-drop-zone', 'Integration | Component | field drag drop zone', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{field-drag-drop-zone}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#field-drag-drop-zone}}
      template block text
    {{/field-drag-drop-zone}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
