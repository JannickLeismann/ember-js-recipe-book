import Model, { attr } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') ingredients;
  @attr('string') instructions;
}
