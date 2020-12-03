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
    article.classList.add('article')

    if (unit.title) {
        const title = document.createElement('h2')
        title.classList.add('article__title')
        title.innerText = unit.title
        article.append(title)
    }

    if (unit.description) {
        const section = document.createElement('p')
        section.classList.add('article__section')
        section.innerText = unit.description
        article.append(section)
    }

    if (unit.author) {
        const section = document.createElement('p')
        section.classList.add('article__section')
        section.innerText = unit.author
        article.append(section)
    }

    if (unit.links) {
        unit.links.forEach(link => {
            const section = document.createElement('p')
            section.classList.add('article__section')

            const linkElem = document.createElement('a')
            linkElem.href = link.url
            linkElem.target = '_blank'
            linkElem.innerText = link.label ? link.label : link.url

            section.append(linkElem)
            article.append(section)
        });
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