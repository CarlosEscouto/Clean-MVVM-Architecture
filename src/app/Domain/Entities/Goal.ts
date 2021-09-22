import IGoal from '../Interfaces/Entities/IGoal';

/**
 *
 *
 * @export
 * @class Goal
 * @implements {IGoal}
 */
export default class Goal implements IGoal {
  /**
   *
   *
   * @type {string}
   * @memberof Goal
   */
  name!: string;

  /**
   *
   *
   * @type {number}
   * @memberof Goal
   */
  revenueValue!: number;

  /**
   *
   *
   * @type {number}
   * @memberof Goal
   */
  payoutValue!: number;

  /**
   *
   *
   * @type {string}
   * @memberof Goal
   */
  pixelCode!: string;

  /**
   *
   *
   * @return {*}  {boolean}
   * @memberof Goal
   */
  isAcompanhamento(): boolean {
    return true;
  }
}
