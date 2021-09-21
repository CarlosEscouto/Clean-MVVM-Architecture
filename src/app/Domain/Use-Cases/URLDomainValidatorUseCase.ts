import UseCase from './UseCase';

/**
 *
 *
 * @export
 * @class URLDomainValidatorRule
 * @extends {UseCase}
 */
export default class URLDomainValidatorRule extends UseCase {
  /**
   *
   *
   * @param {string} value
   * @return {*}  {boolean}
   * @memberof URLRule
   */
  run(value: string): boolean {
    return /(\w[\w-]{0,61}\w)/.test(value);
  }
}
