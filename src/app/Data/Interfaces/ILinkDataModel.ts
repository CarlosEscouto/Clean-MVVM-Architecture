import ICampaignViewModel from "@/app/Presentation/Interfaces/ICampaignViewModel";
import ILinkViewModel from "@/app/Presentation/Interfaces/ILinkViewModel";

export default interface ILinkDataModel {
  hydrate(vModel: ILinkViewModel): this;
}
