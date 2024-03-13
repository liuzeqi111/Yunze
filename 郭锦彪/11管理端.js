var checkteacherS = document.querySelector(".checkteacherS")
var question = document.querySelector('.question')
question.onclick = () => {
    alert('功能还在开发中......')
}
var buttonSent = document.querySelector(".buttonText") //发送
var inputType = document.querySelector(".requestType") //事务类型
var inputText = document.querySelector(".studentTextarea") //留言
//发送按钮
buttonSent.onclick = function () {
    if (checkteacherS.value === '' || checkteacherS.value === "教师账号") {
        alert("发送失败，请输入完整")
    } else {
        //发送请求模块
        let data = {
            's_id':checkteacherS.value
        }
        axios.post('http://127.0.0.1:9000/shou', Qs.stringify(data))
            .then((res) => {
                checkteacherS.value = res.data[1];
                inputType.value = res.data[2];
                inputText.value=res.data[3]
                console.log(res.data)
        })
    }
}