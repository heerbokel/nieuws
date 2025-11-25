const gezegdes = [
  "Wie het kleine niet eert, is het grote niet weerd.",
  "Oost west, thuis best.",
  "De aanhouder wint.",
  "Al is de leugen nog zo snel, de waarheid achterhaalt haar wel.",
  "Beter één vogel in de hand dan tien in de lucht."
];

function getGezegdeIndex() {
  const now = new Date();
  const firstJan = new Date(now.getFullYear(),0,1);
  const weekNumber = Math.floor(((now - firstJan)/(1000*60*60*24*7)));
  return weekNumber % gezegdes.length;
}

document.getElementById("gezegdeText").textContent = gezegdes[getGezegdeIndex()];
