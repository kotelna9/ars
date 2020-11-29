import './units-space.scss'

export default function(units, usedUnits) {
    const unitsContainer = document.querySelector('.units-space')
    if (usedUnits) {
        usedUnits.forEach(unitId => {
            const unit = document.createElement("li")
            unit.classList.add('unit')
            unit.style.backgroundImage = `url(${units[unitId].pic})`
            unit.style.left = units[unitId].x + '%'
            unit.style.top = units[unitId].y + '%'
            unit.style.width = units[unitId].width + '%'
            unit.style.height = units[unitId].height + '%'
            unitsContainer.append(unit)
        });
    }
}