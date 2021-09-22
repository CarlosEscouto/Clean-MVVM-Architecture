/**
 *
 *
 * @export
 * @interface IViewModel
 */
export default interface IViewModel {
  /**
   *
   *
   * @param {*} response
   * @return {*}  {this}
   * @memberof IViewModel
   */
  fromResponse(response: any): this;
}
