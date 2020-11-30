import './units-space.scss'

export default function(units, usedUnits) {
    const unitsContainer = document.querySelector('.units-space')
    if(units !== null) {
        const unitBtns = []
        if (usedUnits) {
            usedUnits.forEach(unitId => {
                const unit = document.createElement("li")
                unit.classList.add('unit')
                unit.style.backgroundImage = `url(${units[unitId].pic})`
                unit.style.left = units[unitId].x + '%'
                unit.style.top = units[unitId].y + '%'
                unit.style.width = units[unitId].width + '%'
                unit.style.height = units[unitId].height + '%'

                const unitBtn = document.createElement("button")
                unitBtn.classList.add('unit__btn')
                unitBtns.push(unitBtn)

                unit.append(unitBtn)
                unitsContainer.append(unit)
            });
        }
        return unitBtns
    } else {
        unitsContainer.innerHTML = ''
    }
}