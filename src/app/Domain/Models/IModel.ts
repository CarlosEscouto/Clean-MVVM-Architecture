export default interface IModel {
  attributes: any;
  find(id: string): Promise<this>;
  save(): Promise<void>;
}
