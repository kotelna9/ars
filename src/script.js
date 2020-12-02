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
//
import popUpContext from '@comp/pop-up-context/pop-up-context'
//
import eventSwitcher from '@comp/event-switcher/event-switcher'
//подключение управляющих кнопок
import controlBtns from '@comp/control-btns/control-btns'

//загрузка карты точек передвижения
import map from '@data/map.json'
const points = map.points
//загрузка архива работ
import archive from '@data/archive.json'
const events = archive.events

//инициализация переключателя на стартовой точке
let currentPoint = 0
let currentDirection = 'right'

//задание обарботчиков для кнопок управления
const ctrlBtn = controlBtns(points[currentPoint])

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

//флаг блокировки кнопки при анимации переключения
let isCtrlBloked = false
const transitionTime = 1500
//
const currentDate = '24.11.2019'
let currentEvent = events.find(e => e.date === currentDate).id

// ИНИЦИАЛИЗАЦИЯ
init()

//
function init() {
    //
    bgSwitcher('init', points[currentPoint].url)
    //
    const eventBtns = eventSwitcher(events)
    eventBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            unitsSpace(null)
            currentEvent = index
            showUnits()

            setEventInfo()
            select(e)
        })
    })
    //
    showUnits()
    //
    setEventInfo()
    // выделяет кнопку (переделать)
    select()
    function select(e) {
        document.querySelector('.event-switcher').querySelectorAll('.btn').forEach(btn => { btn.classList.remove('btn_selected') })
        if (e) {
            e.target.classList.add('btn_selected')
        } else {
            document.querySelector('.event-switcher').querySelectorAll('.btn')[currentEvent].classList.add('btn_selected')
        }
    }
    //
    ctrlBtn.right.addEventListener('click', () => {pointRouter('right')})
    ctrlBtn.left.addEventListener('click', () => {pointRouter('left')})
    ctrlBtn.backward.addEventListener('click', () => {pointRouter('backward')})
    ctrlBtn.forward.addEventListener('click', () => {pointRouter('forward')})
    //
    setProportionHeight()
    window.addEventListener('resize', () => {
        setProportionHeight()
        popUpContext(null)
    })
}

//маршрутизация перемещения по карте с вызовом соответствующих переключателей и кнопок управления
function pointRouter(direction) {
    if (!isCtrlBloked) {
        if (points[currentPoint][direction] !== undefined) {
            isCtrlBloked = true
            setTimeout(() => {isCtrlBloked = false}, transitionTime)
            currentPoint = points[currentPoint][direction]
            currentDirection = direction !== 'backward' ? direction : currentDirection
            bgSwitcher(direction, points[currentPoint].url, currentDirection)
            controlBtns(points[currentPoint])
            unitsSpace(null)
            setTimeout(showUnits, transitionTime)
        } else {
            alert('ракурс недоступен')
        }
    }
}

//
function showUnits() {
    const units = events[currentEvent].units.filter(unit => unit.location === currentPoint)
    //
    const unitBtns = unitsSpace(units)
    unitBtns.forEach((unitBtn, index) => {
        unitBtn.addEventListener('click', () => {
            popUpContext(units[index])
        })
    });
    //
    document.addEventListener('click', () => { popUpContext(null) }, true)
}

function setEventInfo() {
    const descriptionElem = document.querySelector('.event-info__description')
    const pdfLinkElem = document.querySelector('.event-info__pdf-link')
    const eventLinkElem = document.querySelector('.event-info__event-link')
    const dateElem = document.querySelector('.event-info__date')

    descriptionElem.innerText = events[currentEvent].description ? events[currentEvent].description : ''
    pdfLinkElem.innerHTML = events[currentEvent].pdf ? `<a href="${events[currentEvent].pdf}"  target="_blank">Экспилкация события в pdf</a>` : ''
    eventLinkElem.innerHTML = events[currentEvent].event ? `<a href="${events[currentEvent].event}"  target="_blank">Ссылка на встречу</a>` : ''
    dateElem.innerText = 'дата события: ' + events[currentEvent].date
}