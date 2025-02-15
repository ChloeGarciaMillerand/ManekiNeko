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

// récupérer la valeur de l'input réponse

const form = document.getElementById('game-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = event.target.elements["object-price"];
    console.log(input.value);
});
