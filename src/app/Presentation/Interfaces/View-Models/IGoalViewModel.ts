import IViewModel from './IViewModel';

/**
 *
 *
 * @export
 * @interface IGoalViewModel
 */
export default interface IGoalViewModel extends IViewModel {
  /**
   *
   *
   * @type {string}
   * @memberof IGoalViewModel
   */
  name: string;

  /**
   *
   *
   * @type {string}
   * @memberof IGoalViewModel
   */
  revenueValue: string;

  /**
   *
   *
   * @type {string}
   * @memberof IGoalViewModel
   */
  payoutValue: string;

  /**
   *
   *
   * @type {string}
   * @memberof IGoalViewModel
   */
  pixelCode: string;
}
