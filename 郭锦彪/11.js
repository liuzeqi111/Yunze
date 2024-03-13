var checkteacher = document.querySelector(".checkteacher") //查询
var buttonSent = document.querySelector(".buttonText") //发送
var inputType = document.querySelector(".requestType") //事务类型
var inputText = document.querySelector(".studentTextarea") //留言
//查询框设置
var question = document.querySelector('.question')
question.onclick = () => {
    // alert('功能还在开发中......')
    Swal.fire("功能还在开发中......");
}
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
var pare = window.opener;
var id = pare.document.querySelector('.id')
buttonSent.onclick = function () {
    if (checkteacher.value === '' || inputType.value === '' || inputText.value === '' || checkteacher.value === "教师账号") {
        // alert("发送失败，请输入完整")
        Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "发送失败，请输入完整",
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
    } else {
        //发送请求模块
        let data = {
            't_id': checkteacher.value,
            's_id': id.value,
            'type': inputType.value,
            'liuyan':inputText.value
        }
        axios.post('http://127.0.0.1:9000/fa', Qs.stringify(data))
            .then((res) => {
                if (res.data == 'yes') {
                    // alert('留言已发送')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "留言已发送",
                        showConfirmButton: false,
                        timer: 1500
                    });
            }
        })
    }
}
