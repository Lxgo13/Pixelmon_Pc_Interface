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
        displayPage(newPage);
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
        displayPage(newPage);
    });
});

function getCurrentPageNumber() {
    const currentPage = document.getElementById("currentPage").innerText.substring(5);
    return parseInt(currentPage);

}


window.electronAPI.onFileLoaded(value => {
    window.localStorage.setItem('pc', value);
})
