import ICampaign from '../Interfaces/Entities/ICampaign';

/**
 *
 *
 * @export
 * @class Campaign
 * @implements {ICampaign}
 */
export default class Campaign implements ICampaign {
  /**
   *
   *
   * @type {string}
   * @memberof Campaign
   */
  name!: string;

  /**
   *
   *
   * @type {string}
   * @memberof Campaign
   */
  productId!: string;

  /**
   *
   *
   * @type {string}
   * @memberof Campaign
   */
  categoryId!: string;

  /**
   *
   *
   * @type {string}
   * @memberof Campaign
   */
  advertiserId!: string;
}
