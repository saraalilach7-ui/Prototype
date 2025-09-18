let codes = ["C1", "C3", "C2", "C1", "C8", "C1", "C2"];
let codeRecherche = "C1";
let compteur = 0;

for (let i = 0; i < codes.length; i++) {
  if (codes[i] === codeRecherche) {
    compteur++;
  }
}

console.log("Le code " + codeRecherche + " apparaît " + compteur + " fois.");
