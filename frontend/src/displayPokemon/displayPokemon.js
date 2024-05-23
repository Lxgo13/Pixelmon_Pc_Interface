function setPokeball(thePokeballName) {
    const pokeballImage = document.getElementById('pokeball');
    pokeballImage.src = '../assets/pokeballs/' + thePokeballName + '.png';
}
function setName(name){
    document.getElementById('pokemonName').innerText = name;
    document.getElementById('customName').innerText = name;

}
function displaySize(thePokemonSize) {
    const theSizeAsString = getSizeName(thePokemonSize);
    const theParagraph = document.getElementById('size');
    theParagraph.innerText = theSizeAsString;
}
function setTypes(types) {
    const typesdiv = document.getElementById('types');
    if (typesdiv.hasChildNodes()) {
        while (typesdiv.firstChild) {
            typesdiv.removeChild(typesdiv.firstChild);
        }
    }

    types.forEach(element => {
        const image = document.createElement('img');
        image.classList = "size-8";
        image.src = '../assets/types/' + element + ".png";
        typesdiv.appendChild(image);
    });
}
function setGender(id) {
    // <img id="gender" src="../Assets/Gender/male.svg" class="size-5">
    let image = document.getElementById('gender');
    // image does not exist
    // standart, or last click was none gender
    if (image === null) {
        // create image and add 
        image = document.createElement('img');
        image.id = 'gender';
        image.className = 'size-5';


    }
    let gender;
    switch (id) {
        // male
        case 0:
            gender = 'male';
            break;
        // female
        case 1:
            gender = 'female';
            break;
        // none gender, legendaries etc.
        case 2:
            gender = null;
            break;
    }
    if (gender !== null) {
        image.src = '../assets/gender/' + gender + '.svg';
        // div
        const div = document.getElementById('nonCombatStats');
        div.appendChild(image);

    }
    else {
        if (image !== null) {
            image.remove();
        }
    }
}
function setStats(theClickedPokemon) {
    const statsDiv = document.getElementById('combatStats');
    // 1 = Stats, 2 = IV, 3 = EV
    // 4 = HP, 8 = Attack, always +4...
    for (let currentColumn = 1; currentColumn <= 3; currentColumn++) {
        let currentStatType = statsDiv.children[currentColumn].innerText;
        let currentStat;
        // 
        for (let currentRow = 4; currentRow <= 24; currentRow += 4) {

            currentStat = statsDiv.children[currentRow].id;
            const theStatValue = theClickedPokemon[currentStatType + currentStat];

            const currentCell = statsDiv.children[currentRow + currentColumn];
            currentCell.innerText = theStatValue;
        }
    }
}
function getSizeName(id) {
    let sizeName;
    switch (id) {
        case 0:
            sizeName = "Pygmy";
            break;
        case 1:
            sizeName = "Runt";
            break;
        case 2:
            sizeName = "Small";
            break;
        case 3:
            sizeName = "Ordinary";
            break;
        case 4:
            sizeName = "Huge";
            break;
        case 5:
            sizeName = "Giant";
            break;
        case 6:
            sizeName = "Enormous";
            break;
        case 7:
            sizeName = "Ginormous";
            break;
        case 8:
            sizeName = "Microscopic";
            break;
        default:
            sizeName = "Unknown Size";
            break;
    }
    return sizeName;
}
export function showStatsFromPokemon(globalPc,pageNumber, pokemonNumber) {
    const clickedPokemon = globalPc.boxes[pageNumber - 1].pokemon[pokemonNumber];
    // clicked pc item is empty no pokemon in the clicked slot
    if (clickedPokemon === null) {
        // TODO: emtpy the stats
    } else {
        const theName = document.getElementById('dexNumber');
        theName.innerText = 'No. ' + clickedPokemon.ndex;
        setPokeball(clickedPokemon.CaughtBall);
        setGender(clickedPokemon.Gender);
        setStats(clickedPokemon);
        displaySize(clickedPokemon.Growth);
        setTypes(clickedPokemon.types);
        setName(clickedPokemon.name);
    }
}