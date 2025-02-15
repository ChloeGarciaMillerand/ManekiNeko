const objects =[
    {
        name: "Teddy Bear",
        price: 12,
        imageUrl: "./svg/bear.svg",
        alt: "ours en peluche"
    },
    {
        name: "Candy",
        price: 4,
        imageUrl: "./svg/candy.svg",
        alt: "bonbon"
    },
    {
        name: "Puzzle",
        price: 9,
        imageUrl: "./svg/puzzle.svg",
        alt: "puzzle"
    }
];

/*
for (let object of objects) {
    console.log(object.imageUrl);
};
*/

// comparer la valeur de l'input à celle de l'objet et passe à l'objet suivant
function compareValues() {
    if (numberUser === objects[indexObject].price) {
        console.log("trouvé!");
        indexObject ++;
        console.log(objects[indexObject].name);
        changeImage();
    } else {
        console.log("perdu!");
            if (numberUser > objects[indexObject].price) {
                console.log("Hum, il me semble que c'est moins cher");
                hints.push("Le prix est plus petit que " + numberUser + " €.");
            } else if (numberUser < objects[indexObject].price) {
                console.log("Hum, il me semble que c'est plus cher");
                hints.push("Le prix est plus grand que " + numberUser + " €.");
            };
    };
};

function changeImage(){
    let currentImage = document.querySelector('.object-image');
    currentImage.src = objects[indexObject].imageUrl;
    currentImage.alt = objects[indexObject].alt;
}

// variable qui indique à quel index du tableau objet chercher la valeur:
let indexObject = 0;

// stocker la valeur de l'input dans numberUser
let numberUser;

// stocker les indices
let hints = [];

// ajouter un écouteur d'événément à la soumission du formulaire
const form = document.getElementById('game-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let input = event.target.elements["object-price"];
    numberUser = parseInt(input.value);
    console.log(numberUser);

    // comparer la valeur de l'input à celle de l'objet et passe à l'objet suivant
    compareValues();
});
