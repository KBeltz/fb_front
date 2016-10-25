import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-fieldname-parser', 'Integration | Component | user fieldname parser', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-fieldname-parser}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#user-fieldname-parser}}
      template block text
    {{/user-fieldname-parser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
