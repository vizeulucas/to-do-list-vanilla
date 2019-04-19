
let addTask = document.querySelector('.add-button');
let form = document.querySelector('form');

addTask.addEventListener('click', function(event) {

    let taskName = form.name.value;
    let taskTime = form.time.value;
    let taskDescription = form.description.value;
    
    createTaskItem(taskName, taskTime, taskDescription);
    
    form.reset();

    event.preventDefault();

});
