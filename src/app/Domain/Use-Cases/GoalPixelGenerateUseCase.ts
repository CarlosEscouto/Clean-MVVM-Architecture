import Goal from '../Entities/Goal';

export default class GoalPixelGenerateUseCase {
  static run(params: Goal): string {
    console.log('pixel generated');
    return `https://dominio.com?payout_value=${params.payoutValue}&revenue_value=${params.revenueValue}`;
  }
}
