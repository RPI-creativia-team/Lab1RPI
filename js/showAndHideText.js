const arrOfConditions = []

const lastSavedList = JSON.parse(sessionStorage.getItem('lastListSaved'))
if (lastSavedList != null) {
    for (let i = 0; i < lastSavedList.length; i++) {
        document.getElementById(lastSavedList[i]).classList.toggle('item-opened')
        arrOfConditions.push(lastSavedList[i])
    }
}

function deleteSpecificValue(specificValue) {
    if (arrOfConditions.indexOf(specificValue) !== -1)
        arrOfConditions.splice(arrOfConditions.indexOf(specificValue), 1)
}

document.querySelectorAll('.k-col-div-style').forEach(item => item.addEventListener('click', (event) => {
    console.log(event.currentTarget)
    if (arrOfConditions.find(item => item === event.currentTarget.id)) {
        event.currentTarget.classList.toggle('item-opened')
        deleteSpecificValue(event.currentTarget.id)
    } else {
        arrOfConditions.push(event.currentTarget.id)
        if (arrOfConditions.length !== 1) {
            document.getElementById(arrOfConditions[0]).classList.toggle('item-opened')
            deleteSpecificValue(arrOfConditions[0])
        }
        event.currentTarget.classList.toggle('item-opened')
    }
    sessionStorage.setItem('lastListSaved', JSON.stringify(arrOfConditions))
}))