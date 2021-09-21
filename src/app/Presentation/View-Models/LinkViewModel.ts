import ILinkDataModel from '@/app/Data/Interfaces/ILinkDataModel';
import ILinkViewModel from '../Interfaces/ILinkViewModel';
import IViewModel from '../Interfaces/IViewModel';

/**
 * Implementação separando a ViewModel da ViewController (Teste)
 *
 * @export
 * @class LinkViewModel
 * @implements {ILinkViewModel}
 * @implements {IViewModel}
 */
export default class LinkViewModel implements ILinkViewModel, IViewModel {
  public name = '';
  public url = '';

  /**
   * Creates an instance of LinkViewModel.
   * @param {ILinkDataModel} model
   * @memberof LinkViewModel
   */
  constructor(private model: ILinkDataModel) {}

  /**
   *
   *
   * @return {*}  {Promise<this>}
   * @memberof LinkViewModel
   */
  async save(): Promise<this> {
    this.model.fromViewModel(this);

    const response = await this.model.save();

    return this.fromResponse(response);
  }

  /**
   *
   *
   * @param {Record<string, string>} response
   * @return {*}  {this}
   * @memberof LinkViewModel
   */
  fromResponse(response: Record<string, string>): this {
    this.name = response.name;
    this.url = response.url;

    return this;
  }
}
