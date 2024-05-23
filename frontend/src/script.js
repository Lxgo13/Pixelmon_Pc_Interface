// imports
import { createCombatStats } from './createPage/createStats.js';
import { displayPage } from './displayPokemon/displayPage.js';

// variable to acces the pc, boxes and pokemon used over the whole frontend
let globalPc;

function createInterface(){
    const div = document.getElementById('pc1');
    addButtons2Div(div,30);
    createCombatStats();
    checkForAvailablePc();
}

document.addEventListener('DOMContentLoaded', createInterface);


function checkForAvailablePc() {
    const pc = window.localStorage.getItem('pc');

    if (pc !== null) {
        // pc is already saved in local storage
        globalPc = JSON.parse(pc);
        //TODO: switch the 1 to global function GetCurrentPage();
        displayPage(globalPc,getCurrentPageNumber());

    } else {
        // sets the globalPc to null, for later checks
        globalPc = null;
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
function addButtons2Div(div,amount) {

    // Loop to create buttons
    for (let i = 0; i < amount; i++) {

        // Create a new button element
        const button = document.createElement('button');
        button.className = "bg-gray-200 size-10 flex justify-center items-center rounded-md";
        button.id = i;

        // Event needed to display the pokemon stats
        button.addEventListener('click', OnPcItemClicked);

        // Add button to the container
        div.appendChild(button);
    }
}



import {showStatsFromPokemon} from './displayPokemon/displayPokemon.js'

function OnPcItemClicked(e) {
    e.stopPropagation();
    const buttonID = this.id;
    showStatsFromPokemon(globalPc,getCurrentPageNumber(), parseInt(buttonID));
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('beforeText').addEventListener('click', function (e) {
        e.stopPropagation();
        const currentPage = getCurrentPageNumber();
        let newPage;
        if (currentPage > 1) {
            newPage = currentPage - 1;
            document.getElementById("currentPage").innerText = "Page " + newPage;
        }
        else {
            newPage = 30;
            document.getElementById("currentPage").innerText = "Page " + newPage;
        }
        displayPage(globalPc,newPage);
    });

    document.getElementById('afterText').addEventListener('click', function (e) {
        e.stopPropagation();
        const currentPage = getCurrentPageNumber();
        let newPage;
        if (currentPage < 30) {
            newPage = currentPage + 1;
            document.getElementById("currentPage").innerText = "Page " + newPage;
        } else {
            newPage = 1;
            document.getElementById("currentPage").innerText = "Page " + newPage;
        }
        displayPage(globalPc,newPage);
    });
});

function getCurrentPageNumber() {
    const currentPage = document.getElementById("currentPage").innerText.substring(5);
    return parseInt(currentPage);

}

// saves the pc into the local storage after it's loaded from the backend
window.electronAPI.onFileLoaded(value => {
    window.localStorage.setItem('pc', value);
    checkForAvailablePc();
})
