var countYes = 0;
var countNo  = 0;

// La function pofpof, comme elle est appellée par un événement
// elle reçoit automatiquement un paramètre qui contient des infos sur l'événement
// (qu'on comme comme on veux, par convention evt/event)
function handleClickButton( evt )
{
    // Je récupère mes deux compteurs
    let counterYes = document.querySelector("#counter-yes");
    let counterNo  = document.querySelector("#counter-no");

    // Arrivé ici, je ne sais pas (encore) quel élément a déclenché l'appel a cette fonction

    // evt va contenir des informations sur l'évenement et notamment
    // quel élement a été cliqué
    console.log( evt );

    // Pour récupérer cet élément (du DOM) cliqué, on utilise 
    let clickedButton = evt.currentTarget;

    // Si jamais on a besoin d'empêcher le navigateur
    // de faire une action par défaut (par exemple suivre un lien <a>)
    // ou encore soumettre un <form>
    evt.preventDefault();

    console.log( clickedButton );

    // Maintenant que je sais sur quel bouton j'ai cliqué, je fais une condition
    if( clickedButton.id === "yes" )
    {
        countYes++;
    }
    else
    {
        countNo++;
    }

    // Dans tout les cas, je m'assure que les deux compteurs affichent
    // les valeurs a jour de countYes et countNo (même si l'une n'a pas changé)
    counterYes.textContent = countYes;
    counterNo.textContent  = countNo;    
}

// Etape 1 : je récupère mes boutons
let buttonYes = document.querySelector("#yes");
let buttonNo  = document.querySelector("#no");

// Etape 2 : j'ajoute les écouteurs d'événement
buttonYes.addEventListener( 'click', handleClickButton );
buttonNo.addEventListener( 'click',  handleClickButton );