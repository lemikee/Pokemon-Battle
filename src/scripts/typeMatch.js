let typeMatch = { // first element is immunity, second is weakness, third is resistance
  'Glitch': [['ground'], ['water', 'rock'], ['fire', 'grass', 'steel']],
  'Blastoise': [[''], ['grass'], ['fire', 'water']],
  'Venusaur': [['poison'], ['fire', 'fly', 'ice', 'steel'], ['grass', 'water']],
  'Charmander': [['ground'], ['water', 'rock'], ['fire', 'grass', 'steel']],
  'Squirtle': [[''], ['grass'], ['fire', 'water']],
  'Bulbasaur': [['poison'], ['fire', 'fly', 'ice', 'steel'], ['grass', 'water']]
};

module.exports = typeMatch;