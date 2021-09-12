import Vue from 'vue';
import Page from '@/Shared/Components/Page.vue';
import Component from 'vue-class-component';
import ICampaignViewModel from '@/app/Presentation/Interfaces/ICampaignViewModel';
import CampaignService from '@/app/Domain/Services/CampaignService';
import Campaign from '@/app/Domain/Entities/Campaign';
import CampaignModel from '@/app/Data/Models/CampaignModel';
import CampaignTransform from '../ApplicationTransforms/CampaignTransform';

@Component({
  components: {
    Page,
  },
})
export default class CampaignViewModel extends Vue implements ICampaignViewModel {
  public name = '';
  public productId = '';
  public categoryId = '';
  public advertiserId = '';

  private title = 'Cadastro de Campanhas';
  private inLoading = false;

  private save() {
    if (!this.validate()) {
      console.log('Todos os campos devem ser preenchidos');
    }

    new CampaignService(new CampaignModel()).save(new CampaignTransform(new Campaign()).fromCampaignViewModel(this));
  }

  private validate() {
    return this.name && this.productId && this.categoryId && this.advertiserId;
  }
}
