function displayPage(pageNumber) {
    // gets the pc from the local storage
    const pc = globalPc;
    const page = pc.boxes[pageNumber - 1];
    clearPage();
    // loop through all buttons from the page
    for (let index = 0; index < 30; index++) {
        const aPokemon = page.pokemon[index];
        const button = document.getElementById(index);
        // check if the pokemon is undefined
        // i.e. the slot is empty
        if (aPokemon !== undefined) {
            const image = document.createElement('img')
            image.src = getAssetFile(aPokemon);
            button.appendChild(image);
        }
    }
}

function clearPage() {
    for (let index = 0; index < 30; index++) {
        const aButton = document.getElementById(index);
        if (aButton.hasChildNodes()) {
            const image = aButton.firstChild;
            aButton.removeChild(image);
        }
    }

}

function getAssetFile(pokemon) {
    let dexNumber = pokemon.ndex.toString();
    if (dexNumber.length < 3) {
        if (dexNumber.length < 2) {
            dexNumber = '00' + dexNumber;
        } else {
            dexNumber = '0' + dexNumber;
        }
    }
    const filePath = '../assets/pokemon/' + dexNumber + '.png';
    return filePath;
}
