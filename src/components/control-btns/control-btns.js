import './control-btns.scss'

export default function(point) {
    const controlBtns = document.querySelector('.control-btns')
    const rightBtn = controlBtns.querySelector('.btn_right')
    const leftBtn = controlBtns.querySelector('.btn_left')
    const backwardBtn = controlBtns.querySelector('.btn_backward')
    const forwardBtn = controlBtns.querySelector('.btn_forward')

    if (point.right === undefined) {
        rightBtn.classList.add('btn_none')
    } else {
        rightBtn.classList.remove('btn_none')
    }
    if (point.left === undefined) {
        leftBtn.classList.add('btn_none')
    } else {
        leftBtn.classList.remove('btn_none')
    }
    if (point.backward === undefined) {
        backwardBtn.classList.add('btn_none')
    } else {
        backwardBtn.classList.remove('btn_none')
    }
    if (point.forward === undefined) {
        forwardBtn.classList.add('btn_none')
    } else {
        forwardBtn.classList.remove('btn_none')
    }

    if (point.forwardPosition) {
        forwardBtn.style.top = point.forwardPosition.y + '%'
        forwardBtn.style.left = point.forwardPosition.x + '%'
    }

    return {
        right: rightBtn,
        left: leftBtn,
        backward: backwardBtn,
        forward: forwardBtn
    }
}