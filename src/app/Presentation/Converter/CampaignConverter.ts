import ICampaign from '@/app/Domain/Interfaces/Entities/ICampaign';
import ICampaignViewModel from '../Interfaces/View-Models/ICampaignViewModel';

export default class CampaignConverter {
  constructor(private entity: ICampaign) {}

  fromCampaignViewModel(campaignViewModel: ICampaignViewModel): ICampaign {
    this.entity.name = campaignViewModel.name;
    this.entity.productId = campaignViewModel.productId;
    this.entity.categoryId = campaignViewModel.categoryId;
    this.entity.advertiserId = campaignViewModel.advertiserId;

    return this.entity;
  }
}
