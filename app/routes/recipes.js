import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesRoute extends Route {
  @service store;
  @service recipeData;

  async model() {
    await this.recipeData.loadRecipes();
    return this.store.peekAll('recipe');
  }
}
