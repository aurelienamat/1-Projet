const formInputInscription = document.getElementById('form-input-inscription');

const formInscription = document.getElementsByClassName("form-inscription");
const formConnexion = document.getElementsByClassName("form-connexion");


// BOUTONS
const connexionBtn = document.getElementById('connexion-btn');
const inscriptionBtn = document.getElementById('inscription-btn');

const voirInscription = document.getElementById('form-btn-plus');
const voirMoinsInscription = document.getElementById('form-btn-moins');



// LOAD DE LA PAGE 
window.addEventListener('DOMContentLoaded', () => {
    //COndition de si il est connecté avec token

    //SI non => se connecter
    //Crer un efonction plus tard afficher inscription possible

    // formInputInscription.style.display = 'none';
    // inscriptionBtn.style.display = 'none';
    // voirMoinsInscription.style.display = 'none';

    console.log(formInscription.length)

    for(let i = 0; i < formInscription.length; i++){
        formInscription[i].style.display = 'none';
    }

    
})


voirInscription.addEventListener('click', () => {

    for(let i = 0; i < formInscription.length; i++){
        formInscription[i].style.display = 'flex';
    }

    for(let i = 0; i < formConnexion.length; i++){
        formConnexion[i].style.display = 'none';
    }

})

voirMoinsInscription.addEventListener('click', () => {

    for(let i = 0; i < formInscription.length; i++){
        formInscription[i].style.display = 'none';
    }

    for(let i = 0; i < formConnexion.length; i++){
        formConnexion[i].style.display = 'flex';
    }

})