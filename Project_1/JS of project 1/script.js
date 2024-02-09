// Define UI Element
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');

//Define EventListener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener("click", ClearTask)


//Define Function
function addTask(e) {
    // console.log(e);
    if (taskInput.value === ''){
        alert('☠️Chudse ! Task koi...??☠️');

    } else{
        // Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = '❌';
        li.appendChild(link);

        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}


// REMOVE TASK FUNCTION 
function removeTask(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm("Are You Sure?")) {
            let ele = e.target.parentElement;
            ele.remove();
            // console.log(ele);
        }
    }
    
}

//clear Task ----
function ClearTask(e) {
    // taskList.innerHTML ="";

    //FASTER 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}




