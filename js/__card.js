const card = document.getElementsByClassName('card')[0]
const content_container = document.querySelectorAll('.content_container')[0]
const card_close = document.getElementById('card_close')
const note_cont = document.getElementsByClassName('note_container')[0]
const card_delete = document.getElementById('card_delete')
const binContainer = document.getElementsByClassName('bin_container')[0]

note_cont.addEventListener('click', async(e)=>{
    await sleep(100)
    // content_container.style.overflowY = 'auto'
    // content_container.style.height = '390px'
    // options.style.display = 'flex'
    if(e.target.classList.contains('card')){          //card itself
        e.target.classList.add('card_after')
        e.target.classList.remove('card')
        e.target.children[1].style.overflowY = 'auto'
        e.target.children[1].style.height = '390px'
        e.target.children[2].style.display = 'flex'

    }
    else if(e.target.parentElement.classList.contains('card'))    //title or card_container
    {
        e.target.parentElement.classList.add('card_after')
        e.target.parentElement.classList.remove('card')
        e.target.parentElement.children[1].style.overflowY = 'auto'
        e.target.parentElement.children[1].style.height = '390px'
        e.target.parentElement.children[2].style.display = 'flex'
    }
    else if(e.target.parentElement.parentElement.classList.contains('card')) //card_content
    {
        await sleep(200)
        e.target.parentElement.parentElement.classList.add('card_after')
        e.target.parentElement.parentElement.classList.remove('card')
        e.target.parentElement.style.overflowY = 'auto'
        e.target.parentElement.style.height = '390px'
        e.target.parentElement.nextElementSibling.style.display = 'flex'
    }
    if(e.target.parentElement.parentElement.classList.contains('card_after')){
        if(e.target.classList.contains('card_content')){
            e.target.setAttribute("contentEditable", "True")
            e.target.parentElement.parentElement.children[0].setAttribute('contentEditable', 'True')
        }
    }
})

note_cont.addEventListener('click', async (e)=>{
    
    await sleep(200)
    if(e.target.parentElement.parentElement.classList.contains('card_after')){
        if(e.target.classList.contains('card_content')){
            return
        }
        else if(e.target.classList.contains('card_title')){
            return
        }
        else if(e.target.classList.contains('card_delete'))
        {
            await sleep(200)        
            let title = e.target.parentElement.parentElement.children[0].innerHTML
            let content = e.target.parentElement.parentElement.children[1].firstElementChild.innerHTML
            let delCard = document.createElement('div')
            delCard.classList.add('del_card')
            delCard.innerHTML = `<div class="card_title">${title}</div>
            <div class="content_container">

                <div class="card_content">${content}</div>
            </div>
            <div class="res">
                <button class="restore ">Restore</button>
                <button class="delete">Delete</button>
            </div>`

            binContainer.insertAdjacentElement('beforeend', delCard)
            e.target.parentElement.parentElement.remove()
        }
            e.target.parentElement.parentElement.classList.add('card')
            e.target.parentElement.parentElement.classList.remove('card_after')
            e.target.parentElement.parentElement.children[1].style.overflowY = 'hidden'
            e.target.parentElement.parentElement.children[1].style.height = '212px'
            e.target.parentElement.parentElement.children[2].style.display = 'none'
            e.target.parentElement.parentElement.children[0].setAttribute('contentEditable','False')
            e.target.parentElement.parentElement.children[1].firstElementChild.setAttribute('contentEditable','False')
            localStorage.setItem('cards', note_cont.innerHTML)
            localStorage.setItem('recycles',binContainer.innerHTML)
    }
})

