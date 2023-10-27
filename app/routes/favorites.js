import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class FavoritesRoute extends Route {

    @service recipeData;
    @service store;

    async model(){
        await this.recipeData.loadRecipes();
        let favoriteIds = this.recipeData.getFavorites();
        return favoriteIds.map(id => this.store.peekRecord('recipe', id))
    }

}
