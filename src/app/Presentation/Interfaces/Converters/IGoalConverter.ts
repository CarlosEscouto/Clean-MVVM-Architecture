import IGoal from '@/app/Domain/Interfaces/IGoal';
import IGoalViewModel from '../View-Models/IGoalViewModel';

/**
 *
 *
 * @export
 * @interface IGoalConverter
 */
export default interface IGoalConverter {
  /**
   *
   *
   * @param {IGoalViewModel} vModel
   * @return {*}  {IGoal}
   * @memberof IGoalConverter
   */
  fromGoalViewModel(vModel: IGoalViewModel): IGoal;
}
