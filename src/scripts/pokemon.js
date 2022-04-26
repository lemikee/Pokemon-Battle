export default class Pokemon {
  // pokemon class
  constructor(name, sprite, hp, moves) {
    this.name = name;
    this.sprite = sprite;
    this.hp = hp; //will decrease as Pokemon is "attacked"
    this.fullhp = hp; //original max hp
    this.moves = moves;
  }

  generate(flag) {
    //generates (creates) each pokemon, if true generates player mon,  is false generates opponent mon
    let p;
    if (flag) {
      p = playerPokemon[Math.floor(Math.random() * playerPokemon.length)];
    } else {
      p = opponentList[Math.floor(Math.random() * opponentList.length)]; // choose a random pokemon
    }
    let pokemon = new Pokemon(p[0], p[1], p[2], p[3]); //calls pokemon class to create new pokemon, args are name, sprite, hp, moves

    if (flag) {
      //we name the move buttons for player pokemon
      for (let i = 0; i < 4; i++) {
        // four moves to work with, so iterate through them.
        document.getElementById("m" + i).value = pokemon.moves[i][0]; //'m' + i is the id for each button, pokemon.moves, gets moves attribute, and then name (first elemenent)
      }
    }
    return pokemon; // returns the pokemon object
  }

  attack(move, attacker, receiver, hp, owner) {
    // handles attacks and HP updates
    document.getElementById("commentary").innerHTML =
      "<p>" + owner + attacker.name + " used " + move[0] + "!</p>"; // says a particular pokemon has attacked and with what move
    let that = this;
    let health;
    if (Math.random() < move[3]) {
      //defines its accuracy, the fourth element of a move defines its accuracy
      let power = (move[2] += Math.floor(Math.random() * 10)); // base power will be incremented between 0 and 1, adds variation ie critical hit, directly changes moves array
      let receiverType = typeMatch[receiver.name]; // for type matching, power of a move depends on pokemon move types
      let moveType = move[1]; // type for attack being used on receiver pokemon (being attacked)
      let scale = 1;

      for (let i = 0; i < receiverType.length; i++) {
        // we adjust the power level (scale) of each move
        if (receiverType[i].includes(moveType)) {
          switch (i) {
            case 0: // first case, receiver pokemon is immune to the attack
              scale = 0;
              setTimeout(function () {
                document.getElementById("commentary").innerHTML =
                  "<p>It had no effect!</p>";
              }, 1000);
              break;
            case 1: // second case, the receiver is weak against the attack
              scale = 2;
              setTimeout(function () {
                document.getElementById("commentary").innerHTML =
                  "<p>It was super effective!</p>";
              }, 1000);
              break;
            case 2: // third cased, the receiver is resistant to the sttack
              scale = 0.5;
              setTimeout(function () {
                document.getElementById("commentary").innerHTML =
                  "<p>It was not very effective!</p>";
              }, 1000);
              break;
          }
          break;
        }
      }
      power *= scale; // varies pokemon attack's power
      receiver.hp -= Math.floor(power); // decreases health of receiver (pokemon being attacked)
      document.getElementById(hp).innerHTML =
        "<p>" + receiver.hp + " " + receiver.fullhp + "</p>";

      if (receiver === this.playerMonster) {
        health = document.getElementById("health1");
        // console.log("health1")
      } else {
        health = document.getElementById("health2");
      }
      health.value = Math.floor((receiver.hp / receiver.fullhp) * 100);
    } else {
      // else, the attack type is not included in one of the three cases above, then we will say that the attack missed
      setTimeout(function () {
        document.getElementById("commentary").innerHTML =
          "<p>Attack missed!</p>";
      });
    }
    // console.log(that);
    that.gameOver(hp); // after an attack has been made, let's check if there's a winner -- pokemon's heatlh is <= 0
  }
}

// modules.export = Pokemon;
