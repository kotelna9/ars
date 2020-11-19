import './carousel.scss'

export default function(prev, next, direction = 'right') {
    const carousel = document.querySelector('.carousel')
    
    carousel.querySelector('.carousel__prev').classList.remove('carousel__prev_stop');
    carousel.querySelector('.carousel__next').classList.remove('carousel__next_stop');

    carousel.querySelector('.carousel__prev').classList.remove('carousel__pic_'+prev);                
    carousel.querySelector('.carousel__prev').classList.add('carousel__pic_'+next);
    
    carousel.firstChild.style.webkitAnimation = 'none';
    carousel.lastChild.style.webkitAnimation = 'none';
    setTimeout(function() { 
    carousel.firstChild.style.webkitAnimation = '';
    carousel.lastChild.style.webkitAnimation = '';
    
    carousel.firstChild.classList.toggle('carousel__next');
    carousel.firstChild.classList.toggle('carousel__prev');
    
    carousel.lastChild.classList.toggle('carousel__prev');
    carousel.lastChild.classList.toggle('carousel__next');

    if (carousel.firstChild.classList.contains('carousel__prev')) {
        if (direction === 'right') {
            carousel.firstChild.classList.add('carousel__prev_right');
            carousel.firstChild.classList.remove('carousel__prev_left');
            carousel.firstChild.classList.remove('carousel__next_right');
            carousel.firstChild.classList.remove('carousel__next_left');
        } else {
            carousel.firstChild.classList.remove('carousel__prev_right');
            carousel.firstChild.classList.add('carousel__prev_left');
            carousel.firstChild.classList.remove('carousel__next_right');
            carousel.firstChild.classList.remove('carousel__next_left');
        }
    } else {
        if (direction === 'right') {
            carousel.firstChild.classList.add('carousel__next_right');
            carousel.firstChild.classList.remove('carousel__next_left');
            carousel.firstChild.classList.remove('carousel__prev_right');
            carousel.firstChild.classList.remove('carousel__prev_left');
        } else {
            carousel.firstChild.classList.remove('carousel__next_right');
            carousel.firstChild.classList.add('carousel__next_left');
            carousel.firstChild.classList.remove('carousel__prev_right');
            carousel.firstChild.classList.remove('carousel__prev_left');
        }
    }

    if (carousel.lastChild.classList.contains('carousel__prev')) {
        if (direction === 'right') {
            carousel.lastChild.classList.add('carousel__prev_right');
            carousel.lastChild.classList.remove('carousel__prev_left');
            carousel.lastChild.classList.remove('carousel__next_right');
            carousel.lastChild.classList.remove('carousel__next_left');
        } else {
            carousel.lastChild.classList.remove('carousel__prev_right');
            carousel.lastChild.classList.add('carousel__prev_left');
            carousel.lastChild.classList.remove('carousel__next_right');
            carousel.lastChild.classList.remove('carousel__next_left');
        }
    } else {
        if (direction === 'right') {
            carousel.lastChild.classList.add('carousel__next_right');
            carousel.lastChild.classList.remove('carousel__next_left');
            carousel.lastChild.classList.remove('carousel__prev_right');
            carousel.lastChild.classList.remove('carousel__prev_left');
        } else {
            carousel.lastChild.classList.remove('carousel__next_right');
            carousel.lastChild.classList.add('carousel__next_left');
            carousel.lastChild.classList.remove('carousel__prev_right');
            carousel.lastChild.classList.remove('carousel__prev_left');
        }
    }
    }, 10);
}

