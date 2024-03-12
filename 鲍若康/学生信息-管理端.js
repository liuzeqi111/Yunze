  // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
    // var num1,num2,num3
    // // 指定图表的配置项和数据
    // var option = {
    //     title: {
    //         text: '人数统计'
    //     },
    //     tooltip: {},
    //     legend: {
    //         data: ['人数']
    //     },
    //     xAxis: {
    //         data: ['开发', '设计', '秘书处']
    //     },
    //     yAxis: {
    //         axisLabel: { show: false },
    //     },

    //     series: [
    //         {
    //             name: '人数',
    //             type: 'bar',
    //             data: [num1, num2, num3],
    //             barWidth: '50%'
    //         }
    //     ]
    // };
function num() {
    axios.post('http://127.0.0.1:9000/zhu', Qs.stringify('yes'))
        .then((res) => {
            num1 = res.data[0];
            num2 = res.data[1];
            num3 = res.data[2];
            var num1,num2,num3
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '人数统计'
        },
        tooltip: {},
        legend: {
            data: ['人数']
        },
        xAxis: {
            data: ['开发', '设计', '秘书处']
        },
        yAxis: {
            axisLabel: { show: false },
        },

        series: [
            {
                name: '人数',
                type: 'bar',
                data: [num1, num2, num3],
                barWidth: '50%'
            }
        ]
            };
           myChart.setOption(option);
    })
}
num()
    // 使用刚指定的配置项和数据显示图表。
     
    
    var search=document.getElementById('search');
    var button=document.querySelector('button');
var index = document.querySelector('.index')
//搜索
var question = document.querySelector('.question')
question.onclick = () => {
    // alert('功能还在开发中......')
    // Swal.fire('功能还在开发中......');
    Swal.fire({
                  position: "center",
                    icon: "info",
                    title: '功能还在开发中......',
                    showConfirmButton: false,
             timer: 700,
                        });
}
button.onclick = function () {
    if (search.value == '') {
       // alert('输入内容错误')
      Swal.fire({
                  position: "center",
                    icon: "info",
                    title: '输入内容错误',
                    showConfirmButton: false,
             timer: 700,
                        });
    }
    else {
        let data = {
        'name': search.value
}
        axios.post('http://127.0.0.1:9000/search',Qs.stringify(data))
            .then((res) => {
                window.open('../赵奎/管理端查询.html')
                console.log(res.data)
        })
    }
}
    //人数图表显示
index.onclick = function () {
        var main = document.getElementById('main');
        if(main.style.display == 'block'){
            main.style.display = 'none';
            index.style.transform='rotate(-45deg)' ;
            
        }else{
            main.style.display = 'block'
            index.style.transform='rotate(45deg)' ;
        }
        
}
//跳转页面
//         var page_jump = document.querySelectorAll('li');
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
