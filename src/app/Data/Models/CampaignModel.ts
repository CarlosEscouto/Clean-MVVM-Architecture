import IModel from '@/app/Domain/Models/IModel';

/**
 *
 *
 * @export
 * @class CampaignModel
 * @implements {IModel}
 */
export default class CampaignModel implements IModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public attributes: any = {};

  /**
   *
   *
   * @param {string} id
   * @return {*}  {Promise<this>}
   * @memberof CampaignModel
   */
  async find(id: string): Promise<this> {
    if (!id) return this;

    this.attributes['name'] = 'lead';
    this.attributes['advertiser_id'] = '100';
    this.attributes['product_id'] = '200';
    this.attributes['category_id'] = '200';

    return this;
  }

  /**
   *
   *
   * @return {*}  {Promise<this>}
   * @memberof CampaignModel
   */
  async save(): Promise<this> {
    console.log('salvando no banco...', this);
    return this;
  }
}
