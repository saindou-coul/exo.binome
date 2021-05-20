// Exercice I
var tableau = [
  {
    id: 0,
    product: 'shoes',
    price: 70
  },
  {
    id: 1,
    product: 'screen',
    price: 90
  },
  {
    id: 2,
    product: 'playstation V',
    price: 499
  },
  {
    id: 3,
    product: 'jean',
    price: 50
  },
 ]
var result= 0
  for ( var i=0; i<tableau.length;  i++ )
{
result += tableau[i].price
}
console.log(result)


// Créer un code, qui va calculer le prix total de ces objets

// Exercice II
// Créer une fonction, qui va nous afficher l'objet le moins cher
function tab()

{ 
  var ok=tableau[0].price
  for ( var i= 0; i<tableau.length; i++)
  {
  if (tableau[i].price< ok ){ 
    ok=tableau[i].price
  }
}
console.log(ok)
}

tab()

// Exercice III
// Créer une fonction qui va ajouter la clé 'stock' a tous les objets
// Et ajoutera comme valeur, de façon aléatoire: true or false
function cle()
{ 
for ( var i=0; i<tableau.length; i++){
  var all=Math.round(Math.random())
  if (all )


}
}
cle()

// Exercice IV
// A l'aide de l'exercice précédent
// Afficher dans le terminal les objets seulement en stock

// ---------------------------------------------------------------------

// var musics = [
//   {
//     id: 0,
//     group: 'Muse',
//     song: 'Starlight',
//     rate: '5 / 10'
//   },
//   {
//     id: 1,
//     group: 'Spiderbait',
//     song: 'Black Betty',
//     rate: '9 / 10'
//   },
//   {
//     id: 2,
//     group: 'Franz Ferdinand',
//     song: 'Take me out',
//     rate: '7.5 / 10'
//   }
// ]

// Exercice V
// A l'aide du tableau musics
// Créer une fonction qui va choisir un objet de façon aléatoire
// Puis lui ajouter la clé "award: true"

// Exercice VI
// A l'aide du tableau musics
// Afficher dans le terminal la musique la mieux notée
// Indices : ".split()" et "parseInt()"
