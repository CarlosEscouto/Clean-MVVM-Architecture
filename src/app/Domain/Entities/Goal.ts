import IGoal from '../Interfaces/IGoal';

export default class Goal implements IGoal {
  name!: string;
  revenueValue!: number;
  payoutValue!: number;
  pixelCode!: string;
}
