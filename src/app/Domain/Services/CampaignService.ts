import Campaign from '../Entities/Campaign';
import IModel from '../Models/IModel';

export default class CampaignService {
  constructor(public model: IModel) {}

  public save(campaign: Campaign): void {
    this.model.attributes['name'] = campaign.name;
    this.model.attributes['advertiser_id'] = campaign.advertiserId;
    this.model.attributes['category_id'] = campaign.categoryId;
    this.model.attributes['product_id'] = campaign.productId;

    this.model.save();
  }
}
