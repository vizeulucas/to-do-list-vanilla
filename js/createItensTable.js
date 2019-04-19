
let table = document.querySelector('table');
let noTask = document.querySelector('#no-task');

function createTaskItem(name, time, description){
    
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let tdName = document.createElement('td');
    tdName.textContent = name;
    tr.appendChild(tdName);

    let tdTime = document.createElement('td');
    tdTime.textContent = time + "h";
    tr.appendChild(tdTime);

    let tdDesctiption = document.createElement('td');
    tdDesctiption.textContent = description;
    tr.appendChild(tdDesctiption);

    if(table.style.display = 'none'){
        table.style.display = 'table';
        noTask.style.display = 'none';
    }

}


