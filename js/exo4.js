let button = document.querySelector('button');
let liste = document.querySelector("#colors-list");
let liste_error = document.querySelector("#colors-error");



function handleClickButton(evt) {

    var color = document.querySelector("#colors-input").value;

    evt.preventDefault();

    if(color.length === 4 || color.length === 7 && color != 0) {

        let newListItem = document.createElement( "li" );
        newListItem.innerHTML = "<p style=\"color:" + color +  ";\">" + color + "</p>";
        liste.appendChild( newListItem );
    }

    else{

        let newListItem = document.createElement( "li" );
        newListItem.textcontent = "Entrer une couleur";
        console.log('Entrer une couleur');
        liste_error.appendChild( newListItem );

    }

}

function logReset() {
    console.log("ça marche !");
}

button.addEventListener( 'click', handleClickButton,);

var color = document.querySelector("#colors-input");
color.addEventListener('reset', logReset);
