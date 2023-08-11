const mode = document.getElementById('mode_id')

mode.addEventListener('click', async (e)=>{
    if(mode.lastElementChild.innerHTML == 'Light Mode'){  //these are settings for LIGHT MODE
         
        mode.firstElementChild.src = 'assets/icons/dark_mode.png'
        mode.lastElementChild.innerHTML = 'Dark Mode'
        root.style.setProperty('--color', 'black')
        root.style.setProperty('--bg_color', 'white')
        root.style.setProperty('--hover', 'rgb(208, 206, 206)')
        root.style.setProperty('--shadow', '0px 0px 2px rgb(58, 57, 57)')
        root.style.setProperty('--border', 'black')
        root.style.setProperty('--notes_shadow', 'rgb(177, 175, 175)')
        root.style.setProperty('--notes_after_shadow', ' 0 3px 10px rgb(148, 146, 146)')
        root.style.setProperty('--title_bg_clr', 'aliceblue')
        root.style.setProperty('--notes_before_bg', 'white')
        root.style.setProperty('--cards_after_shadow', ' 0px 3px 6px rgb(177, 175, 175)')
        root.style.setProperty('--task_adder_shadow', ' 0 3px 10px rgb(177, 175, 175)')

        //storing values in localStorage to set prefrences
        localStorage.setItem('mode', 'Dark Mode')
        localStorage.setItem('icon', 'assets/icons/dark_mode.png')
        localStorage.setItem('--color', 'black')
        localStorage.setItem('--bg_color', 'white')
        localStorage.setItem('--hover', 'rgb(208, 206, 206)')
        localStorage.setItem('--shadow', '0px 0px 2px rgb(58, 57, 57)')
        localStorage.setItem('--border', 'black')
        localStorage.setItem('--notes_shadow', 'rgb(177, 175, 175)')
        localStorage.setItem('--notes_after_shadow', ' 0 3px 10px rgb(148, 146, 146)')
        localStorage.setItem('--title_bg_clr', 'aliceblue')
        localStorage.setItem('--notes_before_bg', 'white')
        localStorage.setItem('--cards_after_shadow', '0px 3px 6px rgb(177, 175, 175)')
        localStorage.setItem('--task_adder_shadow', '0 3px 10px rgb(177, 175, 175)')
        
    }
    else if(mode.lastElementChild.innerHTML == 'Dark Mode'){  // These are settings for DARK MODE
        
        mode.firstElementChild.src = 'assets/icons/light_mode.png'
        mode.lastElementChild.innerHTML = 'Light Mode'
        root.style.setProperty('--color', 'white')
        root.style.setProperty('--bg_color', 'black')
        root.style.setProperty('--hover', 'rgb(33, 32, 32)')
        root.style.setProperty('--shadow', '0px 0px 2px white')
        root.style.setProperty('--border', 'white')
        root.style.setProperty('--notes_shadow', 'none')
        root.style.setProperty('--notes_after_shadow', '0 0px 3px rgb(234, 234, 234)')
        root.style.setProperty('--title_bg_clr', 'rgb(41, 41, 41)')
        root.style.setProperty('--notes_before_bg', 'rgb(41, 41, 41)')
        root.style.setProperty('--cards_after_shadow', 'none')
        root.style.setProperty('--task_adder_shadow', ' 0px 3px 6px rgb(0, 0, 0)')
        
        //storing values in localStorage to set prefrences
        localStorage.setItem('mode', 'Light Mode')
        localStorage.setItem('icon', 'assets/icons/light_mode.png')
        localStorage.setItem('--color', 'white')
        localStorage.setItem('--bg_color', 'black')
        localStorage.setItem('--hover', 'rgb(33, 32, 32)')
        localStorage.setItem('--shadow', '0px 0px 2px white')
        localStorage.setItem('--border', 'white')
        localStorage.setItem('--notes_shadow', 'none')
        localStorage.setItem('--notes_after_shadow', '0 0px 3px rgb(234, 234, 234)')
        localStorage.setItem('--title_bg_clr', 'rgb(41, 41, 41)')
        localStorage.setItem('--notes_before_bg', 'rgb(41, 41, 41)')
        localStorage.setItem('--cards_after_shadow', 'none')
        localStorage.setItem('--task_adder_shadow', '0px 3px 6px rgb(0, 0, 0)')
    }
})