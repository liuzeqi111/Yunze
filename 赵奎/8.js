        const studentData = [
            { name: '小小', age: '18', career: '软件7', date: '学员', id: '20147328', direction: '开发', award: '111' },
            { name: '大大', age: '17', career: '软件8', date: '学员', id: '30187328', direction: '开发', award: '222' },
            { name: '中中', age: '19', career: '软件', date: '学员', id: '11014738', direction: '开发', award: '333' }];
        let user = document.getElementById('user');
        let age = document.getElementById('age');
        let career = document.getElementById('career');
        let date = document.getElementById('date');
        let id = document.getElementById('id');
        let direction = document.getElementById('direction');
        let award = document.getElementById('award');
        let ubub = document.getElementById('ubub');
        let ll = document.getElementById('ll');


        ubub.onclick = function () {
            let word = ll.value;
            let count = 0;
            for (let i = 0; i < studentData.length; i++) {
                if (studentData[i].name == word) {
                    user.value = studentData[i].name;
                    age.value = studentData[i].age;
                    career.value = studentData[i].career;
                    date.value = studentData[i].date;
                    id.value = studentData[i].id;
                    direction.value = studentData[i].direction;
                    award.value = studentData[i].award;
                    let group = {
                        name: `${user.value}`,
                        age: `${age.value}`,
                        career: `${career.value}`,
                        date: `${date.value}`,
                        id: `${id.value}`,
                        direction: `${direction.value}`,
                        award: `${award.value}`,
                    }
                    console.log(studentData[i]);
                    console.log(group);
                    count = 1;
                    console.log(group.age);

                    break;
                }
                // console.log(i);
                // console.log(studentData[i].name);
            }
            if (count == 0) {
                alert("用户不存在，请输入正确的账号");
            }
        } 
