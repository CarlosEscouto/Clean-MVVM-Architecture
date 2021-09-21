/**
 *
 *
 * @export
 * @interface IModel
 */
export default interface IModel {
  /**
   *
   *
   * @type {*}
   * @memberof IModel
   */
  attributes: Record<string, any>;

  /**
   *
   *
   * @param {string} id
   * @return {*}  {Promise<this>}
   * @memberof IModel
   */
  find(id: string): Promise<this>;

  /**
   *
   *
   * @return {*}  {Promise<any>}
   * @memberof IModel
   */
  save(): Promise<any>;
}
