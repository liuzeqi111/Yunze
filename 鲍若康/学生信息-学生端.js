// var pare = window.opener
// var six = pare.document.getElementById("search")
var names = document.getElementById('name')
var age = document.getElementById('age')
var major = document.getElementById('major')
var position = document.getElementById('position')
var id=document.getElementById('id')
var direction = document.getElementById('direction')
var award = document.getElementById('award')

var question = document.querySelector('.question')
question.onclick = () => {
    //alert('功能还在开发中......')
    //Swal.fire('功能还在开发中......');
    Swal.fire({
                  position: "center",
                    icon: "info",
                    title: '功能还在开发中......',
                    showConfirmButton: false,
             timer: 700,
                        });
}
// function fun() {
//     axios.post('http://127.0.0.1:9000/search', Qs.stringify(data))
//         .then((res) => {
//             console.log(res.data)
//             names.value = res.data[0]
//             age.value = res.data[1]
//             major.value = res.data[2]
//             id.value = res.data[3]
//             position.value = res.data[4]
//             direction.value=res.data[5]
//     })
// }
// fun()

// var input = document.querySelectorAll('input');
// var award_hint= document.querySelector('textarea');
var change = document.querySelector('.change');
var admit = document.querySelector('.admit');
// var myselect = document.querySelector('select');
// var index = myselect.selectedIndex;
//跳转页面
// var page_jump = document.querySelectorAll('li');
// page_jump[0].onclick = function () {
//     alert('0')
// }
// page_jump[1].onclick = function () {
//     alert('1')
// }
// page_jump[2].onclick = function () {
//     alert('2')
// }
// page_jump[3].onclick = function () {
//     alert('3')
// }
//信息更改
    change.onclick=function(){
       // alert('功能暂时无法使用')
         Swal.fire({
                  position: "center",
                    icon: "info",
                    title: '功能暂时无法使用',
                    showConfirmButton: false,
             timer: 700,
                        });
}
   //提交信息
admit.onclick = function () {
let data = {
    "name": names.value,
    "age": age.value,
    "major": major.value,
    "position": position.value,
    "id": id.value,
    "direction": direction.value,
    "award":award.value
}
    axios.post('http://127.0.0.1:9000/add', Qs.stringify(data))
        .then((res) => {
            if (res.data == 'yes') {
                console.log(res.data)
                //alert("注册成功")
                 Swal.fire({
                  position: "center",
                    icon: "success",
                    title: "注册成功",
                    showConfirmButton: false,
                    timer: 1000
                        });
                setTimeout(location.assign('../裴润涵/HTML/登录(学生).html'),300)
            }
            
    })
    }
    // console.log(myselect.options[index].text)
    // console.log(award_hint.value)
        
var pare = window.opener;
var idcard = pare.document.querySelector('.id')
function news() {
    let data = {
        'id':idcard.value
    }
    axios.post('http://127.0.0.1:9000/search1', Qs.stringify(data))
        .then((res) => {
        console.log(res.data)
            names.value = res.data[0]
            age.value = res.data[1]
            major.value = res.data[2]
            id.value = res.data[4]
            position.value = res.data[3]
            direction.value = res.data[5]
            award.value=res.data[6]
    })
}
news()
