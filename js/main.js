const menu_tp = document.getElementById('menu_context');
const li_text = document.getElementById('list_cont')
const menu = document.getElementsByClassName('menu')[0]
const root = document.querySelector(':root')
const menu_icon = document.getElementById('menu_icon')
const display_window = document.getElementById('display_window_id')
const menu_text = document.getElementsByClassName('menu_text')
const menu_p = document.getElementById('menu_p')
const profile = document.getElementById('profile')
const settings = document.getElementById('settings')
const empty_local = document.getElementById('empty_local')
const empty_bin = document.getElementById('empty_bin')

menu_tp.addEventListener('click', async (e) => {
    if (document.getElementsByClassName('menu_text')[0].style.display != 'block') {
        await sleep(200)
        for (let i = 0; i < menu_text.length; i++) {
            // document.getElementsByTagName('li')[i].childNodes[1].style.display ='block'
            // document.getElementsByTagName('li')[i].childNodes[0].style.paddingLeft ='10px;'
            // document.getElementsByTagName('li')[i].childNodes[1].style.margin ='0px 10px'
            document.getElementsByClassName('menu_text')[i].style.display = 'block'
            document.getElementsByClassName('menu_text')[i].style.margin = '0px 15px'
        }
        menu_p.style.display = 'block'
        profile.style.display = 'block'
        settings.style.display = 'block'

        let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        console.log(width)

        if (width <= 650) {
            root.style.setProperty('--menu_width', '160px')
        }
        else if( width <= 800){
            root.style.setProperty('--menu_width', '180px')
        }
        else {
            root.style.setProperty('--menu_width', '250px')
        }
        menu_icon.style.margin = '15px'
        menu_icon.src = 'assets/icons/close.png'
    }

    else if (document.getElementsByClassName('menu_text')[0].style.display == 'block') {
        for (let i = 0; i < menu_text.length; i++) {
            document.getElementsByClassName('menu_text')[i].style.display = 'none'
        }
        menu_p.style.display = 'none'
        profile.style.display = 'none'
        settings.style.display = 'none'
        menu_icon.style.margin = '10px'
        root.style.setProperty('--menu_width', '80px')
        menu_icon.src = 'assets/icons/menu.png'
    }

})

display_window.addEventListener('click', (e) => {
    if (document.getElementsByClassName('menu_text')[0].style.display == 'block') {
        for (let i = 0; i < menu_text.length; i++) {
            document.getElementsByClassName('menu_text')[i].style.display = 'none'
        }
        menu_p.style.display = 'none'
        profile.style.display = 'none'
        settings.style.display = 'none'
        menu_icon.style.margin = '10px'
        root.style.setProperty('--menu_width', '80px')
        menu_icon.src = 'assets/icons/menu.png'
    }
})


empty_local.addEventListener('click', async (e) => {
    const result = confirm('This will delete all notes stored in local storage.\n\nNote: NOTES WILL NOT BE STORED IN RECYCLE BIN AND WILL BE PREMANENTLY DELETED.\n\nDo you want to proceed?')
    if (result) {
        localStorage.clear('cards')
        location.reload();
    }
    else {
        return
    }
})

empty_bin.addEventListener('click', async (e) => {
    const result = confirm('This will delete everything stored in the recycle bin premanently.\nDo you want to proceed?')
    if (result) {
        localStorage.clear('recycles')
        location.reload();
    }
    else {
        return
    }
})