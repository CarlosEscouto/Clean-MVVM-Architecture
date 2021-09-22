import IGoal from '@/app/Domain/Interfaces/IGoal';
import IGoalConverter from '../Interfaces/Converters/IGoalConverter';
import IGoalViewModel from '../Interfaces/View-Models/IGoalViewModel';

/**
 *
 *
 * @export
 * @class GoalConverter
 * @implements {IGoalConverter}
 */
export default class GoalConverter implements IGoalConverter {
  /**
   * Creates an instance of GoalConverter.
   * @param {IGoal} entity
   * @memberof GoalConverter
   */
  constructor(private entity: IGoal) {}

  /**
   *
   *
   * @param {IGoalViewModel} vModel
   * @return {*}  {IGoal}
   * @memberof GoalConverter
   */
  fromGoalViewModel(vModel: IGoalViewModel): IGoal {
    this.entity.name = vModel.name;
    this.entity.revenueValue = Number(vModel.revenueValue);
    this.entity.payoutValue = Number(vModel.payoutValue);
    this.entity.pixelCode = vModel.pixelCode;

    return this.entity;
  }
}
