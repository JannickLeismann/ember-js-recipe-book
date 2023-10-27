import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateRecipeController extends Controller {
  @service recipeData;
  @service router;

  title = '';
  description = '';
  ingredients = '';
  instructions = '';

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }

  @action
  updateDescription(event) {
    this.description = event.target.value;
  }

  @action
  updateIngredients(event) {
    this.ingredients = event.target.value;
  }

  @action
  updateInstructions(event) {
    this.instructions = event.target.value;
  }

  @action
  async createRecipe(event) {
    event.preventDefault();

    let newRecipe = {
      id: this.recipeData.generateGUID(),
      title: this.title,
      description: this.description,
      ingredients: this.ingredients
        .split(',')
        .map((ingredients) => ingredients.trim()),
      instructions: this.instructions,
    };

    this.recipeData.saveRecipe(newRecipe);

    this.router.transitionTo('recipes');
  }
}
