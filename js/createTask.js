
let taskList = document.querySelector('#task-list');
let noTask = document.querySelector('#no-task');

function taskItem(name, time){
    
    let item = document.createElement('div');
    item.classList.add('task-item');
    taskList.appendChild(item);

    let divisoria1 = document.createElement('div');
    divisoria1.classList.add('divisoria');
    item.appendChild(divisoria1)

    let divisoria2 = document.createElement('div');
    divisoria2.classList.add('divisoria');
    item.appendChild(divisoria2)

    taskCheck(divisoria1);
    taskName(divisoria1, name);
    taskTime(divisoria2, time);
    taskUp(divisoria2);
    taskDel(divisoria2);

    if(noTask.style.display != 'none')
        noTask.style.display = 'none';

}


