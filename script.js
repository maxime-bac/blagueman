// Récupération des éléments HTML
const blagueTexte = document.getElementById('blague-text');
const blaguesReponses = document.getElementById('blague-reponse');
const suivantBtn = document.getElementById('suivant-btn');
const canvas = document.querySelector('#confetti-canvas');

// Initialisation des variables
let indexBlague = 0;
let blagues = [];

// Récupération des données de blague depuis le fichier JSON
fetch('blagues.json')
    .then(response => response.json())
    .then(data => {
        blagues = data.blagues;
        afficherBlague();
    })
    .catch(error => console.error(error));

// Fonction pour afficher la blague
function afficherBlague() {
    blagueTexte.textContent = blagues[indexBlague].blague;
    blaguesReponses.textContent = blagues[indexBlague].reponse;
    // Générer un index aléatoire entre 0 et la longueur des blagues - 1
    indexBlague = Math.floor(Math.random() * blagues.length);
    blagueTexte.textContent = blagues[indexBlague].blague;
    blaguesReponses.textContent = blagues[indexBlague].reponse;
}

// Écouteur d'événement pour le bouton "Suivant"
suivantBtn.addEventListener('click', () => {
    // Incrémenter l'index de blague
    indexBlague++;

    // Si on arrive à la fin des blagues, revenir au début
    if (indexBlague >= blagues.length) {
        indexBlague = 0;
    }

    // Afficher la blague suivante
    afficherBlague();
    var myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
      });
      myConfetti({
        particleCount: 160,
        spread: 160
      });
      blaguesReponses.style.animation = "200ms linear ReponseQnnim";
});

setTimeout(function() {
    document.getElementById("blague-reponse").classList.remove("joke-reponse");
  }, 3000);



//   btn.addEventListener('click', onButtonClick);

//   // Sélection de l'élément .block-container .reponse
// var reponseBlock = document.querySelector('.block-container reponse');

// // Ajout d'un événement pour détecter le survol de la souris
// reponseBlock.addEventListener('mouseover', function() {
//   // Sélection de tous les éléments p à l'intérieur de l'élément .reponse
//   var paragraphs = reponseBlock.getElementsByTagName('p');

//   // Modification de la couleur du texte des éléments p en noir
//   for (var i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = 'black';
//   }
// });

// // Ajout d'un événement pour détecter la sortie de la souris
// reponseBlock.addEventListener('mouseout', function() {
//   // Sélection de tous les éléments p à l'intérieur de l'élément .reponse
//   var paragraphs = reponseBlock.getElementsByTagName('p');

//   // Rétablissement de la couleur du texte des éléments p à leur valeur par défaut
//   for (var i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = 'white';
//   }
// });