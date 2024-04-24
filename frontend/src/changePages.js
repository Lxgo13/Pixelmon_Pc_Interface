document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('beforeText').addEventListener('click', function (e) {
        e.stopPropagation();
        var currentPage = document.getElementById("currentPage").innerText.substring(5);
        if (currentPage > 1) {
            document.getElementById("currentPage").innerText = "Page " + (parseInt(currentPage) - 1);
            // TODO: get new page by index
        }
        else {
            document.getElementById("currentPage").innerText = "Page " + 30;
        }
        // refresh page
    });

    document.getElementById('afterText').addEventListener('click', function (e) {
        e.stopPropagation();
        var currentPage = document.getElementById("currentPage").innerText.substring(5);
        if (currentPage < 30) {
            const newPage = (parseInt(currentPage) + 1);
            document.getElementById("currentPage").innerText = "Page " + newPage;
            displayPage(newPage);
        } else {
            document.getElementById("currentPage").innerText = "Page " + 1;
        }
        // refresh page
    });
});

window.electronAPI.onFileLoaded(value => {
    window.localStorage.setItem('pc', value);
})
