import { module, test } from 'qunit';
import { setupTest } from 'recipe-book/tests/helpers';

module('Unit | Route | recipes/details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:recipes/details');
    assert.ok(route);
  });
});
