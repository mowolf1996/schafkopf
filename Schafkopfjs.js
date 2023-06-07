$(document).ready(start);


// Kartenmischen
function kartenMischen() {
  // Erzeuge ein Kartendeck
  var deck = [];
  var farben = ['Herz', 'Eichel', 'Blatt', 'Schell'];
  var werte = ['7', '8', '9', '10', 'Unter', 'Ober', 'König', 'Ass'];

  for (var i = 0; i < farben.length; i++) {
    for (var j = 0; j < werte.length; j++) {
      deck.push({
        farbe: farben[i],
        wert: werte[j],
        punkte: berechnePunkte(farben[i], werte[j])
      });
    }
  }

  // Mische das Kartendeck
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  return deck;
}

// Kartenausteilen
function kartenAusteilen(deck, spieler1, spieler2) {
  spieler1.hand = deck.slice(0, 8);
  spieler2.hand = deck.slice(8, 16);
}

// Zugspielen
function zugSpielen(spieler, karte) {
  var index = spieler.hand.findIndex(function (k) {
    return k.farbe === karte.farbe && k.wert === karte.wert;
  });

  if (index !== -1) {
    var gespielteKarte = spieler.hand.splice(index, 1)[0];
    return gespielteKarte;
  } else {
    return null; // Karte nicht gefunden
  }
}

// Punkteberechnung
function berechnePunkte(farbe, wert) {
  switch (farbe) {
    case 'Herz':
      if (wert === '10') return 10;
      if (wert === 'König') return 4;
      if (wert === 'Ass') return 11;
      break;
    case 'Eichel':
      if (wert === 'Unter') return 2;
      if (wert === 'Ober') return 3;
      if (wert === 'König') return 4;
      if (wert === '10') return 10;
      if (wert === 'Ass') return 11;
      break;
    case 'Blatt':
      if (wert === 'Unter') return 2;
      if (wert === 'Ober') return 3;
      if (wert === 'König') return 4;
      if (wert === '10') return 10;
      if (wert === 'Ass') return 11;
      break;
    case 'Schell':
      if (wert === 'Ober') return 3;
      if (wert === 'König') return 4;
      if (wert === '10') return 10;
      if (wert === 'Ass') return 11;
      break;
  }
  return 0; // Standardwert
}

  // Beispielanwendung
  var canvas = document.getElementById('gameCanvas');
  var shuffleButton = document.getElementById('shuffleButton');
  var dealButton = document.getElementById('dealButton');
  var playButton = document.getElementById('playButton');
  var ctx = canvas.getContext('2d');
  
  var spieler1 = { name: 'Spieler 1', hand: [] };
  var spieler2 = { name: 'Spieler 2', hand: [] };
  
  shuffleButton.addEventListener('click', function() {
    var deck = kartenMischen();
    spieler1.hand = [];
    spieler2.hand = [];
    drawHand(spieler1);
    drawHand(spieler2);
  });
  
  dealButton.addEventListener('click', function() {
    var deck = kartenMischen();
    kartenAusteilen(deck, spieler1, spieler2);
    drawHand(spieler1);
    drawHand(spieler2);
  });
  
  playButton.addEventListener('click', function() {
    if (spieler1.hand.length === 0 && spieler2.hand.length === 0) {
      alert('Bitte Karten austeilen!');
      return;
    }
  
    // Hier kannst du die Zuglogik implementieren, um eine Karte zu spielen
  
    // Beispiel: Spieler 1 spielt die erste Karte seiner Hand
    if (spieler1.hand.length > 0) {
      var karte = spieler1.hand[0];
      zugSpielen(spieler1, karte);
      drawHand(spieler1);
      drawHand(spieler2);
    } else {
      alert('Spieler 1 hat keine Karten mehr!');
    }
  });
  
  function drawHand(spieler) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (var i = 0; i < spieler.hand.length; i++) {
      var karte = spieler.hand[i];
      var x = i * 80 + 20;
      var y = spieler === spieler1 ? 50 : 250;
  
      ctx.fillStyle = 'white';
      ctx.fillRect(x, y, 70, 100);
      ctx.strokeRect(x, y, 70, 100);
      ctx.font = 'bold 14px Arial';
      ctx.fillText(karte.farbe + ' ' + karte.wert, x + 5, y + 20);
      ctx.fillText('Punkte: ' + berechnePunkte(karte.farbe, karte.wert), x + 5, y + 40);
    }
  }
  
  // Initialisierung
  ctx.font = 'bold 20px Arial';
  ctx.fillText('Klicke auf "Karten mischen" und dann auf "Karten austeilen"!', 20, 200);