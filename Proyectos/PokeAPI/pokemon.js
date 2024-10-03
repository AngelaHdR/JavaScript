class Pokemon {
  name = "";
  url = "";
  id = 0;
  types = "";
  image = "";
  hp = 0;
  attack = 0;
  defense = 0;
  abilities = "";

  constructor(name, url, id, types, image, hp, attack, defense, abilities) {
    (this.name = name),
      (this.url = url),
      (this.id = id),
      (this.types = types),
      (this.image = image),
      (this.hp = hp),
      (this.attack = attack),
      (this.defense = defense);
      (this.abilities = abilities)
  }
}
