let button = document.querySelector('button');
let liste = document.querySelector("#shop-items");


function handleClickButton(evt) {

    var item = document.querySelector("#shop-item-input").value;
    console.log(item);

    evt.preventDefault();
        

    // Si l'input n'est pas vide, int (ptit bonus dans le bonus)
    if(item != 0) {
    let newListItem = document.createElement( "li" );
    newListItem.textContent = item;
    liste.appendChild( newListItem );
    }

    else{
        console.log('Entrer un aliment');
    }

}

function logReset() {
    console.log("ça marche !");
}

button.addEventListener( 'click', handleClickButton,);

var item = document.querySelector("#shop-item-input");
item.addEventListener('reset', logReset);
