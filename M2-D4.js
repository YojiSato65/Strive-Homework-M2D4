// let body = document.getElementById('body')
// let newUl = document.createElement('ul')
// let newName = document.createElement('li')
// body.appendChild('newUl')
// newUl.appendChild('newName')

const addNameToList = function ()
{
    let waitingList = []
    for (let i = 0; i < waitingList.length; i++)
    {
        let newNameNode = waitingList[i]
        waitingList.push(newNameNode)
    }
}

let addNameButton = document.getElementById('addName')
addNameButton.addEventListener('click', addNameToList)