import Campaign from '../Entities/Campaign';
import ICampaignService from '../Interfaces/Services/ICampaignService';
import IModel from '../Models/IModel';

/**
 *
 *
 * @export
 * @class CampaignService
 * @implements {ICampaignService}
 */
export default class CampaignService implements ICampaignService {
  constructor(public model: IModel) {}

  /**
   *
   *
   * @param {*} entity
   * @return {*}
   * @memberof CampaignService
   */
  public setStatusCampaign(entity: any): any {
    // some logics / rules
    return;
  }

  /**
   *
   *
   * @param {Campaign} campaign
   * @memberof CampaignService
   */
  public save(campaign: Campaign): void {
    this.model.attributes['name'] = campaign.name;
    this.model.attributes['advertiser_id'] = campaign.advertiserId;
    this.model.attributes['category_id'] = campaign.categoryId;
    this.model.attributes['product_id'] = campaign.productId;

    // business rule

    this.model.save();
  }
}
