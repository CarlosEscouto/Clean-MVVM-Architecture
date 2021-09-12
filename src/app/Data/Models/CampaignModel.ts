export default class CampaignModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public attributes: any = {};

  async find(id: string): Promise<this> {
    if (!id) return this;

    this.attributes['name'] = 'lead';
    this.attributes['advertiser_id'] = '100';
    this.attributes['product_id'] = '200';
    this.attributes['category_id'] = '200';

    return this;
  }

  async save(): Promise<void> {
    console.log('salvando no banco...', this);
  }
}
