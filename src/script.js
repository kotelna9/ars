import '@/style.scss'
const limits = {
    minWidth: 320,
    maxWidth: 1920,
    minHeight: 162,
    maxHeight: 969
}

//подключение переключателя фона
import bgSwitcher from '@comp/bg-switcher/bg-switcher'
//подключение юнитов работ и артистов
import unitsSpace from '@comp/units-space/units-space'
//подключение управляющих кнопок
import controlBtns from '@comp/control-btns/control-btns'

//загрузка карты точек передвижения
import map from '@data/map.json'
const points = map.points
//загрузка архива работ
import archive from '@data/archive.json'
const units = archive.units

//инициализация переключателя на стартовой точке
let currentPoint = 0
let currentDirection = 'right'
bgSwitcher('init', points[currentPoint].url)

//
unitsSpace(units, points[currentPoint].units)

//задание обарботчиков для кнопок управления
const ctrlBtn = controlBtns(points[currentPoint])
ctrlBtn.right.addEventListener('click', () => {pointRouter('right')})
ctrlBtn.left.addEventListener('click', () => {pointRouter('left')})
ctrlBtn.backward.addEventListener('click', () => {pointRouter('backward')})
ctrlBtn.forward.addEventListener('click', () => {pointRouter('forward')})

//сохранять пропорции окна присутствия
const proportionBox = document.querySelector('.proportion-box')
const setProportionHeight = () => {
    proportionBox.style.width = '100%'
    if (proportionBox.offsetWidth > limits.minWidth) {
        if (proportionBox.offsetWidth < limits.maxWidth) {
            proportionBox.style.height = proportionBox.offsetWidth / 100 * 50.47 + 'px'
        } else {
            proportionBox.style.height = limits.maxHeight + 'px'
            proportionBox.style.width = limits.maxWidth + 'px'
        }
    } else {
        proportionBox.style.height = limits.minHeight + 'px'
    }
}
setProportionHeight()
window.addEventListener('resize', setProportionHeight)

//флаг блокировки кнопки при анимации переключения
let isCtrlBloked = false

//маршрутизация перемещения по карте с вызовом соответствующих переключателей и кнопок управления
function pointRouter(direction) {
    if (!isCtrlBloked) {
        if (points[currentPoint][direction] !== undefined) {
            isCtrlBloked = true
            setTimeout(() => {isCtrlBloked = false}, 1500)
            currentPoint = points[currentPoint][direction]
            currentDirection = direction !== 'backward' ? direction : currentDirection
            bgSwitcher(direction, points[currentPoint].url, currentDirection)
            controlBtns(points[currentPoint])
        } else {
            alert('ракурс недоступен')
        }
    }
}