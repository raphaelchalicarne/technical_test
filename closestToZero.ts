function closestToZero(array:number[]) {
    var closest = 0;
    /*
    J'ai choisi de ne pas vérifier le type d'array fourni en entrée car il est indiqué dans ma fonction via TypeScript.
    */
    if (array == undefined) {
        closest; // A ce niveau là, soit array est bien un array, soit 0 est renvoyé.
    } else if (array.length == 0) {
        closest; // A ce niveau là, si array est vide, 0 est renvoyé
    } else {
        /*
        On utilise reduce pour parcourir l'array de gauche à droite.
        On compare pour chaque élement 'integer' de l'array sa valeur absolue à celle de 'closestInteger'.
        Si 'integer' est plus grand en valeur absolue que 'closestInteger', on passe à l'élément suivant.
        Sinon, si 'integer' et 'closestInteger' sont de même valeur absolue, on choisit le plus grand (donc le terme positif).
        Enfin, si 'integer' est plus petit que 'closestInteger' en valeur absolue, on affecte la valeur de 'integer' à 'closestInteger'.
        */
        closest = array.reduce((closestInteger:number, integer:number) => Math.abs(integer) > Math.abs(closestInteger) ? closestInteger : Math.abs(integer) == Math.abs(closestInteger) ? Math.max(integer, closestInteger): integer);
    }
    return closest;
}


var a =[8, 5, 10];
var b = [5, 4, -9, 6, -10, -1, 8];
var c = [8, 2, 3, -2];
var d = [2, 0];

var empty_array = [];
var u;
var u_bis = undefined;
var e = [8, -2, 3, 2];
var f = [7];
var g = [-6];
var h = [0];
var l = [-1.6, 2.4, 0.9, -0.76];


console.log(closestToZero(a)); //5
console.log(closestToZero(b)); //-1
console.log(closestToZero(c)); //2
console.log(closestToZero(d)); //0

console.log(closestToZero(empty_array)); //0
console.log(closestToZero(u)); //0
console.log(closestToZero(u_bis)); //0
console.log(closestToZero(e)); //2
console.log(closestToZero(f)); //7
console.log(closestToZero(g)); //-6
console.log(closestToZero(h)); //0
console.log(closestToZero(l)); //-0.76