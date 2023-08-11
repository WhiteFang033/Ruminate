const nameSave = document.getElementById('saveName')
const nameInput = document.getElementById('nameInput')
const displayName = document.getElementById('display_name')
const displayProfile = document.getElementById('display_profile')
const inputProfile = document.getElementById('input_profile')
const quoteBox = document.getElementById('quote')
const authorBox = document.getElementById('author')

nameSave.addEventListener('click', async (e)=>{
    if(nameInput.innerHTML != ''){
        let name = nameInput.innerHTML
        let salutations = salutation()
        displayName.innerHTML = `${salutations}, ${name}!`
        inputProfile.style.display = 'none'
        displayProfile.style.display = 'flex'
        localStorage.setItem('userName', name)
    }
    else if(nameInput.innerHTML === ''){
        alert('Enter Name')
    }
})

fetch("https://type.fit/api/quotes")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    let pnum = Math.random() * 10
    let number = Number.parseInt(pnum)
    let author_name = response[number].author.substr(0, response[number].author.length - 10)
    console.log(response[number])
    console.log(author_name)
    quoteBox.innerHTML = `${response[number].text}`
    authorBox.innerHTML = `- ${author_name}`
})