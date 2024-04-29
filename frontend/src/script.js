document.addEventListener('DOMContentLoaded', function () {
    addButtons2Pc1();
    createCombatStatsHeader();
    createCombatStats();
    checkForAvailablePc();
});

// variable 2 acces the pc, boxes and pokemon used over the whole frontend
let globalPc;

function checkForAvailablePc() {
    const pc = window.localStorage.getItem('pc');

    if (pc !== null) {
        // pc is already saved in local storage
        globalPc = JSON.parse(pc);
        //TODO: switch the 1 to global function GetCurrentPage();
        displayPage(getCurrentPageNumber());

    } else {
        // sets the globalPc to null, for later checks
        globalPc = null;
    }
}

function showStatsFromPokemon(pageNumber, pokemonNumber) {
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
    }
}
function displaySize(thePokemonSize){
    const theSizeAsString = getSizeName(thePokemonSize);
    const theParagraph = document.getElementById('size');
    theParagraph.innerText = theSizeAsString;

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


function OnPcItemClicked(e) {
    e.stopPropagation();
    const buttonID = this.id;
    showStatsFromPokemon(getCurrentPageNumber(), parseInt(buttonID));
}

function createStatsParagraph(containerName, paragraphText) {
    const container = document.getElementById(containerName);
    const paragraph = document.createElement("p");
    paragraph.innerHTML = paragraphText;
    paragraph.className = "flex justify-center";
    container.appendChild(paragraph);

}
function createCombatStatsLine(containerName, statName, idName) {
    const container = document.getElementById(containerName);
    const nameParagraph = document.createElement("p");
    let paragraphID;
    if (idName !== undefined) {
        paragraphID = idName;
    } else {
        paragraphID = statName;
    }
    nameParagraph.id = paragraphID;
    nameParagraph.innerHTML = statName;
    container.appendChild(nameParagraph);
    container.appendChild(createPForStats(statName + "_Stat"));
    container.appendChild(createPForStats(statName + "_IV"));
    container.appendChild(createPForStats(statName + "_EV"));
}

function createCombatStats() {
    createCombatStatsLine("combatStats", "HP");
    createCombatStatsLine("combatStats", "Attack");
    createCombatStatsLine("combatStats", "Defense");
    createCombatStatsLine("combatStats", "Sp. Atk", 'SpecialAttack');
    createCombatStatsLine("combatStats", "Sp. Def", 'SpecialDefense');
    createCombatStatsLine("combatStats", "Speed");
}
function createPForStats(id) {
    const paragraph = document.createElement("p");
    paragraph.className = "flex justify-center";
    paragraph.id = id;
    return paragraph;
}

function createCombatStatsHeader() {
    const containerName = "combatStats";
    createStatsParagraph(containerName, "");
    createStatsParagraph(containerName, "Stats");
    createStatsParagraph(containerName, "IV");
    createStatsParagraph(containerName, "EV");
}


function addButtons2Pc1() {
    // Variables
    const numberOfButtons = 30;
    const container = document.getElementById("pc1");

    // Loop to create buttons
    for (let i = 0; i < numberOfButtons; i++) {

        // Create a new button element
        const button = document.createElement('button');
        button.className = "bg-gray-200 size-10 flex justify-center items-center rounded-md";
        button.id = i;

        // Event needed to display the pokemon stats
        button.addEventListener('click', OnPcItemClicked);

        // Add button to the container
        container.appendChild(button);
    }
}

