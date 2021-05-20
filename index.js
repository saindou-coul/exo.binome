// var prenom = ['saindou','almamy','mai','zara'];
// console.log(
    // prenom[0] + ' ' +
    // prenom[1] +
    // ' et ' +
    // prenom[2] +
    // "sont au parc"
// );

// pour connaitre le nombre d'elements dans un tableau
// utiliser tableau.length
// var nbrElebes = prenoms.lenght;
// console.log(nbrEleves);
// 
// var prenom = ["greg", "patco", "krangba"];
// console.log(prenom);

// POUR CONNAITRE LE NOMBRE D'ELEMENT DANS UN TABLEAU
// UTILSER TABLEAU.LENGTH
// VAR nbrEleves = prenoms.LENGTH
// console.log(prenoms[prenoms.length-1]);

// EXO 3
// var prenom1 = "Jacques";
// var prenom2 = "Pauline";
// var prenom3 = "Jean-Paul";

// if (prenom1 === "") {
//   console.log("prenom1 vide !");
// } else if (prenom2 === "") {
//   console.log("prenom 2 vide !");
// } else if (prenom3 === "") {
//   console.log("prenom 3 vide !");
// } else if (prenom1.length < 5) {
//   console.log("prenom 1 trop court !");
// } else if (prenom2.length < 5) {
//   console.log("prenom 2 trop court !");
// } else if (prenom3.length < 5) {
//   console.log("prenom 3 trop court !");
// } else {
//   console.log("Tous les prénoms sont ok !");
// }
// ET &&
// OU||
// EXO 3
// var prenom1 = "Jacques"
// var prenom2 = "Pauline"
// var prenom3 = "Jean-Paul"

// if(!prenom1 || !prenom2 || !prenom3) {
    // console.log("prenom vide!")
// }else if (prenom.length < 5 || prenom2.length < 5 || prenom3.length <5) {
// console.log("prenom trop court")
// } else {console.log ("tout est ok!")
// }

// ET: &&
// OU: ||
// var prenom1 = 'Jacques'
// var prenom2 = 'Pauline'
// var prenom3 = '      '

// TRIM() pour enlever tout espace devant ou derrière une string
// if (!prenom1.trim() || !prenom2.trim() || !prenom3.trim()) {
//   console.log('Prénom vide!')
// } else if (prenom1.length < 5 || prenom2.length < 5 || prenom3.length < 5) {
//   console.log('Prénom trop court!')
// } else {
//   console.log('Tout est ok!')
// }
// 
// var pseudo = 'admin'
// var password = 'test12345'
// 
// if (pseudo === 'admin' && password === 'test1234') {
//   console.log('id corrects')
// } else {
//   console.log('id incorrects')
// }
// 
// var test = ' Je suis une phrase '
// console.log(test.trim())

// var tableau1 = ["Arthur", "Bruno", "Agnès", "Adeline"]
// console.log(
//   tableau1[0].length +
// tableau1[1].length + 
// tableau1[2].length +
// tableau1[3].length
// )

// var arr = ['arthur', 'florian', 'papa', 'abdallah', 'julien'];

// BOUCLE FOR
// var total = 0

// for (var i = 0; i < arr.length; i++) {
//   total += arr[i].length
// }

// console.log(total)

// var tableau2 = [2, 5, 85, 145, 22]
// var result = 0

// for (var i = 0; i < tableau2.length; i++) {
//   result = result + tableau2[i]
// }
// console.log(result)

// Exercice 02
// Créez un tableau, avec plusieurs nombres (au moins 4)
// Grâce à une boucle FOR
// Additionnez tous les nombres
// et afficher le résultat dans la console

// var tableau1 = [ 11, 25, 3, 8 ]
// console.log(
// tableau1[satn] +
// tableau1[djo] +
// tableau1[screed] + 
// tableau1[steph]
// )
// var tab = [5, 15, 25, 35];
// var total = 0;
// for (var i = 0; i < tab.length; i++) {
//   total += tab[i];
//   total = total+tab[i];
// }
// console.log(total);
// Exercice 03
// Créez un tableau, avec plusieurs nombres (au moins 4)
// Si l'un de ces nombres à inférieur à la majorité en France
// Affichez dans le terminal ('Tu veux un cacolac ?')
// :::::var tab = [11, 5, 45, 7]
// for ( var i=0; i < tab.length; i++)
// {
//     if (tab[i] <18 ) {
//         console.log ('tu veux un cacola?')
//     }
// }

// EXO!!!
// A l'aide de l'array [0, 1]
// Créez une fonction qui va faire la somme des 2 derniers chiffres du tableau
// Puis l'ajoutez à la suite de cet array
// Grâce au paramètre de la fonction, vous déciderez combien de fois
// ce calcul sera effectué
// (Pour info, il s'agit de la suite de Fibonacci)
// Exemple:
// function fibonacci(7) => le résultat sera [0, 1, 1, 2, 3, 5, 8, 13, 21]

// function fibo() {
//     var tab =[0,1]
//     for (var i =0; i < 1; i++) {
//         var result = tab[i] + tab[i+1]
//         tab.push(result)
//     }
//     console.log(tab)
//     }
//     fibo()

//  auutre exemple 
// function fibo(num) {
//     var tab =[0,1]
//     for (var i =0; i < num; i++) {
//         // var result = tab[i] + tab[i+1]
//         tab.push(tab[i] + tab[i +1])
//     }
//     console.log(tab)
//     }
//     fibo(7)
