export default class Hero {
  constructor(id?: number, name?: string, urlImage?: string, description?: string) {
    this.id = id;
    this.name = name;
    this.urlImage = urlImage;
    this.description = description;
  }

  public id: number | undefined;
  public name: string | undefined;
  public urlImage: string | undefined;
  public description: string | undefined;
}