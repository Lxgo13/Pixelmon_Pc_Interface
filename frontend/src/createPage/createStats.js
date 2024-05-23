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
export function createCombatStats() {
createCombatStatsHeader();
    createCombatStatsLine("combatStats", "HP");
    createCombatStatsLine("combatStats", "Attack");
    createCombatStatsLine("combatStats", "Defense");
    createCombatStatsLine("combatStats", "Sp. Atk", 'SpecialAttack');
    createCombatStatsLine("combatStats", "Sp. Def", 'SpecialDefense');
    createCombatStatsLine("combatStats", "Speed");
}