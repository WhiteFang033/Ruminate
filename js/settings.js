const delLocalStorage = document.getElementById('empty_localStorage')

delLocalStorage.addEventListener('click', async (e)=>{
    let result = confirm('This will empty Local Storage. Everything stored(including notes, tasks, saved data etc..) will be permanently deleted.\nDo you want to proceed?')
    if(result){
        localStorage.clear()
        location.reload()
    }
    else{
        return
    }
})