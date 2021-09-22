import ILink from '@/app/Domain/Interfaces/ILink';
import IModel from '@/app/Domain/Models/IModel';
import ILinkViewModel from '@/app/Presentation/Interfaces/ILinkViewModel';

export default interface ILinkDataModel extends IModel {
  fromViewModel(vModel: ILinkViewModel): this;
  fromEntity(entity: ILink): this;
}
