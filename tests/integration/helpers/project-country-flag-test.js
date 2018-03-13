import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | project-country-flag', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', 'fr');

    await render(hbs`{{project-country-flag inputValue}}`);

    assert.equal(this.element.textContent.trim(), "/assets/images/flags/icon-flag-fr.svg");
  });
});
