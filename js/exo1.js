var count = 0;

function increment( evt )
{
    // Je récupère ma span#counter
    let counter = document.querySelector( '#counter' );

    // J'incrémente mon compteur
    // count = count + 1;
    // count += 1;
    count++;

    console.log( evt );

    // Je modifie son contenu textuel
    counter.textContent = count;
}

// Je récupère mon élément
let button = document.querySelector('#button');

// Je vais lui ajouter un "écouteur d'événement"
button.addEventListener( 'click', increment );