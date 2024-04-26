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
    const theName = document.getElementById('dexNumber');
    theName.innerText = 'No. '+clickedPokemon.ndex;
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
function createCombatStatsLine(containerName, statName) {
    const container = document.getElementById(containerName);
    const nameParagraph = document.createElement("p");
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
    createCombatStatsLine("combatStats", "Sp. Atk");
    createCombatStatsLine("combatStats", "Sp. Def");
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

