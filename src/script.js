import '@/style.scss'
import bgSwitcher from '@comp/bg-switcher/bg-switcher'

import map from '@data/map.json'
const points = map.points

bgSwitcher('init', points[0].url);

// setTimeout(()=>{bgSwitcher('right', points[1].url)}, 3000)

// setTimeout(()=>{bgSwitcher('left', points[0].url)}, 6000)

setTimeout(()=>{bgSwitcher('forward', points[4].url)}, 3000)




// import carousel from '@comp/carousel/carousel'

// const rightBtn = document.querySelector('.control__right')
// const leftBtn = document.querySelector('.control__left')
// const backBtn = document.querySelector('.control__back')

// let currentPrev = 4
// let currentNext = 1
// let rightDirection = true;

// rightBtn.addEventListener('click', () => {
//     if (!rightDirection) {
//         let x = currentPrev
//         currentPrev = currentNext
//         currentNext = x
//         carousel(currentPrev, currentNext)
//         rightDirection = true
//     } else {
//         currentNext = currentNext >= 4 ? 1 : currentNext + 1
//         carousel(currentPrev, currentNext)
//         currentPrev = currentPrev >= 4 ? 1 : currentPrev + 1
//     }
//     console.log('r')
// });

// leftBtn.addEventListener('click', () => {
//     if (rightDirection) {
//         let x = currentPrev
//         currentPrev = currentNext
//         currentNext = x
//         carousel(currentPrev, currentNext, 'left')
//         rightDirection = false
//     } else {
//         currentNext = currentNext <= 1 ? 4 : currentNext - 1
//         carousel(currentPrev, currentNext, 'left')
//         currentPrev = currentPrev <= 1 ? 4 : currentPrev - 1
//     }
//     console.log('l')
// });

// backBtn.addEventListener('click', () => {
//     if (rightDirection) {
//         currentNext = currentNext >= 4 ? 1 : currentNext + 1;
//         carousel(currentPrev, currentNext);
//         currentPrev = currentPrev >= 4 ? 1 : currentPrev + 1;
//         setTimeout(() => {  
//             currentNext = currentNext >= 4 ? 1 : currentNext + 1;
//             carousel(currentPrev, currentNext);
//             currentPrev = currentPrev >= 4 ? 1 : currentPrev + 1;
//         }, 1500)
//     } else {
//         currentNext = currentNext <= 1 ? 4 : currentNext - 1
//         carousel(currentPrev, currentNext, 'left')
//         currentPrev = currentPrev <= 1 ? 4 : currentPrev - 1
//         setTimeout(() => {
//             currentNext = currentNext <= 1 ? 4 : currentNext - 1
//             carousel(currentPrev, currentNext, 'left')
//             currentPrev = currentPrev <= 1 ? 4 : currentPrev - 1
//         }, 1500)
//     }
// });