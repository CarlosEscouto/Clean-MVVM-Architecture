import ICampaign from '@/app/Domain/Interfaces/ICampaign';
import ICampaignViewModel from '../Interfaces/ICampaignViewModel';

export default class CampaignTransform {
  constructor(private entity: ICampaign) {}

  fromCampaignViewModel(campaignViewModel: ICampaignViewModel): ICampaign {
    this.entity.name = campaignViewModel.name;
    this.entity.productId = campaignViewModel.productId;
    this.entity.categoryId = campaignViewModel.categoryId;
    this.entity.advertiserId = campaignViewModel.advertiserId;

    return this.entity;
  }
}
