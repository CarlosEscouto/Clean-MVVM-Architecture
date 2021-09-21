import ILink from '@/app/Domain/Interfaces/Entities/ILink';
import IModel from '@/app/Domain/Models/IModel';
import ILinkViewModel from '@/app/Presentation/Interfaces/View-Models/ILinkViewModel';
import ILinkDataModel from '../Interfaces/ILinkDataModel';

/**
 *
 *
 * @export
 * @class LinkModel
 * @implements {IModel}
 * @implements {ILinkDataModel}
 */
export default class LinkModel implements IModel, ILinkDataModel {
  attributes: any;

  /**
   *
   *
   * @param {string} id
   * @return {*}  {Promise<this>}
   * @memberof LinkModel
   */
  async find(id: string): Promise<this> {
    console.log('find link...');
    return this;
  }

  /**
   *
   *
   * @return {*}  {Promise<this>}
   * @memberof LinkModel
   */
  async save(): Promise<this> {
    console.log('save link...');
    return this;
  }

  /**
   *
   *
   * @param {ILinkViewModel} vModel
   * @return {*}  {this}
   * @memberof LinkModel
   */
  fromViewModel(vModel: ILinkViewModel): this {
    this.attributes['name'] = vModel.name;

    return this;
  }

  /**
   *
   *
   * @param {ILink} entity
   * @return {*}  {this}
   * @memberof LinkModel
   */
  fromEntity(entity: ILink): this {
    this.attributes['name'] = entity.name;

    return this;
  }
}
