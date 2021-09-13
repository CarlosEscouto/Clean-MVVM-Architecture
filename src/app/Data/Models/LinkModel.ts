import ILink from "@/app/Domain/Interfaces/ILink";
import IModel from "@/app/Domain/Models/IModel";
import ILinkViewModel from "@/app/Presentation/Interfaces/ILinkViewModel";
import ILinkDataModel from "../Interfaces/ILinkDataModel";

/**
 * 
 */
export default class LinkModel implements IModel, ILinkDataModel {
  attributes: any;
  async find(id: string): Promise<this> {
    console.log('find link...');
    return this;
  }
  async save(): Promise<void> {
    console.log('save link...')
  }

  fromViewModel(vModel: ILinkViewModel): this {
    this.attributes['name'] = vModel.name;

    return this;
  }

  fromEntity(entity: ILink): this {
    this.attributes['name'] = entity.name;

    return this;
  }
}