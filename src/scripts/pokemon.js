export default class Pokemon { // pokemon class
  constructor(name, sprite, hp, moves) {
    this.name = name;
    this.sprite = sprite;
    this.hp = hp; //will decrease as Pokemon is "attacked"
    this.fullhp = hp; //original max hp
    this.moves = moves;
  }
}


// modules.export = Pokemon;