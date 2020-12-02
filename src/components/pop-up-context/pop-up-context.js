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
    article.classList.add('explication')

    if (unit.name) {
        const title = document.createElement('h2')
        title.classList.add('explication__name')
        title.innerText = unit.name
        article.append(title)
    }

    if (unit.description) {
        const part = document.createElement('p')
        part.classList.add('explication__part')
        part.innerText = unit.description
        article.append(part)
    }

    if (unit.author) {
        if (unit.contact) {
            const author = document.createElement('p')
            author.classList.add('explication__author')
            author.innerHTML = `Автор: <a href="${unit.contact}" target="_blank">${unit.author}</a>`
            article.append(author)
        } else {
            const author = document.createElement('p')
            author.classList.add('explication__author')
            author.innerText = 'Автор: ' + unit.author
            article.append(author)
        }
    }

    if (unit.pdf) {
        const part = document.createElement('p')
        part.classList.add('explication__footer')
        part.innerHTML = `<a href="${unit.pdf}" target="_blank">Открыть экспликацию в pdf</a>`
        article.append(part)
    }

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
}