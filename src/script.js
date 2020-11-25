import '@/style.scss'
import bgSwitcher from '@comp/bg-switcher/bg-switcher'
import controlBtns from '@comp/control-btns/control-btns'

import map from '@data/map.json'
const points = map.points

let currentPoint = 0
let currentDirection = 'right'
bgSwitcher('init', points[currentPoint].url)

const ctrlBtn = controlBtns(points[currentPoint])
ctrlBtn.right.addEventListener('click', () => {pointRouter('right')})
ctrlBtn.left.addEventListener('click', () => {pointRouter('left')})
ctrlBtn.backward.addEventListener('click', () => {pointRouter('backward')})
ctrlBtn.forward.addEventListener('click', () => {pointRouter('forward')})

let isCtrlBloked = false

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