document.addEventListener('DOMContentLoaded', function () {
    displayPage(1);
    document.getElementById('beforeText').addEventListener('click', function (e) {
        e.stopPropagation();
        let currentPage = document.getElementById("currentPage").innerText.substring(5);
        let newPage;
        if (currentPage > 1) {
            newPage = (parseInt(currentPage) - 1);
            document.getElementById("currentPage").innerText = "Page " + newPage;
        }
        else {
            newPage = 30;
            document.getElementById("currentPage").innerText = "Page " + newPage;
        }
        displayPage(newPage);
    });

    document.getElementById('afterText').addEventListener('click', function (e) {
        e.stopPropagation();
        const currentPage = document.getElementById("currentPage").innerText.substring(5);
        let newPage;
        if (currentPage < 30) {
            newPage = (parseInt(currentPage) + 1);
            document.getElementById("currentPage").innerText = "Page " + newPage;
        } else {
            newPage = 1;
            document.getElementById("currentPage").innerText = "Page " + newPage;
        }
        displayPage(newPage);
    });
});

window.electronAPI.onFileLoaded(value => {
    window.localStorage.setItem('pc', value);
})
