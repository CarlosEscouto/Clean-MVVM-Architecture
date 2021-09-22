import UseCase from './UseCase';

/**
 *
 *
 * @export
 * @class URLGroupValidationRule
 * @extends {UseCase}
 */
export default class URLGroupValidationRule extends UseCase {
  /**
   *
   *
   * @param {string} value
   * @return {*}  {boolean}
   * @memberof URLRule
   */
  run(value: string): boolean {
    return /(\.[a-z]{3})/.test(value);
  }
}
