import IService from './IService';

/**
 *
 *
 * @export
 * @interface ICampaignService
 * @extends {IService}
 */
export default interface ICampaignService extends IService {
  /**
   *
   *
   * @param {*} entity
   * @return {*}  {*}
   * @memberof ICampaignService
   */
  setStatusCampaign(entity: any): any;
}
