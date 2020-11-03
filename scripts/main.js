let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === '/images/cat-pet-animal.jpg') {
        myImage.setAttribute('src', '/images/595558-200.png')
    } else {
        myImage.setAttribute('src', '/images/cat-pet-animal.jpg')
    }
}

let myButton = document.querySelector('button')
let myHeader = document.querySelector('h1')

function setUserName() {
    let myName = prompt('请输入你的名字。')
    if (!myName || myName === null) {
        setUserName()
    } else {
        localStorage.setItem('name', myName)
        myHeader.textContent = '欢迎，' + myName 
    }
}

if (localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name')
    myHeader.textContent = '欢迎，' + storedName
} else {
    setUserName()
}

document.querySelector('button').onclick = function() {
    setUserName()
}