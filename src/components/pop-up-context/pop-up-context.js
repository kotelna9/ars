import './pop-up-context.scss'

const boxMargin = 40

export default function(unit) {
    const popUpContext = document.querySelector('.pop-up-context')
    if(unit !== null) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.left = unit.x + '%'
        box.style.top = unit.y + '%'            
        box.append(createArticle(unit))
        popUpContext.append(box)
        positionIn(box)
    } else {
        popUpContext.innerHTML = ''
    }
}

function createArticle(unit) {
    const article = document.createElement('article')
    const title = document.createElement('h2')
    const body = document.createElement('p')
    const footer = document.createElement('p')

    article.classList.add('explication')
    title.classList.add('explication__name')
    body.classList.add('explication__description')
    footer.classList.add('explication__author')

    title.innerText = unit.name
    body.innerText = unit.description
    footer.innerHTML = '<a href="https://ru.wikipedia.org/wiki/Служебная:Случайная_страница" target="_blank">'+unit.author+'</a>'

    article.append(title)
    article.append(body)
    article.append(footer)

    return article
}

function positionIn(box) {
    if (box.offsetLeft + box.offsetWidth > box.offsetParent.offsetWidth - boxMargin) {
        box.style.left = (box.offsetLeft - ((box.offsetLeft + box.offsetWidth) - box.offsetParent.offsetWidth) - boxMargin*2) < 0 ? 0 + 'px' :
            (box.offsetLeft - ((box.offsetLeft + box.offsetWidth) - box.offsetParent.offsetWidth) - boxMargin*2) + 'px'
    }
    if (box.offsetTop + box.offsetHeight > window.screen.height) {
        box.style.left = (box.offsetLeft - ((box.offsetTop + box.offsetHeight) - window.screen.height) - boxMargin*2) < 0 ? 0 + 'px' :
            (((box.offsetTop + box.offsetHeight) - window.screen.height) - boxMargin*2) + 'px'
    }
    console.log(box.offsetParent.offsetWidth)
    console.log(window.screen.width)
}