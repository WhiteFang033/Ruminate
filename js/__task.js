delTaskLocal = document.getElementById('empty_tasks')



//Delete All Tasks from Local Storage

delTaskLocal.addEventListener('click', async (e) => {
    let result = confirm('This is delete all the current tasks from the local storage. Do you want to proceed?')
    if(result){

        localStorage.removeItem('tasks')
        location.reload()
    }
})
