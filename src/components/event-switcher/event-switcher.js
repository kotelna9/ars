import './event-switcher.scss'

export default function(events) {
    const eventBtns = []
    const container = document.querySelector('.event-switcher')
    events.forEach(curEvent => {
        const eventBtn = document.createElement('button')
        eventBtn.classList.add('btn')
        eventBtn.innerText = curEvent.name
        container.append(eventBtn)

        eventBtns.push(eventBtn)
    });
    return eventBtns
}