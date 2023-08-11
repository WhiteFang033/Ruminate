const note_adder = document.getElementById('note_adder')
const close_button = document.getElementById('close_btn')
const save_button = document.getElementById('save_btn')
const title = document.getElementById('title')
const content = document.getElementById('content')
const note = document.getElementsByClassName('note')[0]
const btn_input = document.getElementsByClassName('button_input')[0]

note_adder.addEventListener('click',(e)=>{
    note_adder.classList.add('add_note_after')
    note_adder.classList.remove('add_note_before')
    btn_input.style.display= 'flex'
    close_button.style.display = "block"
    save_button.style.display = "block"
    title.style.display = 'flex'
    content.style.display = 'flex'
    note_adder.lastElementChild.style.display='none'
})

close_button.addEventListener('click', async (e)=>{
    await sleep(100)
    note_adder.classList.remove('add_note_after')
    note_adder.classList.add('add_note_before')
    btn_input.style.display = 'none'
    close_button.style.display = "none"
    save_button.style.display = "none"
    title.style.display = 'none'
    content.style.display = 'none'
    note_adder.lastElementChild.style.display='block'
})

