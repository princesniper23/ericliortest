// Tableau de blagues
const jokes = [
    "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau !",
    "Quel est le comble pour un électricien ? De ne pas être au courant !",
    "Comment appelle-t-on un chat tombé dans un pot de peinture le jour de Noël ? Un chat-peint de Noël !",
    "Qu'est-ce qu'un crocodile qui surveille la pharmacie ? Un Lacoste-Guard !",
    "Pourquoi les poissons n'aiment pas jouer au tennis ? Parce qu'ils ont peur du filet !",
    "Quel est le comble pour une maison ? D'avoir un jardin qui ne la cultive pas !",
    "Comment s'appelle un boomerang qui ne revient pas ? Un bâton !",
    "Qu'est-ce qu'un cannibale végétarien ? Un humanitaire !",
    "Pourquoi les escargots sont lents ? Parce qu'ils transportent leur maison !",
    "Quel est le comble pour un menteur ? De dire la vérité et que personne ne le croit !"
];

// Fonction pour afficher une blague aléatoire
function displayRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = jokes[randomIndex];
}

// Événement au clic du bouton
document.getElementById('nextButton').addEventListener('click', displayRandomJoke);

// Afficher une blague au chargement de la page
window.addEventListener('load', displayRandomJoke);
