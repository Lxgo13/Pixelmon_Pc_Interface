
function displayPage(pageNumber) {
    const pc = JSON.parse(window.localStorage.getItem('pc'));
    const page = pc.boxes[pageNumber];
    for (var index = 0; index < 30; index++) {
        const aPokemon = page.pokemon[index];
        const button = document.getElementById(index);
        if (aPokemon !== undefined) {
            const image = document.createElement('img')
            image.src = getAssetFile(aPokemon);
            button.appendChild(image);
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
