const modeCheck = document.querySelectorAll('button')
const bodyColor = document.querySelector('body')
const yellowHeading = document.querySelector('h1')
const paraColor = document.getElementsByTagName('p')
const codePara = document.getElementsByTagName('h2')
const headerColor = document.querySelector('header')
const dayMode = document.querySelector('.check-day')
const nightMode = document.querySelector('#night')

function switchColorDark() {
    dayMode.style.display = 'block'
    nightMode.style.display = 'none'
    bodyColor.style.backgroundColor = '#222'
    headerColor.style.backgroundColor = '#222'
    yellowHeading.children[0].style.color = 'rgb(255, 166, 0)'
    yellowHeading.style.color = '#fff'
    for (let i = 0; i < paraColor.length; i++) {
        paraColor[i].style.color = 'rgb(191 183 183'
        console.log(paraColor[i])
    }
    for (let j = 0; j < codePara.length; j++) {
        codePara[j].style.color = 'rgb(255, 166, 0)'
    }

}

function switchColorLight() {
    dayMode.style.display = 'none'
    nightMode.style.display = 'block'
    bodyColor.style.backgroundColor = '#fff'
    headerColor.style.backgroundColor = '#fff'
    yellowHeading.children[0].style.color = 'rgb(0 173 255)'
    yellowHeading.style.color = '#222'
    for (let i = 0; i < paraColor.length; i++) {
        paraColor[i].style.color = '#222'
        console.log(paraColor[i])
    }
    for (let j = 0; j < codePara.length; j++) {
        codePara[j].style.color = 'rgb(117, 109, 109);'
    }
}