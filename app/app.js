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

// variable qui indique à quel index du tableau objet chercher la valeur:
let indexObject = 0;

// stocker la valeur de l'input dans numberUser
let numberUser;

// stocker les indices
let hints = [];

// comparer la valeur de l'input à celle de l'objet et passe à l'objet suivant
function compareValues() {

    const hintsContainer = document.getElementById('hints-list');
    hintsContainer.innerHTML = '';

    if (numberUser === objects[indexObject].price) {
        indexObject ++;
        console.log(objects[indexObject].name);
        alert('Mais oui tu as raison! Voyons l\'objet suivant!')
        changeImage();
        if (indexObject === 3) {
            alert('Merci beaucoup pour ton aide, nous avons terminé!');
        }
    } else {
        changeHintsTitle();
        if (numberUser > objects[indexObject].price) {
            hints.push("Le prix est plus petit que " + numberUser + " €.");
            printHints();
        } else if (numberUser < objects[indexObject].price) {
            hints.push("Le prix est plus grand que " + numberUser + " €.");
            printHints();
        };
    };
};

// changer l'image de l'objet
function changeImage(){
    let currentImage = document.querySelector('.object-image');
    currentImage.src = objects[indexObject].imageUrl;
    currentImage.alt = objects[indexObject].alt;
};

// ajouter un écouteur d'événément à la soumission du formulaire
const form = document.getElementById('game-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let input = event.target.elements["object-price"];
    numberUser = parseInt(input.value);

    // comparer la valeur de l'input à celle de l'objet et passe à l'objet suivant
    compareValues();

    // vider l'input
    const priceInput = document.getElementById('price-input');
    priceInput.value = "";
});


// afficher les indices
function printHints() {
    // crée un nouveau li qui contient l'indice
    const hintsContainer = document.getElementById('hints-list');
    for (hint of hints) {
        const newHint = document.createElement('li');
        newHint.textContent = hint;
        hintsContainer.appendChild(newHint);
    }
}

// change le texte initial "indice" en "indices"
function changeHintsTitle () {
    const hintsTitle = document.getElementById('hints-title');
    hintsTitle.textContent = "Indices :";
}