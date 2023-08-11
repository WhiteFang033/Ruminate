//setting the choices user selected last time

root.style.setProperty('--color', localStorage.getItem('--color'))
root.style.setProperty('--bg_color', localStorage.getItem('--bg_color'))
root.style.setProperty('--hover', localStorage.getItem('--hover'))
root.style.setProperty('--shadow', localStorage.getItem('--shadow'))
root.style.setProperty('--border', localStorage.getItem('--border'))
root.style.setProperty('--notes_shadow', localStorage.getItem('--notes_shadow'))
root.style.setProperty('--notes_after_shadow', localStorage.getItem('--notes_after_shadow'))
root.style.setProperty('--title_bg_clr', localStorage.getItem('--title_bg_clr'))
root.style.setProperty('--notes_before_bg', localStorage.getItem('--notes_before_bg'))
root.style.setProperty('--cards_after_shadow', localStorage.getItem('--cards_after_shadow'))
root.style.setProperty('--task_adder_shadow', localStorage.getItem('--task_adder_shadow'))


if (localStorage.getItem('mode') != null && localStorage.getItem('icon') != null) {

    mode.lastElementChild.innerHTML = localStorage.getItem('mode')
    mode.firstElementChild.src = localStorage.getItem('icon')

}

//On load

note_section.style.display = 'block'
toDo_section.style.display = 'none'
bin_section.style.display = 'none'
settings_section.style.display = 'none'
profile_section.style.display = 'none'




//setting and storing data related to individual cards/notes

if (note_cont.children.length == 1) {
    if (localStorage.getItem('cards') != null) {
        note_cont.innerHTML = localStorage.getItem('cards')
        for (let i = 0; i < note_cont.children.length; i++) {
            if (note_cont.children[i].classList.contains('card_after')) {
                note_cont.children[i].classList.add('card')
                note_cont.children[i].classList.remove('card_after')
                note_cont.children[i].children[2].style.display = 'none'
            }
        }
        // console.log(localStorage.getItem('cards'))
    }

    if (localStorage.getItem('cards') != null) {
        for (let i=0; i< note_cont.children.length; i++){


            let optns = note_cont.children[i].children[2].firstElementChild.children
            for(let m = 0; m < optns.length; m++ ){
                note_cont.children[i].children[2].firstElementChild.children[m].firstElementChild.addEventListener('click', async (e) => {
                  try {
                    url = e.target.src.substr(e.target.src.length - 10, e.target.src.length)
                  }
                 catch (error) {
                    console.log("Error: Misclicked")
                 }
                 finally {
                    clr = url.substr(0, 5)
                    if (clr == 'dark_' && e.target.parentElement.parentElement.id == 'bg_images') {
                        e.target.parentElement.parentElement.parentElement.parentElement.style.backgroundImage = `url(assets/bg_images/${url})`
                        e.target.parentElement.parentElement.parentElement.parentElement.children[0].style.color = 'white'
                        e.target.parentElement.parentElement.parentElement.parentElement.children[1].style.color = 'white'
        
                        for (let j = 0; j < Array.from(e.target.parentElement.parentElement.children).length; j++) {
                            if (e.target.parentElement.parentElement.children[j].firstElementChild.classList.contains('border_white')) {
                                e.target.parentElement.parentElement.children[j].firstElementChild.classList.remove('border_white')
                            }
                            else if (e.target.parentElement.parentElement.children[j].firstElementChild.classList.contains('border_black')) {
                                e.target.parentElement.parentElement.children[j].firstElementChild.classList.remove('border_black')
                            }
                        }
                        e.target.classList.add('border_white')
        
                    }
                    else if (clr == 'light' && e.target.parentElement.parentElement.id == 'bg_images') {
                        e.target.parentElement.parentElement.parentElement.parentElement.style.backgroundImage = `url(assets/bg_images/${url})`
                        e.target.parentElement.parentElement.parentElement.parentElement.children[0].style.color = 'black'
                        e.target.parentElement.parentElement.parentElement.parentElement.children[1].style.color = 'black'
                        for (let j = 0; j < Array.from(e.target.parentElement.parentElement.children).length; j++) {
                            if (e.target.parentElement.parentElement.children[j].firstElementChild.classList.contains('border_black')) {
                                e.target.parentElement.parentElement.children[j].firstElementChild.classList.remove('border_black')
                            }
                            else if (e.target.parentElement.parentElement.children[j].firstElementChild.classList.contains('border_white')) {
                                e.target.parentElement.parentElement.children[j].firstElementChild.classList.remove('border_white')
                            }
                        }
                        e.target.classList.toggle('border_black')
                    }
                    console.log(note_cont.innerHTML)
                    localStorage.setItem('cards',note_cont.innerHTML)
                }
                
            })
        }
        }
        }


}


//setting tasks stored in localStorage

if(localStorage.getItem('tasks') != null){
    taskContainer.innerHTML = localStorage.getItem('tasks')
    
    
    for(let i = 0; i<taskContainer.children.length; i++){

        taskContainer.children[i].addEventListener('click',async (e)=>{

            if(e.target.classList.contains('task_done')){
                let pcontent = e.target.parentElement.parentElement.children[0].innerHTML


                let doneTask = document.createElement('div')
                doneTask.innerHTML = ` <div class="task">
                <div class="task_text"><s>${pcontent}</s></div>
                <div class="task_optns">
                
                <button class="delete_task hover_true">Delete</button>
                
                </div>
                </div>`
                e.target.parentElement.parentElement.remove()
                taskContainer.insertAdjacentHTML('beforeend', doneTask.innerHTML)
                localStorage.setItem('tasks', taskContainer.innerHTML)
                console.log(doneTask.firstElementChild.children[1].firstElementChild)
                
            }

            else if(e.target.classList.contains('delete_task'))
            {
                e.target.parentElement.parentElement.remove()
                localStorage.setItem('tasks', taskContainer.innerHTML)
            }
        })
    }
}


//setting deleted items stored in localStorage

if(localStorage.getItem('recycles') != null){
    binContainer.innerHTML = localStorage.getItem('recycles')
}


//setting up user profile

if(localStorage.getItem('userName') != null){
    displayName.innerHTML = `Good Evening, ${localStorage.getItem('userName')}!`
    inputProfile.style.display = 'none'
    displayProfile.style.display = 'flex'
}