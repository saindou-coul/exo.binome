// console.log('Bonjour tout le monde');

// VARIABLES

// var age;
// var prenom;
// var nom;

// CONVENTION CAMELCASE
// var motDePasse;

// TYPES DE VALEURS

// 1.NOMBRES
// décimal avec un '.'
// var age = 15.5;

// 2.CHAINE DE CARACTERES - STRING
// var prenom = 'julien';
// console.log(prenom);

// 3. BOOLEAN - VRAI OU FAUX
// var florianEstBeau = false
// var florianEstBeau = true;
// console.log(florianEstBeau);

// var aleatoire = Math.floor(Math.random() * 50) + 1;
// console.log(aleatoire);

// 4. LES TABLEAUX - ARRAY
// var auPif = 'phrase au pif';
// var tablo = [15, 'amina', 'adline', 'arthur', false, auPif];
// console.log(tablo);

// 5. OPERATIONS
// var addition = 85 + 496;
// var soustraction = 2548 - 6325;
// console.log(addition, soustraction);
// var resultat = addition / soustraction;
// console.log(resultat);

// NAN - NOT A NUMBER
// var resultat = addition / soustraction;
// console.log(resultat);
// var addition = 85 + 496;
// var soustraction = 2548 - 6325;

// var test = 85;

// 1ere solution
// var test2 = 50 + test

// 2eme solution
// test = test + 50;

// 3eme solution
// Raccourci de la 2eme solution
// test += 50;
// console.log(test);

// var test2 = 135;
// test2 -= 45;
// console.log(test2);

// -------------- 2EME JOUR -----------------------------

// Exercice:
// déclarer au minimum 5 nouvelles variables, et les afficher
// dans le terminal.

// var variable1 = 15;
// var variableTest = 'Bonjour';
// var variable2 = false;
// var prenom = 'Julien';
// console.log(variableTest, variable1, variable2, prenom);

// var num1 = 15
// var num2 = 77
// var num3 = 44
// var num5 = 105

// num += 33

// num3 += num5
// num3 = num3 + num5

// CHAINE DE CARACTERES
// CONCATENATION
// var premier = 'Bonjour';
// var deuxieme = 'Amina';
// premier = premier + ' ' + deuxieme
// premier += deuxieme;
// console.log(premier + ' ' + deuxieme);

// var prenom = 'Danny';
// console.log('Bonjour ' + prenom);

// EXERCICE CONCATENATION
// Vous allez créer 2 variables
// une pour votre prenom
// et une pour votre age
// et dans le terminal, afficher la phrase
// "Bonjour <prenom>, tu as <age> ans."

// var firstname = 'Julien';
// var age = 24;
// console.log('Bonjour ' + prenom + ', tu as ' + age + ' ans');

// ARRAY - TABLEAUX
// LES ORDIS COMMENCENT A COMPTER A PARTIR DE ZERO!!!
// var form = ['julien', 23, true];
// console.log(form[0]);

// var prenoms = ['arthur', 'abdallah', 'florian']
// console.log(
//   prenoms[0] +
//     ' ' +
//     prenoms[1] +
//     ' et ' +
//     prenoms[2] +
//     " sont en cours aujourd'hui"
// )

// POUR CONNAITRE LE NOMBRE D'ELEMENTS DANS UN TABLEAU
// UTILISER TABLEAU.LENGTH

// var prenoms = ['arthur', 'abdallah', 'florian', 'corentin', 'adline'];
// var nbrEleves = prenoms.length;
// console.log(nbrEleves);

// POUR CONNAITRE LE DERNIER ELEMENT DANS UN TABLEAU
// console.log(prenoms[prenoms.length - 1]);

// CHAQUE STRING EST CONSIDEREE COMME UN TABLEAU
// CHAQUE LETTRE EST UN ELEMENT D'UN TABLEAU
// var prenom = 'arthur ';
// console.log(prenom[0].toUpperCase());
// console.log(prenom[prenom.length - 1]);

// COMMENT CREER UN TABLEAU VIDE
// var users = []
// var user1 = 'Julien'

// METTRE UN ELEMENT A LA FIN D'UN TABLEAU : PUSH
// users.push(user1);
// console.log(users);

// var user2 = 'Ikram';
// users.push(user2);
// console.log(users);

// var user3 = 'Miriame';
// users.push(user3);
// console.log(users);

// EXO
// Vous créez un tableau vide, dans une variable
// Ensuite, vous devez créer 2 autres variables, pour votre prénom et votre nom.
// Vous assignez ces variables dans votre array.

// var arr = []
// var prenom = 'julien'
// var nom = 'delusseau'

// A l'aide de ce que l'on a appris récemment, votre array devra afficher dans le terminal:
// votre prénom, votre nom, vos initiales
// ['julien', 'delusseau', 'jd']

// LES CONDITIONS
// Il existe plusieurs façons de déterminer si quelque chose est 'true' ou bien 'false'

// -----------------
// 1. Les opérateurs
// -----------------
// Il existe plusieurs opérateurs en Javascript, qui nous permettent de vérifier des valeurs entre elles.

// var a = 10;
// var b = 5;

// ON COMPARE LA VALEUR ET LE TYPE
// AVEC ===
// console.log(a === b);

// var a = 10;
// var b = 'Je suis le numéro 10';
// console.log(a == b);
// console.log(a === b[b.length - 2] + b[b.length - 1]);

// var a = 10;
// var b = '10';

// SI A N'EST PAS EGALE à B
// a !== b
//console.log(a !== b);

// EST CE QUE A EST SUPERIEUR à B ?
// console.log(a > b);
// EST CE QUE A EST SUPERIEUR OU EGALE à B ?
// console.log(a >= b);

// EST CE QUE A EST INFERIEUR à B ?
// console.log(a < b);
// EST CE QUE A EST INFERIEUR OU EGALE à B ?
// console.log(a <= b);

// EXERCICE:
// var tab = [5, 15, 25, '5', '15', '25']

// CONDITION IF / ELSE IF / ELSE

// SI (une condition est remplie) {
//   retourne une valeur
// } OU SINON (une autre condition est remplie) {
//   retourne une autre valeur
// } SINON {
//   retourne une autre valeur
// }

// var num = 15

// if (num > 16) {
//   console.log('Je suis supérieur à 10')
// } else if (num >= 5) {
//   console.log('Je suis supérieur ou égale à 5')
// } else {
//   console.log('...le reste')
// }

// var pseudo1 = 'JuLiEn'
// console.log(pseudo1.toLowerCase())

// if (pseudo1.toLowerCase() === 'julien') {
//   console.log('Bienvenue!')
// } else if (pseudo1 === '') {
//   console.log('Merci de mettre ton pseudo')
// } else {
//   console.log('Barres toi!')
// }

// var pseudo1 = ''

// if (pseudo1 === 'julien') {
//   console.log('Bienvenue!')
//   // EST CE QUE PSEUDO EST FAUX ?
// } else if (!pseudo1) {
//   console.log('Merci de mettre ton pseudo')
// }

// EXERCICE:
// créez un tableau comprenant votre taille (en cm) et votre poid
// vous avez le droit de tricher sur les kg
// le calcul: poid / taile au carré

// avec ce tableau vous allez calculer votre IMC
// si en dessous de 18.4, indiquez ('trop maigre!')
// si entre 18.5 et 24.9, indiquez ('pas mal!')
// sinon, indiquez ('ça te regarde pas')

// exo2
// créer une variable pour un mot de passe qui ne changera jamais.
// par exemple: var pass = 'test1234'

// Puis créer un tableau vide
// à l'intérieur, mettre un pseudo et un mot de passe
// si le pseudo a moins de 8 caractères, afficher: trop court!
// si le password n'est pas bon, afficher: password incorrect
// sinon afficher: identifiants corrects!

// var arr = ['arthur', 'florian', 'papa', 'abdallah', 'julien']

// // BOUCLE FOR
// var total = 0

// for (var i = 0; i < arr.length; i++) {
//   total += arr[i].length
// }

// console.log(total)

// var tableau2 = [2, 5, 85, 145, 22]

// ON INITIALISE UNE VARIABLE I QUI EST EGALE à 0 (QUI EST EGALE AU 1ER ELEMENT D'UN TABLEAU)
// TANT QUE I EST INFERIEUR A LA LONGUEUR DU TABLEAU, ON FAIT LES INSTRUCTIONS ENTRE ACOLADES
// PUIS ON AJOUTE +1 à I A CHAQUE ITERATION

// for (var i = 0; i < tableau2.length; i++) {
//   console.log(tableau2[i])
// }

// Exercice 01
// Créez un tableau, avec différents types
// et autant d'élements que vous le souhaitez
// Grâce à une boucle FOR
// Faites un console.log() de chaques éléments

// Exercice 02
// Créez un tableau, avec plusieurs nombres (au moins 4)
// Grâce à une boucle FOR
// Additionnez tous les nombres
// et afficher le résultat dans la console

// Exercice 03
// Créez un tableau, avec plusieurs nombres (au moins 4)
// Si l'un de ces nombres à inférieur à la majorité en France
// Affichez dans le terminal ('Tu veux un cacolac ?')

// Exercice 04
// Créez un tableau, avec plusieurs prénoms (au moins 4)
// Toujours à l'aide d'une boucle FOR
// Déterminez si un de ces prénoms à moins de 4 caractères
// Si c'est le cas, affichez dans le terminal ('Le prénom numéro ... est trop court')

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

// var pseudo = 'admin'
// var password = 'test12345'

// if (pseudo === 'admin' && password === 'test1234') {
//   console.log('id corrects')
// } else {
//   console.log('id incorrects')
// }

// var test = ' Je suis une phrase '
// console.log(test.trim())


// Exercice 05
// A l'aide de ce tableau, et de la boucle FOR
// Affichez dans le terminal seulement les prénoms
// qui commencent par la lettre A

// for (var i = 0; i < students.length; i++) {
// // CONDITION TERNAIRE
// students[i][0] === 'a' ? console.log(students[i]) : null
// // if (students[i][0] === "a") {
// //   console.log(students[i])
// // }
// }

// VOIR CONDITIONS TERNAIRES
// VOIR LES FONCTIONS
// VOIR MATH RANDOM
// VOIR PUSH POP SHIFT UNSHIFT SPLICE

// var tableau = ['julien', 'laurent', 'ina']
// tableau.splice(2, 0, 'arthur')
// console.log(tableau)

// for (var i = 0; i < tableau.length; i++) {
//   if (tableau[i].length < 4) {
//     console.log('le prenom ' + i, 'est trop court')
//   }
// }

// LES FUNCTION (FONCTIONS)

// DECLARER MA FONCTION
// function mySuperFunction() {
//   for (var i = 0; i < students.length; i++) {
//     students[i][0] === 'a' ? console.log(students[i]) : null
//   }
// }
// CALLING THE FUNCTION
// mySuperFunction()

// function addition(num1, num2) {
//   console.log(num1 + num2)
// }
// addition(9, 52)
// addition(14, 152)

// function greetings(str, str2) {
//   console.log('Bonjour ' + str + ' ' + str2)
// }
// greetings('Adline', 'Amina')

// function greetings(str, str2, str3) {
//   console.log('Bonjour ' + str + ' ' + str3)
// }
// greetings('Adline', null, 'Arthur')

// Exercice 06
// Créez un array avec plein de strings de votre choix
// créez une fonction, qui va ajouter à la fin de chaque string
// le paramètre que vous aurez mis à l'intérieur de la fonction

// var arr = ['arthur', 'abdallah', 'florian', 'corentin']
// function mySuperFunction(str) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] += str
//   }
// }
// mySuperFunction(' (modifié)')

// console.log(arr)

// test('Julien')

// function test(str) {
//   var a = 5
//   console.log('Bonjour ' + str)
// }
// console.log(a)

// Retourner une valeur
// function additionner(a, b) {
//   return a + b
// }

// function additionner() {
//   var a = 20
//   return a
// }

// var total1 = additionner(5, 16)
// var total2 = additionner(5, 32)
