import ICampaign from '../Interfaces/ICampaign';

export default class Campaign implements ICampaign {
  name!: string;
  productId!: string;
  categoryId!: string;
  advertiserId!: string;
}
