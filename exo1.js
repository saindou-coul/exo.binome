// TOUR I
// Créer une fonction, qui prendra en paramètre deux nombres
// et qui affichera le résultat de l'addition de ces nombres
// function varr(nbr) {
//     console.log("varr" + nbr)
// }
// varr('nbr')
// console.log varr
// function varr(nbr,nbre) {
//     console.log(nbr + nbre)
// }
// console.log(varr)
// varr(5,5)

// TOUR II
// Grâce à cet array et à une boucle: ["laurent", "david", "christian"]
// Afficher dans la console:
// Bonjour laurent
// Bonjour david
// Bonjour christian

// var tab = ["laurent", "david", "christian"];
// for (var i = 0; i < tab.length; i++) {
//   console.log("bonjour " + tab[i])
//  }

// TOUR III
// Grâce à cet array:
// [["marie", "clara", "zoe"], [27, 18, 26]]
// Afficher dans la console:
// marie à 27 ans
// clara à 18 ans
// zoe à 26 ans
//  function addition[["a","b","c"], [d, e, f]] 
//  { 
//       console.log("a" + "d")
//     }
//     console.log(adition) 
//     for (var i = 0; i < addition.length; i++) {
//           console.log(addition[i])
//         }
//         result = console.log(addition)
// var tab = [["marie", "clara", "zoe"], [27, 18, 26]];

// vrai result
// var arr = [["marie", "clara", "zoe"], [27, 18, 26]]
// for (var i)

// for (var i = 0; i < tab.length; i++) {
//   console.log(tab + "a" + tab[i])
//  }


// TOUR IV
// A l'aide de la phrase: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
// N'afficher dans le terminal que les 40 premiers caractères.
// var phr = "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
//
 // console.log(phr[15])
// // ou
// console.log(phr.slice(0,41))
// / var court = "";
// ou
// for (var i = 0; i < phrase.length; i++) {
//   if (i < 40) {
//     // console.log(phrase[i]);
//     court = court + phrase[i];
//   }
// }
// console.log(court);

// TOUR V
// Déclarer un array, avec plusieurs chiffres/nombres
// Afficher dans le terminal, chaque chiffre/nombre multiplié par 2
// var array = [14, 3, 55, 48]
// for(var i=0; i<array.length; i++) {
//     console.log(array[i]*2)
// }

// TOUR VI
// A l'aide de la phrase: "Bonjour tout le monde"
// et de la phrase: "Je suis développeur Web"
// Ne garder que les 10 premiers caractères de chaques phrases
// Puis les afficher dans une nouvelle phrase
// Résultat attendu : Bonjour toJe suis dé
// var phr1 = "Bonjour tout le monde"
// var phr2 = "Je suis développeur Web"
// var fusion= ""
// console.log(phr1.slice(0,10) + phr2.slice(0,10))
// ou
// for (var i = 0; i < phr1.length; i++) {
//   if (i < 10) {
//     fusion += phr1[i]
//   }
// }
// for (var i = 0; i < phr2.length; i++) {
//   if (i < 10) {
//     fusion += phr2[i]
//   }
// ou
// }
// for (var i = 0; i < 10; i++) {
//   fusion += phr1[i]
// }
// for (var i = 0; i < 10; i++) {
//   fusion += phr2[i]
// }
// console.log(fusion)

// TOUR VII
// Déclarer un array, avec plusieurs prénoms
// ex: ['julien', 'karine', 'alice', 'marie']
// Afficher dans le terminal, une String regroupant ces prénoms
// séparés par ***
// ATTENTION: le dernier prénom ne sera PAS suivi de ***
// ex: "julien***karine***alice***marie"

// function etoile(array) {
//     var a = ""

//     for (var i = 0; i < array.length; i++) {
//         if (i === array.length - 1) {
//             a += array[i]
//         } else {
//             a += array[i] + "***"
//         }
//     }
//     console.log(a)
// }
// etoile(["julien", "karine", "alice", "marie"])

// TOUR VIII
// Créer une fonction qui doit déterminer si
// un utilisateur à insérer correctement un @
// dans son adresse email.
// Puis afficher le résultat: true ou false
// ex: testEmail('julien@gmail.com') => true
// ex: testEmail('julien.gmail.com') => false
// --- TOUR VIII ---
// Créer une fonction qui doit déterminer si
// un utilisateur à insérer correctement un @
// dans son adresse email.
// Puis afficher le résultat: true ou false
// ex: testEmail('julien@gmail.com') => true
// ex: testEmail('julien.gmail.com') => false

// var trueEmail = "julien@gmail.com";
// var falseEmail = "julien.gmail.com";

// function verifyEmail(email) {
//   var correct = false;
//   for (var i = 0; i < email.length; i++) {
//     if (email[i] === "@") {
//       correct = true;
//     }
//   }
//   console.log(correct);
//   return correct;
// }

// var checkEmailResult = verifyEmail(falseEmail);

// console.log(checkEmailResult);