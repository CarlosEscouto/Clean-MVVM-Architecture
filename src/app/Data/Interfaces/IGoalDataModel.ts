import IGoal from '@/app/Domain/Interfaces/IGoal';
import IModel from '@/app/Domain/Models/IModel';
import IGoalViewModel from '@/app/Presentation/Interfaces/IGoalViewModel';

export default interface IGoalDataModel extends IModel {
  fromViewModel(vModel: IGoalViewModel): this;
  fromEntity(goal: IGoal): this;
}
