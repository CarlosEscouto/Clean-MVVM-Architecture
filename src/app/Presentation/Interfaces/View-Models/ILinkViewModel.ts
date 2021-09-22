import IViewModel from './IViewModel';

/**
 *
 *
 * @export
 * @interface ILinkViewModel
 * @extends {IViewModel}
 */
export default interface ILinkViewModel extends IViewModel {
  /**
   *
   *
   * @type {string}
   * @memberof ILinkViewModel
   */
  name: string;

  /**
   *
   *
   * @type {string}
   * @memberof ILinkViewModel
   */
  url: string;

  /**
   *
   *
   * @return {*}  {Promise<this>}
   * @memberof ILinkViewModel
   */
  save(): Promise<this>;
}
