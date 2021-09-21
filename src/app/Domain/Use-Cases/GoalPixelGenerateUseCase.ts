import IGoal from '../Interfaces/IGoal';
import UseCase from './UseCase';

/**
 *
 *
 * @export
 * @class GoalPixelGenerateUseCase
 * @extends {UseCase}
 */
export default class GoalPixelGenerateUseCase extends UseCase {
  /**
   *
   *
   * @param {IGoal} params
   * @return {*}  {string}
   * @memberof GoalPixelGenerateUseCase
   */
  run(params: IGoal): string {
    console.log('pixel generated!');
    return `https://dominio.com?payout_value=${params.payoutValue}&revenue_value=${params.revenueValue}`;
  }
}
