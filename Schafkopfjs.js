$(document).ready(start);


const cards = [
  { suit: "Eichel", rank: "Sieben", img: "/Bilder/Eichel7.png" },
  { suit: "Eichel", rank: "Acht", img: "/Bilder/Eichel8.png" },
  { suit: "Eichel", rank: "Neun", img: "/Bilder/Eichel9.png" },
  { suit: "Eichel", rank: "Unter", img: "/Bilder/EichelUnter.png" },
  { suit: "Eichel", rank: "Ober", img: "/Bilder/EichelOber.png" },
  { suit: "Eichel", rank: "König", img: "/Bilder/EichelKönig.png" },
  { suit: "Eichel", rank: "Zehn", img: "/Bilder/Eichel10.png" },
  { suit: "Eichel", rank: "Ass", img: "/Bilder/EichelAss.png" },
  { suit: "Blatt", rank: "Sieben", img: "/Bilder/Blatt7.png" },
  { suit: "Blatt", rank: "Acht", img: "/Bilder/Blatt8.png" },
  { suit: "Blatt", rank: "Neun", img: "/Bilder/Blatt9.png" },
  { suit: "Blatt", rank: "Unter", img: "/Bilder/BlattUnter.png" },
  { suit: "Blatt", rank: "Ober", img: "/Bilder/BlattOber.png" },
  { suit: "Blatt", rank: "König", img: "/Bilder/BlattKönig.png" },
  { suit: "Blatt", rank: "Zehn", img: "/Bilder/Blatt10.png" },
  { suit: "Blatt", rank: "Ass", img: "/Bilder/BlattAss.png" },
  { suit: "Herz", rank: "Sieben", img: "/Bilder/Herz7.png" },
  { suit: "Herz", rank: "Acht", img: "/Bilder/Herz8.png" },
  { suit: "Herz", rank: "Neun", img: "/Bilder/Herz9.png" },
  { suit: "Herz", rank: "Unter", img: "/Bilder/HerzUnter.png" },
  { suit: "Herz", rank: "Ober", img: "/Bilder/HerzOber.png" },
  { suit: "Herz", rank: "König", img: "/Bilder/HerzKönig.png" },
  { suit: "Herz", rank: "Zehn", img: "/Bilder/Herz10.png" },
  { suit: "Herz", rank: "Ass", img: "/Bilder/HerzAss.png" },
  { suit: "Schelln", rank: "Sieben", img: "/Bilder/Schell7.png" },
  { suit: "Schelln", rank: "Acht", img: "/Bilder/Schell8.png" },
  { suit: "Schelln", rank: "Neun", img: "/Bilder/Schell9.png" },
  { suit: "Schelln", rank: "Unter", img: "/Bilder/SchellUnter.png" },
  { suit: "Schelln", rank: "Ober", img: "/Bilder/SchellOber.png" },
  { suit: "Schelln", rank: "König", img: "/Bilder/SchellKönig.png" },
  { suit: "Schelln", rank: "Zehn", img: "/Bilder/Schell10.png" },
  { suit: "Schelln", rank: "Ass", img: "/Bilder/SchellAss.png" },
];

cards.sort(() => (Math.random() > .17) ? 1 : -1)

document.writeln('<div id="grid">')
for(i=0; i<32;i++)
{
    document.writeln(`<div> <img class='karte' src= ${cards[i]} alt='karte' id=${i}></div>`)
}
document.writeln('</div>')