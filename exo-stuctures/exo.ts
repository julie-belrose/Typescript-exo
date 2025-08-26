// exo 1
let nombres = [10, 20, 30];
nombres.push(40);
//nombres.push("cinquante"); //Argument of type 'string' is not assignable to parameter of type 'number'.

nombres.forEach(n => console.log(n * n));

// exo 2
let mixte : (number | string)[] = [1, "deux", 3];

mixte.forEach(m => {
    if (typeof m === "number") {
        console.log("Nombre : " + m);
    } else {
        console.log("Texte : " + m);
    }
});        