
let addTask = document.querySelector('.add-button');
let form = document.querySelector('form');

addTask.addEventListener('click', function() {

    let taskName = form.name.value;
    let taskTime = form.time.value;

    taskItem(taskName, taskTime);
    
    form.reset();

    event.preventDefault();

});
