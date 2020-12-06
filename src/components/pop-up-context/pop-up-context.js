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
            if (!link.embed) {
                section.classList.add('article__section')

                const linkElem = document.createElement('a')
                linkElem.href = link.url
                linkElem.target = '_blank'
                linkElem.innerText = link.label ? link.label : link.url

                section.append(linkElem)
            } else {
                if (link.embed === 'youtube') {
                    section.innerHTML = `<iframe width="${link.width}" height="${link.height}" src="https://www.youtube.com/embed/${link.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                } else if (link.embed === 'spotify') {
                    section.innerHTML = `<iframe src="https://open.spotify.com/embed/track/${link.url}" width="${link.width}" height="${link.height}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
                } else if (link.embed === 'yandex') {
                    if (link.list) {
                        section.innerHTML = `<iframe frameborder="0"  width="100%" height="450" src="https://music.yandex.ru/iframe/#playlist/${link.url}"></iframe>`
                    } else {
                        section.innerHTML = `<iframe frameborder="0" width="100%" height="80" src="https://music.yandex.ru/iframe/#track/${link.url}"></iframe>`
                    }
                } else {
                    section.innerHTML = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${link.url}?autoplay=1&loop=1&color=ff0179&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
                }
            }
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