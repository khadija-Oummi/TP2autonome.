const produits =[
    {id:1, nom:'clavier',categorie:'Acessoires',prix:120,stock:5},
      {id:2, nom:'souris',categorie:'Acessoires',prix:80,stock:8},
        {id:3, nom:'Ecran',categorie:'informatique',prix:900,stock:0},
          {id:4, nom:'casque',categorie:'Acessoires',prix:240,stock:3},
];
const lignes= produits.map((p) => {
    return `${p.nom} - ${p.prix}`;
});
for(const ligne of lignes) {
console.log(ligne);
}

const stocke=produits.map((p) => p.stock);
const nombreproduit =produits. filter((p) => p.stock > 0 );
console.log(nombreproduit.length , "produits disponibles");


const produit=produits.map((p)=> ({
total: p.prix * p.stock }));    
const Somme= produits.reduce((total,p) =>
 p.prix * p.stock +total ,0);
console.log( "Somme :" ,Somme,"MAD");


if (produits.length === 0) {
 console.log("n'est pas disponible");}
 else {
let min = produits[0].prix;
let nom = produits[0].nom;
 for (const ligne of produits) {
 if (ligne.prix < min) {
min = ligne.prix;
nom= ligne.nom;
}}
console.log(" prix minimal:",nom, "prix:",min );
}

const ligne = produits.map(
  p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
console.log(ligne);

function estValide(produit) {
 return Number.isFinite(produit.stock) &&
 produit.stock >= 0 &&
 Number.isFinite(produit.prix) &&
 produit.prix >= 0;
}



const produitCher = nombreproduit.reduce((min, p) => {
    return p.prix < min.prix ? p : min;
});
const { nom, categorie, prix, stock } = produitCher;
console.log(`Le produit disponible le moins cher est ${nom},
   catégorie : ${categorie}, prix : ${prix} MAD,
   stock : ${stock} unités.`);




