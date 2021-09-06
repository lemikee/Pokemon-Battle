class Pokemon {
  constructor(name, sprite, hp, moves) {
    this.name = name;
    this.sprite = sprite;
    this.hp = hp;
    this.fullhp = hp;
    this.moves = moves;
  }

}

let allPokemons = [
  ['Venusaur', './images/venusaur.gif', 360, [
    ['Flamethrower', 'fire', 95, 0.95],
    ['Dragon Claw', 'dragon', 80, 0.95],
    ['Air slash', 'fly', 75, 0.85],
    ['Slash', 'normal', 70,]
  ]],
  ['Blastoise', './images/blastoise.gif', 362, [
    ['Surf', 'water', 90, 0.95],
    ['Crunch', 'normal', 80, 0.95],
    ['Ice punch', 'ice', 75, 0.95],
    ['Flash cannon', 'steel', 80, 0.95]
  ]],
  ['Glitch', './images/glitch.gif', 364, [
    ['Petal Blizzard', 'grass', 90, 0.95],
    ['Sludge bomb', 'poison', 90, 0.95],
    ['Earthquake', 'ground', 100, 0.95],
    ['Body Slam', 'normal', 85, 0.95]
  ]]
];

let typeWeakness = {
  'Charizard': [['ground'], ['water', 'rock'], ['fire', 'grass', 'steel']],
  'Blastoise': [[''], ['grass'], ['fire', 'water']],
  'Glitch': [['poison'], ['fire', 'fly', 'ice', 'steel'], ['grass', 'water']],
};