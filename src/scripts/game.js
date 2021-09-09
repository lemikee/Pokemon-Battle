import Pokemon from './pokemon';
import opponentList from './pokemonList';
import playerPokemon from './playerPokemonList';
import typeMatch from './typeMatch';

export default class Game {
  constructor() {

    this.playerMonster = null;
    this.opponentMonster = null;
  }

  start() {
    let that = this;
    let playerLevel = Math.floor(Math.random() * (58) + 12); // just generates random level for asthetics, doesn't correspond to difficult change yet
    this.playerMonster = this.generate(true); // true means our/player pokemon
    let playerAvatar = document.createElement('img'); //creates img element
    playerAvatar.src = this.playerMonster.sprite; //sets source of img element above we created to pokemon's sprite/gif
    document.getElementById('player-mon').appendChild(playerAvatar); //appends the image to playerMonster, element in our table
    document.getElementById('player-health').innerHTML = '<p>' + this.playerMonster.hp + '  ' + this.playerMonster.fullhp + '</p>'; // appends hp to our player-health element in our table
    document.getElementById('player-name').innerHTML = this.playerMonster.name;
    document.getElementById('player-level').innerHTML = playerLevel;

    let healthPlayer = document.getElementById("health1");
    healthPlayer.value = this.playerMonster.hp;

    this.opponentMonster = this.generate(false); //creates opponent pokemon, false indicates opponent pokemon
    let opponentLevel = Math.floor(Math.random() * (58) + 12); // just generates random level, doesn't correspond to difficult change yet
    let opponentAvatar = document.createElement('img');
    opponentAvatar.src = this.opponentMonster.sprite;
    document.getElementById('opponent-mon').appendChild(opponentAvatar);
    document.getElementById('opponent-health').innerHTML = '<p>' + this.opponentMonster.hp + ' ' + this.opponentMonster.fullhp + '</p>';
    document.getElementById('opponent-name').innerHTML = this.opponentMonster.name;
    document.getElementById('opponent-level').innerHTML = opponentLevel;
    let healthOpponent = document.getElementById("health2");
    healthOpponent.value = this.opponentMonster.hp;

    for (let i = 0; i < 4; i++) { // now we add event listener so buttons work
      let btn = document.getElementById('m' + i); // gets a button element
      let item = document.getElementById('item'); // gets a button element
      let move = this.playerMonster.moves[i]; // create variable for move for each button
      let mon1 = this.playerMonster;
      let mon2 = this.opponentMonster;
      let slash;

      // btn.addEventListener('click', function (e) {  // if we click on button element, do anonymous function (which calls attack)
      // that.attack(move, mon1, mon2, 'opponent-health', ''); // do an attack
      // setTimeout(that.attack, 2000, mon2.moves[Math.floor(Math.random() * 3)], mon1, mon2, 'player-health', 'Foe '); // opponent will attack 2 seconds after we make select a move
      // mon1.hp += 10;
      // });

      function addHandler(btn, move, mon1, mon2) { // external function will pass in external params to our event listener
        btn.addEventListener('click', function (e) { // if we click on button element, do anonymous function (which calls attack)
          that.attack(move, mon1, mon2, 'opponent-health', ''); // do an attack
          slash = document.getElementById("player-slash");
          slash.setAttribute("src", "./src/images/interface/slash.gif");
          // slash.setAttribute("type", "hidden");
          console.log("hello world")
          let func = that.attack.bind(that);
          setTimeout(func, 2500, mon2.moves[Math.floor(Math.random() * 3)], mon2, mon1, 'player-health', 'Opponent '); // opponent will attack 2 seconds after we make select a move
        });
      }
      addHandler(btn, move, mon1, mon2);
    }
  }


  generate(flag) { //generates (creates) each pokemon, if true generates player mon,  is false generates opponent mon
    let p;
    if (flag) {
      p = playerPokemon[Math.floor(Math.random() * playerPokemon.length)];
    } else {
      p = opponentList[Math.floor(Math.random() * opponentList.length)]; // choose a random pokemon
    }
    let pokemon = new Pokemon(p[0], p[1], p[2], p[3]); //calls pokemon class to create new pokemon, args are name, sprite, hp, moves

    if (flag) { //we name the move buttons for player pokemon
      for (let i = 0; i < 4; i++) { // four moves to work with, so iterate through them.
        document.getElementById('m' + i).value = pokemon.moves[i][0]; //'m' + i is the id for each button, pokemon.moves, gets moves attribute, and then name (first elemenent)
      }
    }
    return pokemon; // returns the pokemon object

  }

  gameOver(hp) { // checks if there is a winner ie a pokemon has fainted, hp is the id of hp of the element that contains the pokemon's health
    let fainted = (this.playerMonster.hp <= 0) ? this.playerMonster : (this.opponentMonster.hp <= 0) ? this.opponentMonster : false; // if playerMonster health is less than 0, f = playerMonster, else if opponentMonster;s health is less than 0, f = false

    if (fainted != false) { // if condition is true, their pokemon has fainted and they lose! so we alert them that the game is over
      alert('Game Over: ' + fainted.name + ' fainted!\n' + '\nPress Okay to Play Again!');
      document.getElementById(hp).innerHTML = '<p>0/' + fainted.fullhp + '</p>';
      setTimeout(function () {
        location.reload();
      }, 500);
    }

  }

  attack(move, attacker, receiver, hp, owner) { // handles attacks and HP updates
    document.getElementById('commentary').innerHTML = '<p>' + owner + attacker.name + ' used ' + move[0] + '!</p>'; // says a particular pokemon has attacked and with what move
    let that = this;
    let health;
    // let slash;
    if (Math.random() < move[3]) { //defines its accuracy, the fourth element of a move defines its accuracy
      let power = move[2] += Math.floor(Math.random() * 10); // base power will be incremented between 0 and 1, adds variation ie critical hit, directly changes moves array
      let receiverType = typeMatch[receiver.name]; // for type matching, power of a move depends on pokemon move types
      let moveType = move[1]; // type for attack being used on receiver pokemon (being attacked)
      let scale = 1;

      // if (receiver === this.playerMonster) {
      //   slash = document.getElementById("player-slash");
      //   slash.setAttribute("src", "./src/images/interface/player_hp.png");
      //   // new Promise(resolve => setTimeout(resolve, 500))
      //   // slash.setAttribute("src", "");
      // } else {
      //   slash = document.getElementById("opponent-slash");
      // }

      for (let i = 0; i < receiverType.length; i++) { // we adjust the power level (scale) of each move
        if (receiverType[i].includes(moveType)) {
          switch (i) {
            case 0: // first case, receiver pokemon is immune to the attack
              scale = 0;
              setTimeout(function () {
                document.getElementById('commentary').innerHTML = '<p>It had no effect!</p>';
              }, 1000);
              break;
            case 1: // second case, the receiver is weak against the attack
              scale = 2;
              setTimeout(function () {
                document.getElementById('commentary').innerHTML = '<p>It was super effective!</p>';
              }, 1000);
              break;
            case 2: // third cased, the receiver is resistant to the sttack
              scale = 0.5;
              setTimeout(function () {
                document.getElementById('commentary').innerHTML = '<p>It was not very effective!</p>';
              }, 1000);
              break;
          }
          break;
        }
      }
      power *= scale; // varies pokemon attack's power
      receiver.hp -= Math.floor(power); // decreases health of receiver (pokemon being attacked)
      document.getElementById(hp).innerHTML = '<p>' + receiver.hp + '  ' + receiver.fullhp + '</p>';


      if (receiver === this.playerMonster) {
        health = document.getElementById("health1");
        // console.log("health1")

      } else {
        health = document.getElementById("health2");
      }
      health.value = Math.floor(receiver.hp / receiver.fullhp * 100);
    }
    else { // else, the attack type is not included in one of the three cases above, then we will say that the attack missed
      setTimeout(function () {
        document.getElementById('commentary').innerHTML = '<p>Attack missed!</p>';
      });
    }
    // console.log(that);
    that.gameOver(hp); // after an attack has been made, let's check if there's a winner -- pokemon's heatlh is <= 0


  }
}
