window.addEventListener('load', function () {
    var cube = document.querySelectorAll('.cube');

    for (var i = 0; i < cube.length; i++) {
        cube[i].onclick = function () {
            for (var i = 0; i < cube.length; i++) {
            cube[i].style.border = '';
        }
            this.style.border = "3px solid #5768C3";
        }
    }
})