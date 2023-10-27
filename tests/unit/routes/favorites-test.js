import { module, test } from 'qunit';
import { setupTest } from 'recipe-book/tests/helpers';

module('Unit | Route | favorites', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:favorites');
    assert.ok(route);
  });
});
