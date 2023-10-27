import EmberRouter from '@ember/routing/router';
import config from 'recipe-book/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('recipes', { path: '/' });
  this.route('recipes/details', { path: '/:recipe_id' });
  this.route('create-recipe');
  this.route('favorites');
});
