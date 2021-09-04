const playerAttacks = async (ev) => {
  return new Promise(async () => {

  attack(move, attacker, receiver, hp, owner) {
  document.getElementById('comment').innerHTML = '<p>' + owner + attacker.name + ' used ' + move[0] + '!</p>';

  if (Math.random() < move[3]) {
    let strength = move[2] += Math.floor(Math.random() * 10);
    let receiverType = typeWeakness[receiver.name];
    let moverType = move[1];
    let scale = 1;

    for (i = 0; i < receiverType.length; i++) {
      if (receiverType[i].includes(moverType)) {
        switch (i) {
          case 0:
            scale = 0;
            setTimeout(function () {
              document.getElementById('comment').innerHTML = '<p>Its not effective at all!</p>';
            }, 500);
            break;
          case 1:
            scale = 2;
            setTimeout(function () {
              document.getElementById('comment').innerHTML = '<p>Its super effective!</p>';
            }, 500);
            break;
          case 2:
            scale = 0.5;
            setTimeout(function () {
              document.getElementById('comment').innerHTML = '<p>Its not very effective!</p>';
            }, 500);
            break;
        }
        break;
      }
    }
    strength *= scale;
    receiver.hp -= Math.floor(strength);
    document.getElementById(hp).innerHTML = '<p>HP: ' + receiver.hp + '/' + receiver.fullhp + '</p>';
  }
  else {
    setTimeout(function () {
      document.getElementById('comment').innerHTML = '<p>Attack missed!</p>';
    });
  }
  hasWon(hp);

  }
}