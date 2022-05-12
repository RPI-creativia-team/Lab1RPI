function createSlider(num, parent_id, text, img)
{
    const parent = document.getElementById(parent_id)
    const imgDiv = document.createElement('div')
    imgDiv.id = "img-div"

    const imgTag = document.createElement("img")
    imgTag.src = img
    imgTag.alt = "Client"

    const pTag = document.createElement("p")
    pTag.textContent = text
    pTag.className = "n-5page-client-name"

    imgDiv.appendChild(imgTag)
    imgDiv.appendChild(pTag)

    const contDiv = document.createElement("div")
    contDiv.className = "n-5page-cont-selector"
    contDiv.id = "cont-div"

    for (let i = 0; i < 3; i++)
    {
        let selectorDiv = document.createElement('div')
        selectorDiv.className = "n-5page-selector"
        if (num === i)
        {
            selectorDiv.style="margin-right: 4px; background-color: #ff0036"
        }
        else
        {
            selectorDiv.style = "margin-right: 4px"
        }
        selectorDiv.onclick = function () {
            localStorage.setItem('num',JSON.stringify(i))
            removeSlider('n-5page-data')
            createSlider(i,'n-5page-data',names[i],pics[i])
        }
        contDiv.appendChild(selectorDiv)
    }

    parent.appendChild(imgDiv)
    parent.appendChild(contDiv)
}

function removeSlider(parent_id)
{
    const parent = document.getElementById(parent_id)

    const imgDiv = document.getElementById('img-div')
    const contDiv = document.getElementById('cont-div')

    parent.removeChild(imgDiv)
    parent.removeChild(contDiv)
}

const names = ['AMR SROUR','NIKITA HRIPACH','ROMAN SHIDLOVSKY']
const pics = ['images/nImg/pg5-man-hex.png','images/nImg/hripach.png','images/nImg/shidlovsky.png']

function setSlider()
{

    let num = JSON.parse(localStorage.getItem('num'))
    num = (num + 1) % 3
    removeSlider('n-5page-data')
    createSlider(num,'n-5page-data',names[num],pics[num])
    localStorage.setItem('num', JSON.stringify(num))
}
const num = JSON.parse(localStorage.getItem('num'))
createSlider(num,'n-5page-data',names[num],pics[num])

setInterval(function (){setSlider()}, 7000)
