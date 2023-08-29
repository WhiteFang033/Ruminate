const notes_opn = document.getElementById('notes_icon')
const todo_opn = document.getElementById('to_do_icon')
const bin_opn = document.getElementById('bin_icon')
const settings_opn = document.getElementById('settings')
const profile_opn = document.getElementById('profile')
const note_section = document.getElementById('note')
const toDo_section = document.getElementById('to_do')
const bin_section = document.getElementById('bin')
const settings_section = document.getElementById('settings_section')
const profile_section = document.getElementById('profile_section')


notes_opn.addEventListener('click', async (e)=>{
    note_section.style.display = 'block'
    toDo_section.style.display = 'none'
    bin_section.style.display = 'none'
    settings_section.style.display = 'none'
    profile_section.style.display = 'none'
})

todo_opn.addEventListener('click', async (e)=>{
    note_section.style.display = 'none'
    toDo_section.style.display = 'flex'
    bin_section.style.display = 'none'
    settings_section.style.display = 'none'
    profile_section.style.display = 'none'
})

bin_opn.addEventListener('click', async (e)=>{
    note_section.style.display = 'none'
    toDo_section.style.display = 'none'
    bin_section.style.display = 'block'
    settings_section.style.display = 'none'
    profile_section.style.display = 'none'
})

settings_opn.addEventListener('click', async (e)=>{
    note_section.style.display = 'none'
    toDo_section.style.display = 'none'
    bin_section.style.display = 'none'
    settings_section.style.display = 'flex'
    profile_section.style.display = 'none'
})

profile_opn.addEventListener('click', async (e)=>{
    note_section.style.display = 'none'
    toDo_section.style.display = 'none'
    bin_section.style.display = 'none'
    settings_section.style.display = 'none'
    profile_section.style.display = 'flex'
})