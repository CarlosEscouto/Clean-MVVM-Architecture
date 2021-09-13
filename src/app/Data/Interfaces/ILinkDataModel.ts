import IModel from "@/app/Domain/Models/IModel";
import ICampaignViewModel from "@/app/Presentation/Interfaces/ICampaignViewModel";
import ILinkViewModel from "@/app/Presentation/Interfaces/ILinkViewModel";

export default interface ILinkDataModel extends IModel {
  fromViewModel(vModel: ILinkViewModel): this;
  fromEntity(vModel: ILinkViewModel): this;
}
