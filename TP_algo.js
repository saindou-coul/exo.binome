// --------------
// TP ALGORITHMIE
// --------------

// CONSEIL 1:
// RELIRE VOS EXERCICES
// ILS FONT OFFICE DE DOCUMENTATION

// CONSEIL 2:
// BIEN LIRE LES ENONCES

// --------------
// Exercice 01
// --------------

// Créer une fonction, qui prendra en paramètre deux nombres
// Et qui affichera dans le terminal la multiplication de ces 2 nombres
// Exemple: mult(5, 3) => nous affichera 15
function multiple(nbr,nbr)
{
console.log(nbr*nbr)
}
multiple(2,2)

// --------------
// Exercice 02
// --------------

// Déclarer un array, avec plusieurs nombres
// ex: [1, 8, 588, 64, 25]
// Afficher dans le terminal, chaque nombre multiplié par 4
var array = [1,8,588,64,25]
for (var i=0; i<array.length; i++)
{
array[i]*=4
}
console.log(array)

// --------------
// Exercice 03
// --------------

// Créer un objet avec pour clés votre prénom et votre age (vous avez le droit de tricher pour votre age).
// Exemple:
var user = {
  firstName: 'Julien',
  age : 25
}
// Si la valeur de la clé age est supérieur à 28, afficher dans le terminal ("Je suis dans la fleur de l'age")
// Sinon, afficher ("Je suis en train de me bonifier")
if (user.age > 28) { 
      console.log("Je suis dans la fleur de l'age")
    } else {
      console.log("Je suis en train de me bonifier")
    }

// --------------
// Exercice 04
// --------------

var users = [
  {
    firstname: 'john',
    age: 34
  },
  {
    firstname: 'clara',
    age: 26
  },
  {
    firstname: 'sarah',
    age: 29
  }
]
// A l'aide de cet array
// Afficher dans le terminal la somme de leur age.
var x =0
for(i=0; i<users.length; i++)
{
x += users[i].age
}
console.log(x)

// --------------
// Exercice 05
// --------------

// Déclarer un array, avec plusieurs prénoms
// ex: ['ikram', 'adline', 'amina', 'miriame']
// Afficher dans le terminal, une String regroupant ces prénoms séparés par --
// ATTENTION: le dernier prénom ne sera PAS suivi de --
// ex: "ikram--adline--amina--miriame"
var array = ['ikram', 'adline', 'amina', 'miriame']
 {
     var a = ""

    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            a += array[i]
        } else {
            a += array[i] + "--"
        }
    }
    console.log(a)
}

// --------------
// Exercice 06
// --------------

// Créer un array avec plusieurs chiffres/nombres de votre choix
// ex: ([4, 6, 2, 122, 9, 63])
// Créer une fonction qui nous indiquera le nombre le plus petit, ainsi que le plus grand
// Et affichera le résultat dans la console:
// résultat attendu: Le plus petit nombre est ... et le plus grand est ...
var array = [4, 6, 2, 122, 9, 63]
function tab ()
{
    var ok = array[0].length
    for (var i=0; i < array.length; i++)
    {
        if (array[i].length< ok) 
        {
            ok=array[i].length()} 
            {
            console.log("le plus petit nombre est " + ok)
        }
        if (array[i].length>ok) 
          {
              ok=array[i].price} 
              {
            console.log( "et le plus grand est" +ok)
        } 


    }

console.log(ok)
}
tab()

// if (user.age > 28) { 
//     console.log("Je suis dans la fleur de l'age")
//   } else {
//     console.log("Je suis en train de me bonifier")
//   }

// // --------------
// Exercice07
// --------------

// Créer une fonction qui va calculer le nombre de 'a' dans une String
// (afficher le résultat dans le terminal. Exemple: "Il y a ... de lettres 'a' dans la phrase")
// Puis remplacer tous les 'a' d'une String par des 'z'
// ex: "Sayonara! Oui, j'ai des origines japonaises."
// résultat attendu: "Szyonzrz! Oui, j'zi des origines jzponzises."
// function tab ()
var re = /a/gi;
var str="Sayonara! Oui, j'ai des origines japonaises."
{console.log("Il y a " + (str.match(/a/g) || []).length + " de lettes 'a' dans la phrase")
}
console.log(str.replace(re, 'z'));

// {
// console.log(str + " mesure " + str.length + " codets");
// console.log("La chaîne vide a une longueur de " + x.length);
// }
// {
//     var a = "a"

//    for (var i = 0; i < str.length; i++) {
//        if (i === str.length ) {
//            a += str[i]
//        } else {
//            a += str[i] + "z"
//        }
//    }
//    console.log(a)
// }
// tab ()

// --------------
// Exercice 08
// --------------

// Créer un array avec plusieurs chiffres/nombres de votre choix
// Créer une fonction qui, TOTALEMENT AU HASARD
// nous MULTIPLIERA ou DIVISERA ces nombres les uns à la suite des autres
// exemple1: [1, 4, 32, 8] => 1 * 4 / 32 * 8 = 1024
// exemple2: [1, 4, 32, 8] => 1 / 4 * 32 * 8 = 64
// var array = [1, 4, 32, 8]
// var all = Math.round(math.random(array))
// // {
// //     var x = ""
// //     for (i=0; i< array.length; i++)
// //     {    var all= Math.round(math.random())
// //     }
// //     console.log(array*all)
// // }
// console.log(all)
// --------------
// Exercice 09
// --------------

// Un utilisateur vient de s'inscrire sur votre site.
// Malheureusement, il inscrit son prénom de façon 'hasardeuse'
// ex: oLivieR
// Créer une fonction, qui prendra en paramètre un prénom
// Cette fonction mettra la première lettre en majuscule
// Puis le reste du prénom en minuscule.
// résultat attendu: Olivier
// dmc= "oLivieR"
// console.log("dmc : " + dmc.substring(dmc.toUpperCase()));

// --------------
// Exercice 10
// --------------

// Créer une fonction qui fait office de calculatrice
// Cette fonction peut additionner, multiplier, soustraire, ou diviser 2 nombres
// Elle accepte 3 paramètres:
// Les 2 premiers paramètres seront vos chiffres/nombres
// Le 3ème paramètre sera le signe représentant le calcul.
// ex: (5, 10, '*') => résultat: 50
// ex: (8, 4, '+') => résultat: 12
// ex: (77, 33, '-') => résultat: 44
// ATTENTION: si un calcul n'est pas réalisable, indiquez: 'Calcul impossible'
// ex: (8, 'k', '-') => résultat: 'Calcul impossible'
// ex: (13, '45', 'plus') => résultat: 'Calcul impossible'
// Aide: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN

