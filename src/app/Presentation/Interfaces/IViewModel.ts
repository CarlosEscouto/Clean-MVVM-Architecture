export default interface IViewModel {
  fromResponse<T = any>(response: T): this;
}