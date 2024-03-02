var checkteacher = document.querySelector(".checkteacher") //查询
var buttonSent = document.querySelector(".buttonText") //发送
var inputType = document.querySelector(".requestType") //事务类型
var inputText = document.querySelector(".studentTextarea") //留言
//查询框设置
checkteacher.onclick = function () {
    if (checkteacher.value === "教师账号") {
        checkteacher.value = ""
        checkteacher.style.color = "black"
    }
    if (checkteacher.value !== "教师账号") {
        checkteacher.style.color = "black"
    }
}
checkteacher.onblur = function () {
    if (checkteacher.value === "") {
        checkteacher.value = "教师账号"
        checkteacher.style.color = "#767272"
    }
    if (checkteacher.value !== "") {
        checkteacher.style.color = "#767272"
    }
}
//发送按钮
buttonSent.onclick = function () {
    if (checkteacher.value === '' || inputType.value === '' || inputText.value === '' || checkteacher.value === "教师账号") {
        alert("发送失败，请输入完整")
    } else {
        //发送请求模块
    }
}