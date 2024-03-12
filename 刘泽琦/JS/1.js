window.addEventListener('load', function () {  
    var cubes = document.querySelectorAll('.cube');  
    var btn = document.querySelector('.btn');  
  
    cubes.forEach(function(cube) {  
        cube.onclick = function () {  
            // 移除所有 cube 的边框  
            cubes.forEach(function(otherCube) {  
                otherCube.style.border = '';  
            });  
  
            // 为被点击的 cube 添加边框  
            this.style.border = "3px solid #5768C3";  
  
            // 根据被点击的 cube 的类名设置 btn 的点击行为  
            if (this.classList.contains('manager')) {  
                btn.onclick = function () {  
                    location.href = "../../裴润涵/HTML/登录(管理).html";  
                };  
            } else if (this.classList.contains('student')) {  
                btn.onclick = function () {  
                    location.href = "../../裴润涵/HTML/登录(学生).html";  
                };  
            }  
        };  
    });  
});