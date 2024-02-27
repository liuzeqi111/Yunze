  // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
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
                data: [50, 100, 10],
                barWidth: '50%'
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
    var search=document.getElementById('search');
    var button=document.querySelector('button');
var index = document.querySelector('.index')
    //搜索
button.onclick = function () {
    var search = document.getElementById('search');
    if(search==='开发'){

    }
    else if(search =='设计'){

    }
    else if(search == '秘书处'){

    }
    else{
        alert('错误');
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