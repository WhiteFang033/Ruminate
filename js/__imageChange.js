const bg_images = document.getElementById('bg_images')
const options = document.getElementsByClassName('card_options')
const cards = document.getElementsByClassName('card')
let url = ''

for (let i = 0; i < cards.length; i++) {

    options[i].firstElementChild.addEventListener('click', async (e) => {
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
                console.log(e.target.parentElement.parentElement.parentElement.parentElement.children[1])
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
        }

        localStorage.setItem('cards', note_cont.innerHTML)
    })
}
