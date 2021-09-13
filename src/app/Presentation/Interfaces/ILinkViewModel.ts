import IViewModel from "./IViewModel";

export default interface ILinkViewModel extends IViewModel {
  name: string;
  url: string;

  save(): Promise<this>;
}
