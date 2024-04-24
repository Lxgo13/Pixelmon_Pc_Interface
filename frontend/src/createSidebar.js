document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById("sidebar");

    for (let index = 0; index < 6; index++) {
        const buttonElement = document.createElement("button");
        buttonElement.id = "party_" + index;
        buttonElement.className = "rounded-xl size-10 bg-gray-50 mb-4  flex justify-center items-center";
        sidebar.appendChild(buttonElement);
    }
});

