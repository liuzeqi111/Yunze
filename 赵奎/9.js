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
    let cancel = document.getElementById('cancel');
    let qwqw = document.getElementById('qwqw');

    qwqw.onclick = function () {
        let word = user.value;
        let count = 0;
        if (user.value == 0) {
            alert('姓名为空');
            return;
        } else if (age.value == 0) {
            alert('年龄为空');
            return;
        } else if (career.value == 0) {
            alert('专业为空');
            return;
        } else if (date.value == 0) {
            alert('职位为空');
            return;
        } else if (id.value == 0) {
            alert('学号为空');
            return;
        } else if (direction.value == 0) {
            alert('方向为空');
            return;
        } else if (award.value == 0) {
            alert('获奖经历为空');
            return;
        } else {
            for (let i = 0; i < studentData.length; i++) {
                // console.log(word);
                // console.log(user.value);
                if (studentData[i].name == word) {
                    console.log(studentData[i]);
                    // console.log(studentData[i].age);
                    let group = {
                        name: `${user.value}`,
                        age: `${age.value}`,
                        career: `${career.value}`,
                        date: `${date.value}`,
                        id: `${id.value}`,
                        direction: `${direction.value}`,
                        award: `${award.value}`,
                    }
                    console.log(group);
                    studentData[i].age = group.age;
                    studentData[i].career = group.career;
                    studentData[i].date = group.date;
                    studentData[i].id = group.id;
                    studentData[i].direction = group.direction;
                    studentData[i].award = group.award;
                    console.log(studentData[i]);
                    console.log(studentData);
                    alert("修改成功！");
                    count = 1;
                    break;
                }
            }
            if (count == 0) {
                alert("学员不存在");
            }
        }
}
    


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
