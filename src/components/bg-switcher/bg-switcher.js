import './bg-switcher.scss'

export default function(operation, picUrl, direction) {
    const bgSwitcherElem = document.querySelector('.bg-switcher')
    const currentLayer = bgSwitcherElem.querySelector('.bg-switcher__current')
    const nextLayer = bgSwitcherElem.querySelector('.bg-switcher__next')
    let isAllAnimEnd = false
    const currentAnimations = []

    if (operation === 'init') {
        currentLayer.style.backgroundImage = `url(${picUrl})`
    } else if (operation === 'right') {
        currentAnimations.push('shift_left')
        currentAnimations.push('shift_left')
        showTransition()
    } else if (operation === 'left') {
        currentAnimations.push('shift_right')
        currentAnimations.push('shift_right')
        showTransition()
    } else if (operation === 'backward') {
        const backwardAnimation = direction === 'left' ? 'right' : 'left'
        currentAnimations.push(backwardAnimation)
        currentAnimations.push(backwardAnimation)
        showTransition()
    } else if (operation === 'forward') {
        currentAnimations.push('increase')
        currentAnimations.push('unblur')
        showTransition()
    }

    function showTransition() {
        isAllAnimEnd = false

        currentLayer.classList.toggle('bg-switcher__current_'+currentAnimations[0])
        currentLayer.addEventListener('animationend', checkAnimEnd)

        nextLayer.style.backgroundImage = `url(${picUrl})`
        nextLayer.classList.toggle('bg-switcher__next_'+currentAnimations[1])
        nextLayer.addEventListener('animationend', checkAnimEnd)
    }
    function checkAnimEnd() {
        if (isAllAnimEnd) {
            clearAndSwap()
        } else {
            isAllAnimEnd = true
        }
    }

    function clearAndSwap() {
        currentLayer.classList.toggle('bg-switcher__current_'+currentAnimations[0])
        currentLayer.classList.toggle('bg-switcher__current')
        currentLayer.classList.toggle('bg-switcher__next')
        nextLayer.classList.toggle('bg-switcher__next_'+currentAnimations[1])
        nextLayer.classList.toggle('bg-switcher__next')
        nextLayer.classList.toggle('bg-switcher__current')
    }

    console.log(currentAnimations)
}