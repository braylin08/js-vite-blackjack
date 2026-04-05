

/**
 * Esta función me permite tomar una carta del deck
 * @param {Array<string>} recibe el deck
 * @returns devuelve la carta 
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}