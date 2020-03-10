console.log('File connected')

const listItems = document.getElementsByTagName('li')

const headerText = document.querySelector('.title')

headerText.classList.add('dark-mode')

console.dir(headerText.innerText)

headerText.innerText = 'I am in control now'

headerText.style.color = 'red'

// function showMeTheMoney(){
//     console.log('$$$$$$')
// }

const formButton = document.getElementById('story-button')

function changeColor(e){
    e.preventDefault()
    const contentHold = document.querySelector('.content-hold')
    const colorInput = document.getElementById('color-input')
    contentHold.style.background = colorInput.value
}

formButton.addEventListener('click', changeColor)

function addAPart(e){
    e.stopPropagation()
    console.log(e)
    const newLi = document.createElement('li')
    const listItems = document.querySelectorAll('li')
    console.log(listItems)

    newLi.addEventListener('dblclick', function(){
        newLi.remove()
    })

    newLi.innerText = `ACT ${listItems.length + 1} is the GREATEST`
    // newLi.innerText =  "THE GREATEST"
    const partList = document.getElementById('part-list')
    partList.appendChild(newLi)


}

document.getElementById('part-button').addEventListener('click', addAPart)

