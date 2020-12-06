import './event-info.scss'

export default function(info) {
    const container = document.querySelector('.event-info')
    container.innerHTML = ''

    if (info.date === undefined) {
        const displayBtn = document.createElement('button')
        displayBtn.classList.add('btn')
        displayBtn.innerText = info
        container.append(displayBtn)
        return displayBtn
    }

    if (info.description)
        container.append(createLine(info.description))
    if (info.date)
        container.append(createLine(info.date))
    if (info.curator)
        container.append(createLine(info.curator))
    if (info.links)
        info.links.forEach(link => {
            container.append(createLine(link))
        });
}

function createLine (content) {
    const line = document.createElement('p')
    if (content.url) {
        if (!content.embed) {
        const link = document.createElement('a')
        link.href = content.url
        link.target = '_blank'
        link.innerText = content.label ? content.label : content.url
        line.append(link)
        } else {
            line.innerHTML = `<iframe width="${content.width}" height="${content.height}" src="https://www.youtube.com/embed/${content.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
    } else {
        line.innerText = content.label ? content.label : content
    }
    return line
}