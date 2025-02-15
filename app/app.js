const objects =[
    {
        name: "Teddy Bear",
        price: 12,
        imageUrl: "./svg/bear.svg"
    },
    {
        name: "Candy",
        price: 4,
        imageUrl: "./svg/candy.svg"
    },
    {
        name: "Puzzle",
        price: 9,
        imageUrl: "./svg/puzzle.svg"
    }
];

/*
for (let object of objects) {
    console.log(object.imageUrl);
};
*/

// variable qui indique à quel index du tableau objet chercher la valeur:
let indexObject = 0;

// stocker la valeur de l'input dans numberUser
let numberUser;

const form = document.getElementById('game-form');

// ajouter un écouteur d'événément à la soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let input = event.target.elements["object-price"];
    numberUser = parseInt(input.value);
    console.log(numberUser);

    // comparer la valeur de l'input à celle de l'objet
    if (numberUser === objects[indexObject].price) {
        console.log("trouvé!");
    } else {
        console.log("perdu!");
    }
});
