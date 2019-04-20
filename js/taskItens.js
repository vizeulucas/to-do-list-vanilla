
function taskCheck(task){

    let check = document.createElement('i');
    check.classList.add('material-icons');
    check.textContent = 'check_box_outline_blank'
    task.appendChild(check);

}

function taskName(task, name){

    let taskName = document.createElement('p');
    taskName.textContent = name;
    task.appendChild(taskName);

}

function taskTime(task, time){

    let taskTime = document.createElement('p');
    taskTime.textContent = time + 'h';
    task.appendChild(taskTime);

}

function taskUp(task){

    let upTask = document.createElement('i');
    upTask.textContent = "update";
    upTask.classList.add("material-icons");
    task.appendChild(upTask);

}

function taskDel(task){

    let delTask = document.createElement('i');
    delTask.textContent = "delete";
    delTask.classList.add("material-icons");
    task.appendChild(delTask);

}
