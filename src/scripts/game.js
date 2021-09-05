function generatePokemon(flag) {
  let randomPokemon = allPokemons[Math.floor(Math.random() * allPokemons.length)];
  let monster = new Pokemon(randomPokemon[0], randomPokemon[1], randomPokemon[2], randomPokemon[3]);

  if (flag) {
    for (i = 0; i < 4; i++) {
      document.getElementById('attack' + i).value = monster.moves[i][0];
    }
  }
  return monster;

}

let player = generatePokemon(true);
animationPlayer = document.createElement('img');
animationPlayer.src = player.sprite;
document.getElementById('player').append(animationPlayer);
document.getElementById('hp-player').innerHTML = '<p>HP: ' + player.hp + '/' + player.fullhp + '</p>';


let opponent = generatePokemon(false);
animation = document.createElement('img');
animation.src = opponent.sprite;
document.getElementById('opponent').append(animation);
document.getElementById('hp-opponent').innerHTML = '<p>HP: ' + opponent.hp + '/' + opponent.fullhp + '</p>';

for (i = 0; i < 4; i++) {
  let btn = document.getElementById('attack' + i);
  let move = player.moves[i];
  function addHandler(btn, move, player, opponent) {
    btn.addEventListener('click', function (e) {
      attack(move, player, opponent, 'hp-opponent', '');
      setTimeout(attack, 500, opponent.moves[Math.floor(Math.random() * 3)], opponent, player, 'hp-player', 'Opponent ');
    });

  }
  addHandler(btn, move, player, opponent);
}

function hasWon(hp) {
  let fainted = (player.hp <= 0) ? player : (opponent.hp <= 0) ? opponent : false;

  if (fainted != false) {
    alert('Its over: ' + fainted.name + ' fainted!');
    document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
    setTimeout(function () {
      location.reload();
    }, 500);
  }

}