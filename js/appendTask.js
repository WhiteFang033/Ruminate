const taskAdder = document.getElementsByClassName('task_adder')[0]
const taskContent = document.getElementsByClassName('task_content')[0]
const taskContainer = document.getElementsByClassName('task_container')[0]
const addTask_btn = document.getElementById('addTask')



taskAdder.addEventListener('keyup', async (e) => {

    if (taskContent.innerHTML != '') {
        addTask_btn.style.display = 'inline'
    }
    else if (taskContent.innerHTML === '') {
        addTask_btn.style.display = 'none'
    }
})

addTask_btn.addEventListener('click', async (e) => {
    let content = taskContent.innerHTML
    let newTask = document.createElement('div')
    newTask.innerHTML = ` <div class="task">
    <div class="task_text">${content}</div>
    <div class="task_optns">
    
    <button class="task_done hover_true">&#10004; Done</button>
    <button class="delete_task hover_true">Delete</button>
    
    </div>
    </div>`
    
    //appending new task in HTML
    taskContainer.insertAdjacentHTML('afterbegin', newTask.innerHTML)
    //storing items in local storage
    localStorage.setItem('tasks',taskContainer.innerHTML)
    



    //few front-end things
    addTask_btn.style.display = 'none'
    taskContent.innerHTML = ''

    //adding event listen for Done and Delete buttons

    for(let i = 0; i<taskContainer.children.length; i++){

        taskContainer.children[i].addEventListener('click',async (e)=>{

            if(e.target.classList.contains('task_done')){
                let pcontent = e.target.parentElement.parentElement.children[0].innerHTML


                let doneTask = document.createElement('div')
                doneTask.innerHTML = `<div class="task">
                <div class="task_text"><s>${pcontent}</s></div>
                <div class="task_optns">
                
                <button class="delete_task hover_true">Delete</button>
                
                </div>
                </div>`
                e.target.parentElement.parentElement.remove()
                taskContainer.insertAdjacentHTML('beforeend', doneTask.innerHTML)
                localStorage.setItem('tasks', taskContainer.innerHTML)

                doneTask.firstElementChild.children[1].firstElementChild.addEventListener('click', async (e)=>{
                    doneTask.remove()
                    localStorage.setItem('tasks', taskContainer.innerHTML)
                })
            }

            if(e.target.classList.contains('delete_task'))
            {
                console.log('working')
                e.target.parentElement.parentElement.remove()
                localStorage.setItem('tasks', taskContainer.innerHTML)
            }
        })
    }
})

