import Vue from 'vue';
import Page from '@/Shared/Components/Page.vue';
import Component from 'vue-class-component';
import IGoalViewModel from '@/app/Presentation/Interfaces/IGoalViewModel';
import GoalPixelGenerateUseCase from '@/app/Domain/Use-Cases/GoalPixelGenerateUseCase';
import GoalModel from '@/app/Data/Models/GoalModel';
import Goal from '@/app/Domain/Entities/Goal';

@Component({
  components: {
    Page,
  },
})
export default class GoalViewModel extends Vue implements IGoalViewModel {
  public name = '';
  public revenueValue = '';
  public payoutValue = '';
  public pixelCode = '';

  private title = 'Cadastro de Meta';
  private inLoading = false;

  private mounted() {
    this.get();
  }

  private generatedPixel() {
    const goal = new Goal();

    goal.name = this.name;
    goal.revenueValue = Number(this.revenueValue);
    goal.payoutValue = Number(this.payoutValue);
    goal.pixelCode = this.pixelCode;

    this.pixelCode = GoalPixelGenerateUseCase.run(goal);
  }

  private async get() {
    const goalModel = await new GoalModel().find('1');

    this.name = goalModel.attributes['name'];
    this.revenueValue = goalModel.attributes['revenue_value'];
    this.payoutValue = goalModel.attributes['payout_value'];
    this.pixelCode = goalModel.attributes['pixelCode'];
  }

  private async save() {
    const goalModel = new GoalModel();

    goalModel.attributes['name'] = this.name;
    goalModel.attributes['revenue_value'] = Number(this.revenueValue);
    goalModel.attributes['payout_value'] = Number(this.payoutValue);
    goalModel.attributes['pixelCode'] = this.pixelCode;

    await goalModel.save();
  }
}
