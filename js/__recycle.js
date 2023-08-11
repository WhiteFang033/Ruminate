binContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('restore')) {
        await sleep(200)
        let title = e.target.parentElement.parentElement.children[0].innerHTML
        let content = e.target.parentElement.parentElement.children[1].firstElementChild.innerHTML
        let restoredCard = document.createElement('div')
        restoredCard.classList.add('card')
        restoredCard.innerHTML = `<div class="card_title">${title}</div>
            <div class="content_container">
        
                <div class="card_content">
                    ${content}
                </div>
            </div>
            <div class="card_options">
                    <ul id="bg_images">
                        <li><img src="assets/bg_images/dark_1.jpg" alt=""></li>
                        <li><img src="assets/bg_images/dark_2.jpg" alt=""></li>
                        <li><img src="assets/bg_images/dark_3.jpg" alt=""></li>
                        <li><img src="assets/bg_images/light1.jpg" alt=""></li>
                        <li><img src="assets/bg_images/light2.jpg" alt=""></li>
                        <li><img src="assets/bg_images/light3.jpg" alt=""></li>
                    </ul>
                    <button id="card_delete" class="card_delete">Delete</button>
                    <button id="card_close">Close</button>
            </div>
        </div>`

        note_cont.insertAdjacentElement('beforeend', restoredCard)
        e.target.parentElement.parentElement.remove()
        localStorage.setItem('cards', note_cont.innerHTML)
        localStorage.setItem('recycles', binContainer.innerHTML)



        //Listening to the background image change event for every card

        let optns = restoredCard.children[2].firstElementChild.children
        for (let m = 0; m < optns.length; m++) {
            console.log(restoredCard.children[2].firstElementChild.children[0].firstElementChild)
            restoredCard.children[2].firstElementChild.children[m].firstElementChild.addEventListener('click', async (e) => {
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

                    localStorage.setItem('cards', note_cont.innerHTML)
                }

            })
        }
    }
    else if (e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove()
        localStorage.setItem('recycles',binContainer.innerHTML)
    }
})