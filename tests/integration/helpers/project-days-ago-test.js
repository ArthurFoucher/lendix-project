import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | project-days-ago', function(hooks) {
  setupRenderingTest(hooks);

  test('it return singular', async function(assert) {
    let d = new Date();
    d.setDate(d.getDate() - 1);

    this.set('inputValue', d);

    await render(hbs`{{project-days-ago inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1 day ago');
  });

  test('it return plural', async function(assert) {
    let d = new Date();
    d.setDate(d.getDate() - 3);

    this.set('inputValue', d);

    await render(hbs`{{project-days-ago inputValue}}`);

    assert.equal(this.element.textContent.trim(), '3 days ago');
  });
});
