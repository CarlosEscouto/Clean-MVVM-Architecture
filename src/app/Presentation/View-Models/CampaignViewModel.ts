import Vue from 'vue';
import Page from '@/Shared/Components/Page.vue';
import Component from 'vue-class-component';
import ICampaignViewModel from '@/app/Presentation/Interfaces/View-Models/ICampaignViewModel';
import CampaignService from '@/app/Domain/Services/CampaignService';
import Campaign from '@/app/Domain/Entities/Campaign';
import CampaignModel from '@/app/Data/Models/CampaignModel';
import CampaignConverter from '../Converter/CampaignConverter';
import CampaignRules from '../Rules/CampaignRules';
import ICampaignService from '@/app/Domain/Interfaces/Services/ICampaignService';

/**
 *
 *
 * @export
 * @class CampaignViewModel
 * @extends {Vue}
 * @implements {ICampaignViewModel}
 */
@Component({
  components: {
    Page,
  },
  data: CampaignRules,
})
export default class CampaignViewModel extends Vue implements ICampaignViewModel {
  public name = '';
  public productId = '';
  public categoryId = '';
  public advertiserId = '';

  // State
  private title = 'Cadastro de Campanhas';
  private inLoading = false;

  /**
   *
   * Instanciando direto... poderia ser tbm dentro do constructor (Mas não receberia injeção via constructor, só via setter, da mesma forma.)
   * @private
   * @type {ICampaignService}
   * @memberof CampaignViewModel
   */
  private _service: ICampaignService = new CampaignService(new CampaignModel());

  /**
   *
   *
   * @memberof CampaignViewModel
   */
  public set service(value: ICampaignService) {
    this.service = value;
  }

  /**
   * Creates an instance of CampaignViewModel.
   * @memberof CampaignViewModel
   */
  constructor() {
    super();
  }

  /**
   *
   *
   * @private
   * @memberof CampaignViewModel
   */
  private save() {
    this.inLoading = true;

    if (!this.validate()) {
      this.inLoading = false;
      console.log('Todos os campos devem ser preenchidos!');
    }

    this._service.save(new CampaignConverter(new Campaign()).fromCampaignViewModel(this));
  }

  /**
   *
   *
   * @private
   * @return {*}  {boolean}
   * @memberof CampaignViewModel
   */
  private validate(): boolean {
    return this.name !== null && this.productId !== null && this.categoryId !== null && this.advertiserId !== null;
  }
}
