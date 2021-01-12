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
    if (info.curator)
        container.append(createLine(info.curator))
    if (info.links)
        info.links.forEach((link, index) => {
            const linkElement = createLine(link);
            if (index === 0) { linkElement.classList.add('link_first'); }
            container.append(linkElement);
        });
    
    if (info.date) {
        const date = createLine(info.date);
        date.classList.add('date')
        container.append(date)
    }
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
        } else if (content.embed === 'youtube') {
            line.innerHTML = `<iframe width="${content.width}" height="${content.height}" src="https://www.youtube.com/embed/${content.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        } else {
            const frame = document.createElement('iframe');
            frame.src = content.url;
            // frame.setAttribute('src', content.url);
            line.append(frame);
        }
    } else {
        line.innerText = content.label ? content.label : content
    }
    return line
}