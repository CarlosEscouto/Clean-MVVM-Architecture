import IGoal from '@/app/Domain/Interfaces/Entities/IGoal';
import IModel from '@/app/Domain/Models/IModel';
import IGoalViewModel from '@/app/Presentation/Interfaces/View-Models/IGoalViewModel';
import IGoalDataModel from '../Interfaces/IGoalDataModel';

/**
 *
 *
 * @export
 * @class GoalModel
 * @implements {IModel}
 * @implements {IGoalDataModel}
 */
export default class GoalModel implements IModel, IGoalDataModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public attributes: any = {};

  /**
   *
   *
   * @param {string} id
   * @return {*}  {Promise<this>}
   * @memberof GoalModel
   */
  async find(id: string): Promise<this> {
    if (!id) return this;

    this.attributes['name'] = 'lead';
    this.attributes['payout_value'] = 100;
    this.attributes['revenue_value'] = 200;

    return this;
  }

  /**
   *
   *
   * @return {*}  {Promise<this>}
   * @memberof GoalModel
   */
  async save(): Promise<this> {
    console.log('salvando no banco...', this);
    return this;
  }

  /**
   *
   *
   * @param {IGoalViewModel} vModel
   * @return {*}  {this}
   * @memberof GoalModel
   */
  fromViewModel(vModel: IGoalViewModel): this {
    this.attributes['name'] = vModel.name;
    this.attributes['revenue_value'] = Number(vModel.revenueValue);
    this.attributes['payout_value'] = Number(vModel.payoutValue);
    this.attributes['pixelCode'] = vModel.pixelCode;

    return this;
  }

  /**
   *
   *
   * @param {IGoal} entity
   * @return {*}  {this}
   * @memberof GoalModel
   */
  fromEntity(entity: IGoal): this {
    this.attributes['name'] = entity.name;
    this.attributes['revenue_value'] = Number(entity.revenueValue);
    this.attributes['payout_value'] = Number(entity.payoutValue);
    this.attributes['pixelCode'] = entity.pixelCode;

    return this;
  }
}
