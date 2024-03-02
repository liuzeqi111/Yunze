var tenBos = document.querySelector(".passwordNotice")  //隐藏
var tenTrue = document.querySelector(".tenTrue") //确认按钮
var tenInputPassword = document.querySelector(".tenInputPassword") //密码框
var tenSentbtn = document.querySelector(".tenSentbtn") //复选框
tenInputPassword.onclick = function () {
    tenBos.style.display = "block"
    tenInputPassword.style.color = 'black'
}
tenInputPassword.onblur = function () {
    tenBos.style.display = "none"
    if (tenInputPassword.value === '' && tenInputPassword.value === '6-14位'){
        tenInputPassword.style.color = '#CCCCCC'
    }
}
tenTrue.onclick = function () {
    if (tenInputPassword.value !== '' && tenInputPassword.value !== '6-14位') {
        var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        var result = reg.test(tenInputPassword.value)
        if (result) {
            //修改密码
            alert("成功")
        } else {
            tenInputPassword.value = ""
            alert("失败")
        }
    } else {
        alert("请输入密码")
    }
}