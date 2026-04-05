



//funcion de crear carta 
/**
 * 
 * @param {String} carta 
 * @param {*} asignacon 
 * @returns {HTMLImageElement} regresa la imagen de la carta
*/
export const crearCartaHtml  = (carta, asignacon) =>{


    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');


    return imgCarta;
}