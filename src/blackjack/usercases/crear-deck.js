import _ from 'underscore';

// export const miNombre = 'braylin'; y esta se esta exportando independientemente  




// Esta función crea un nuevo deck se esta esportando por defecto 
/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas ejemplo ['C','D','H','S']
 * @param {Array<String>} cartasEspeciales ejemplo ['A','J','Q','K']
 * @return {Array<String>} retorna un nuevo deck de cartas 
 */
export const crearDeck = (tiposDeCartas,cartasEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length < 0 ) throw new error('tipo de carta es obligatorio como un arreglo de string []');
    if (!cartasEspeciales || cartasEspeciales.length < 0 ) throw new error('tipo de carta es obligatorio como un arreglo de string []');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of cartasEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
};


// export default crearDeck