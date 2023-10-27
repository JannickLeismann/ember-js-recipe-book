import { module, test } from 'qunit';
import { setupRenderingTest } from 'recipe-book/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recipe-short-overview', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RecipeShortOverview />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RecipeShortOverview>
        template block text
      </RecipeShortOverview>
    `);

    assert.dom().hasText('template block text');
  });
});
