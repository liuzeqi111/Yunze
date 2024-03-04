window.addEventListener('load', function () {
    var cube = document.querySelectorAll('.cube');
    var manager = document.querySelector('.manager');
    var student = document.querySelector('.student');
    var btn = document.querySelector('.btn');

    for (var i = 0; i < cube.length; i++) {
        cube[i].onclick = function () {
            for (var i = 0; i < cube.length; i++) {
            cube[i].style.border = '';
        }
            this.style.border = "3px solid #5768C3";
        }
    }
    
    if (manager.style.border = "3px solid #5768C3") {
        btn.onclick = function () {
            location.href = "../../裴润涵/HTML/登录(管理).html"
        }
    }else if (student.style.border = "3px solid #5768C3") {
        btn.onclick = function () {
            location.href = "../../裴润涵/HTML/登录(学生).html"
        }
    }
    
})