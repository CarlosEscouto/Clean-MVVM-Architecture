export default class GoalModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public attributes: any = {};

  async find(id: string): Promise<this> {
    if (!id) return this;

    this.attributes['name'] = 'lead';
    this.attributes['payout_value'] = 100;
    this.attributes['revenue_value'] = 200;

    return this;
  }

  async save(): Promise<void> {
    console.log('salvando no banco...', this);
  }
}
