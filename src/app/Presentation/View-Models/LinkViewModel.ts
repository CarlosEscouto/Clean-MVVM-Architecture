import ILinkDataModel from "@/app/Data/Interfaces/ILinkDataModel";
import ILinkViewModel from "../Interfaces/ILinkViewModel";
import IViewModel from "../Interfaces/IViewModel";

export default class LinkViewModel implements ILinkViewModel, IViewModel {
  public name = '';
  public url = '';

  constructor(private model: ILinkDataModel) {}

  async save(): Promise<this> { 
    this.model.fromViewModel(this);

    const response = await this.model.save();

    return this.fromResponse(response);
  }

  fromResponse<T = any>(response: T): this {
    throw new Error("Method not implemented.");
  }
}
