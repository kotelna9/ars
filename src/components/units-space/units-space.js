import './units-space.scss'

export default function(units) {
    const unitsContainer = document.querySelector('.units-space')
    if(units !== null) {
        const unitBtns = []
        units.forEach(unit => {
            const unitElem = document.createElement("li")
            unitElem.classList.add('unit')
            unitElem.style.backgroundImage = `url(${unit.pic})`
            unitElem.style.left = unit.x + '%'
            unitElem.style.top = unit.y + '%'
            unitElem.style.width = unit.width ? unit.width + '%' : 'auto'
            unitElem.style.height = unit.height ? unit.height + '%' : 'auto'

            const unitPic = document.createElement("img")
            unitPic.src = unit.pic
            unitElem.append(unitPic)

            const unitBtn = document.createElement("button")
            unitBtn.classList.add('unit__btn')
            unitBtns.push(unitBtn)

            unitElem.append(unitBtn)
            unitsContainer.append(unitElem)
        });
        return unitBtns
    } else {
        unitsContainer.innerHTML = ''
    }
}