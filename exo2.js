// TOUR I
// Créer une fonction appelée 'repeatString', qui a pour but
// de répéter une String, X nombre de fois.
// résultat attendu: repeatString(5, 'Bonjour') donnera 'BonjourBonjourBonjourBonjourBonjour'

// repeated.equals("bonjourbonjour");
// function repeatString(str,nbr)
// {
//     var phrase= ""
//     for (var i=0; i<nbr; i++){ 
//     phrase+= str
//  }
//  console.log(phrase)
// }
//  repeatString("djo",4)

// TOUR II
// Créer une fonction qui va créer un nouvel utilisateur
// Elle prendra 2 paramètres, pour le prénom et le nom
// Exemple:
// newUser=('julien', 'delusseau') ; {firstname: 'julien', lastname: 'delusseau'}
// newUser=('monica', 'bellucci') ; {firstname: 'monica', lastname: 'bellucci'}

// function ajoutU(prenom, nom){
//   var username
//     firsname: prenom
//     lastname: nom
//     console.log(prenom, nom)
// }
// ajoutU("julien", "delusseau")

// TOUR III
// var users = [
//   {
//     firstname = 'laurent'
//   },
//   {
//     firstname = 'david'
//   },
//   {
//     firstname = 'caroline'
//   }
// ]
// function ajoutU(array)
// var a=[]
// // {
// //   var username
// //     firsname: prenom
    
// //     console.log(prenom, nom)
// // }


// var ok = "nom déja present,merci d'en choisir un autre" ;
// ;
//   for (var i = 0; i < users.firtsname; i++) {
//     if (users[i] === "laurent", "david","caroline") {
//       ok = "nom déja present,merci d'en choisir un autre" ;
//     }
//   }
//   console.log(ok);
//   return correct;
// ajoutU("julien", "delusseau")

// }// Créer une fonction, qui prend en paramètre un prénom
// et qui va ajouter un nouvel utilisateur, avec son prénom, dans cet array
// Afficher ensuite l'array dans le terminal.
// Attention, si le prénom est déjà présent, afficher à la place:
// "Prénom déjà présent, merci d'en choisir un autre"

// TOUR IV
// var basket = [
//   {
//     product: 'shoes',
//     price: 99
//   },
//   {
//     product: 'jean',
//     price: 44
//   },
//   {
//     product: 'glasses',
//     price: 135
//   }
// ]

// A l'aide de cet array
// Créer un code qui va afficher de manière dynamique:
// Vous avez ... éléments dans votre panier, ce qui vous coutera ... euros.

// TOUR V
// Créer un array avec plusieurs chiffres/nombres de votre choix
// ex: ([1, 7, 3, 53])
// Créer une fonction qui nous multipliera les valeurs
// les unes à la suite des autres, puis afficher le résultat.
// résultat attendu: [1, 7, 3, 53] => 1 * 7 * 3 * 53 = 1113

// var array = [1, 7, 3, 53]
// function multi() {
//   var result = 1
//   for (var z = 0; z < array.length; z++) {
//     result *= array[z]
//   }
//   console.log(result)
// }

// var array = [4, 7, 3, 53]
// function multi() {
//   var result = array[0]
//   for (var z = 1; z < array.length; z++) {
//     result *= array[z]
//   }
//   console.log(result)
// }
// multi()

// TOUR VI
// Créer une fonction qui prend 2 nombres en paramètres (x, y)
// tout en sachant que x DOIT être inférieur à y
// Grâce à cette fonction, retourner un array, comprenant tous les nombres
// entre ces 2 paramètres (y compris les paramètres!)
// exemple: x = 3; y = 9
// résultat attendu: [3, 4, 5, 6, 7, 8, 9]

// unction suite(x, y) {
//     var tableauFinal = []
//     for (var i = x; i <= y; i++) {
//       tableauFinal.push(i)
//     }
//     console.log(tableauFinal)
//   }
// //   ou
//   function suite(x, y) {
//     var tableauFinal = [x]
//     for (var i = 0; i < y - x; i++) {
//       tableauFinal.push(x + i + 1)
//     }
//     console.log(tableauFinal)
//   }
  
//   suite(1, 10)



// TOUR VII
// Créer un array avec plusieurs chiffres/nombres de votre choix
// ex: ([4, 6, 2, 122, 9, 63])
// Créer une fonction qui nous indiquera le nombre le plus petit, ainsi que le plus grand
// Et affichera le résultat dans la console:
// résultat attendu: Le plus petit nombre est ... et le plus grand est ...


// TOUR VIII
// Créer une fonction qui va remplacer tous les '.' d'une String par des '!'
// ex: "Bonjour. J'adore l'algorithmie. Mon prof est d'ailleurs génial."
// résultat attendu: "Bonjour! J'adore l'algorithmie! Mon prof est d'ailleurs génial!"

// TOUR IX
// Rappel: mettre en majuscule => .toUpperCase()
// Créez une fonction qui prendra en paramètre un prénom
// Cette fonction décidera pour chaque caractère si
// ce caractère sera en majuscule ou minuscule
// ex: random('julien') => jUlIEn

// TOUR X
// Créer une fonction, qui prendra 2 nombres en paramètre, et qui va afficher dans le terminal
// un nombre aléatoire entre 1 et le 1er paramètre
// Elle calculera ce nombre un nombre aléatoire de fois, entre 1 et le 2ème paramètre
// Attention: ne créer AUCUNE variable
