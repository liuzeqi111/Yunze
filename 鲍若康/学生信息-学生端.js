
var input = document.querySelectorAll('input');
var award_hint= document.querySelector('textarea');
var change = document.querySelector('.change');
var admit = document.querySelector('.admit');
var myselect = document.querySelector('select');
var index = myselect.selectedIndex;
//跳转页面
var page_jump = document.querySelectorAll('li');
page_jump[0].onclick = function () {
    alert('0')
}
page_jump[1].onclick = function () {
    alert('1')
}
page_jump[2].onclick = function () {
    alert('2')
}
page_jump[3].onclick = function () {
    alert('3')
}
//信息更改
   change.onclick=function(){
   for(let i=0;i<6;i++){
       input[i].value = '';
    }
}
   //提交信息
admit.onclick = function () {
         for(let i=0;i<5;i++){
             console.log(input[i].value)
   }
    console.log(myselect.options[index].text)
    console.log(award_hint.value)
        }

