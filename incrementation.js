// 1. Pre incrementation
// A la fin de l'execution, a = 2 et b =2
// Avec ++ à gauche de "a" : Avec va s'incrementer, puis affecter cette nouvelle valeur
// a "b"
let a = 1;
let b = ++a;

// 2. Post incrementation
// A la fin de l'execution, a = 2 et b =1
// Avec ++ à gauche de "a" : Avec va d'abord affecter la valeur courante à b(1) puis s'incrementer
let x = 1;
let y = x++;
