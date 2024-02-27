const notes = [];

const nombreNotes = +prompt("Combiens de notes souhaitez-vous inserer ?");

for (let i = 0; i < nombreNotes; i++) {
  const note = +prompt(`Entrez la note[${i + 1}] : `);
  notes.push(note);
}

// for (let i = 0; i < nombreNotes; i++) {
//   if (i > 0) {
//     notes.push(+prompt(`Entrez la ${i + 1}ème note: `));
//   } else {
//     notes.push(+prompt(`Entrez la ${i + 1}ère note: `));
//   }
// }

let somme = 0;
for (let note of notes) {
  somme += note;
}

alert(`
 Somme : ${somme}
 Moyenne : ${somme / notes.length}
`);
