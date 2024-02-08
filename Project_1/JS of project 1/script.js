// Define UI Element
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');

//Define EventListener
form.addEventListener('submit', addTask);



//Define Function
function addTask(e) {
    // console.log(e);
    if (taskInput.value === ''){
        alert('☠️Chudse ! Task koi...??☠️');

    } else{
        // Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}


