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
var pare = window.opener
var id = pare.document.getElementById('id')

tenTrue.onclick = function () {
    if (tenInputPassword.value !== '' && tenInputPassword.value !== '6-14位') {
        var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]).*$/;
        var result = reg.test(tenInputPassword.value)
        if (result) {
            //修改密码
            let data = {
                'name': id.value,
                'password':tenInputPassword.value
            }
            axios.post('http://127.0.0.1:9000/mima1',Qs.stringify(data))
                .then((res) => {
                    if (res.data == 'yes') {
                        // alert('密码重置完成')
                        Swal.fire("密码重置完成");
                }
            })
        } else {
            tenInputPassword.value = ""
            // alert("失败")
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "失败",
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
        }
    } else {
        // alert("请输入密码")
        Swal.fire("请输入密码");
    }
}