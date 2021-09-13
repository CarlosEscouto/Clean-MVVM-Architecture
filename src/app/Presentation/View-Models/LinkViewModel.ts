import IDataModel from "@/app/Data/Interfaces/ILinkDataModel";
import ILinkViewModel from "../Interfaces/ILinkViewModel";

export default class LinkViewModel implements ILinkViewModel {
  public name = '';
  public url = '';

  constructor(private model: IDataModel) {}

  async save(vModel: ILinkViewModel): Promise<this> { 
    this.model.hydrate(vModel);

    this.model.save(vModel);
  }
}
