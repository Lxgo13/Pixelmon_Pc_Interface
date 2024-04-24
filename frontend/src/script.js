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

        // Add button to the container
        container.appendChild(button);

    }
}
document.addEventListener('DOMContentLoaded', function () {
    addButtons2Pc1();
    createCombatStatsHeader();
    createCombatStats();
});