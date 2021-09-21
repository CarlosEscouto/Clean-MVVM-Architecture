import Vue from 'vue';
import Page from '@/Shared/Components/Page.vue';
import Component from 'vue-class-component';
import GoalPixelGenerateUseCase from '@/app/Domain/Use-Cases/GoalPixelGenerateUseCase';
import GoalModel from '@/app/Data/Models/GoalModel';
import Goal from '@/app/Domain/Entities/Goal';
import GoalConverter from '../Converter/GoalConverter';
import UseCase from '@/app/Domain/Use-Cases/UseCase';
import IGoalConverter from '../Interfaces/Converters/IGoalConverter';
import IGoal from '@/app/Domain/Interfaces/IGoal';
import IGoalDataModel from '@/app/Data/Interfaces/IGoalDataModel';
import IGoalViewModel from '../Interfaces/View-Models/IGoalViewModel';

/**
 *
 *
 * @export
 * @class GoalViewModel
 * @extends {Vue}
 * @implements {IGoalViewModel}
 */
@Component({
  components: {
    Page,
  },
})
export default class GoalViewModel extends Vue implements IGoalViewModel {
  // Presenter
  public name = '';
  public revenueValue = '';
  public payoutValue = '';
  public pixelCode = '';

  // States
  private title = 'Cadastro de Meta';
  private inLoading = false;

  /**
   *
   *
   * @private
   * @type {UseCase}
   * @memberof GoalViewModel
   */
  private _goalPixelGenerateUseCase: UseCase;

  /**
   *
   *
   * @private
   * @type {IGoalConverter}
   * @memberof GoalViewModel
   */
  private _converter: IGoalConverter;

  /**
   *
   *
   * @private
   * @type {IGoal}
   * @memberof GoalViewModel
   */
  private _entity: IGoal;

  /**
   *
   *
   * @private
   * @type {IGoalDataModel}
   * @memberof GoalViewModel
   */
  private _model: IGoalDataModel;

  /**
   *
   *
   * @memberof GoalViewModel
   */
  public set goalPixelGenerateUseCase(value: UseCase) {
    this._goalPixelGenerateUseCase = value;
  }

  /**
   *
   *
   * @memberof GoalViewModel
   */
  public set converter(value: IGoalConverter) {
    this._converter = value;
  }

  /**
   *
   *
   * @memberof GoalViewModel
   */
  public set entity(value: IGoal) {
    this._entity = value;
  }

  /**
   *
   *
   * @memberof GoalViewModel
   */
  public set model(value: IGoalDataModel) {
    this._model = value;
  }

  /**
   * Creates an instance of GoalViewModel.
   * @memberof GoalViewModel
   */
  constructor() {
    super();

    this._entity = new Goal();
    this._model = new GoalModel();
    this._converter = new GoalConverter(this._entity);
    this._goalPixelGenerateUseCase = new GoalPixelGenerateUseCase();
  }

  /**
   *
   *
   * @private
   * @memberof GoalViewModel
   */
  private mounted() {
    this.get();
  }

  /**
   *
   *
   * @private
   * @memberof GoalViewModel
   */
  private generatedPixel() {
    const goal = this._converter.fromGoalViewModel(this);

    this.pixelCode = this._goalPixelGenerateUseCase.run(goal);
  }

  /**
   *
   *
   * @private
   * @memberof GoalViewModel
   */
  private async get() {
    this.fromResponse(await this._model.find('1'));
  }

  /**
   *
   *
   * @private
   * @memberof GoalViewModel
   */
  private async save() {
    await this._model.fromViewModel(this).save();
  }

  /**
   *
   *
   * @param {IGoalDataModel} goalModel
   * @return {*}  {this}
   * @memberof GoalViewModel
   */
  public fromResponse(goalModel: IGoalDataModel): this {
    this.name = goalModel.attributes['name'];
    this.revenueValue = goalModel.attributes['revenue_value'];
    this.payoutValue = goalModel.attributes['payout_value'];
    this.pixelCode = goalModel.attributes['pixelCode'];

    return this;
  }
}
