import UseCase from './UseCase';

/**
 *
 *
 * @export
 * @class URLProtocolValidatorUseCase
 * @extends {UseCase}
 */
export default class URLProtocolValidatorUseCase extends UseCase {
  /**
   *
   *
   * @param {string} value
   * @return {*}  {boolean}
   * @memberof URLRule
   */
  run(value: string): boolean {
    return /(?:http(s)?:\/\/)(?!\d+.)/.test(value);
  }
}
