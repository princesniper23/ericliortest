// Tableau de blagues (chaîne de caractères, chaque élément séparé par une virgule)
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
    "Quel est le comble pour un menteur ? De dire la vérité et que personne ne le croit !",
    "Pourquoi les scientifiques ne font-ils pas confiance aux atomes ? Parce qu'ils composent tout.",
    "J'ai dit à ma femme qu'elle dessinait ses sourcils trop haut. Elle avait l'air surprise.",
    "Pourquoi l'épouvantail a-t-il gagné un prix ? Parce qu'il était exceptionnel dans son domaine.",
    "Les lignes parallèles ont tellement de choses en commun… dommage qu'elles ne se rencontrent jamais.",
    "J'ai demandé au bibliothécaire si la bibliothèque avait des livres sur la paranoïa. Il a chuchoté : 'Ils sont juste derrière toi…'",
    "Pourquoi les squelettes ne se battent-ils pas entre eux ? Parce qu'ils n'ont pas de tripes.",
    "Je jouais du piano à l'oreille, mais maintenant j'utilise mes mains.",
    "Pourquoi le livre de maths avait-il l'air triste ? Parce qu'il avait trop de problèmes.",
    "J'ai dit à mon ordinateur que j'avais besoin d'une pause, et maintenant il ne cesse de m'envoyer des Kit-Kats.",
    "Pourquoi ton nez ne peut-il pas mesurer 30 centimètres ? Parce qu'alors ce serait un pied.",
    "Je lis un livre sur l'anti-gravité. Il est impossible à poser.",
    "Pourquoi le vélo est-il tombé ? Parce qu'il était trop fatigué.",
    "J'ai dit à mon chien de s'asseoir, et il a répondu : 'Je ne peux pas, je suis déjà couché.'",
    "Pourquoi les huîtres ne donnent-elles pas à des associations ? Parce qu'elles sont coquilles (égoïstes).",
    "Je détestais la barbe… mais elle a fini par me pousser.",
    "Pourquoi le golfeur a-t-il apporté deux pantalons ? Au cas où il ferait un trou en un.",
    "J'ai dit à mon patron que trois entreprises me poursuivaient, donc j'avais besoin d'une augmentation. En vérité, c'était juste le gaz, l'eau et l'électricité.",
    "Pourquoi la tomate a-t-elle rougi ? Parce qu'elle a vu la salade se déshabiller.",
    "Pourquoi les programmeurs n'aiment-ils pas la nature ? Trop de bugs.",
    "J'ai dit à mon téléphone qu'il devait perdre du poids. Maintenant il est en mode avion.",
    "Pourquoi le café a-t-il porté plainte ? Parce qu'il s'est fait agresser (mugged).",
    "Pourquoi la poule est-elle allée à la séance de spiritisme ? Pour parler à l'autre côté.",
    "Pourquoi les vaches n'ont-elles pas d'argent ? Parce que les fermiers les vident.",
    "J'ai raconté 10 blagues à mon ami pour le faire rire. Malheureusement, aucune n'a marché.",
    "Pourquoi l'homme a-t-il mis son argent dans le mixeur ? Il voulait des liquidités.",
    "Pourquoi le stade est-il devenu chaud après le match ? Tous les fans étaient partis."
];

// Fonction pour afficher une blague aléatoire
function displayRandomJoke() {
    if (!Array.isArray(jokes) || jokes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById('joke');
    if (jokeElement) jokeElement.textContent = jokes[randomIndex];
}

// Événement au clic du bouton (avec vérification que l'élément existe)
const nextBtn = document.getElementById('nextButton');
if (nextBtn) nextBtn.addEventListener('click', displayRandomJoke);

// Afficher une blague au chargement de la page
window.addEventListener('load', displayRandomJoke);
