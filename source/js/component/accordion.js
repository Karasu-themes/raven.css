import { each } from '../utils/each';

const cleanAll = (arr) => {
  each(arr, (i, el) => {
    let body = el.querySelector('.cv-accordion__body');
    body.classList.remove('is-visible');
    el.classList.remove('is-active');
  })
}

const accordion = () => {
  let el = document.querySelectorAll('.cv-accordion');

  each(el, (i, accordion) => {
    let trigger = accordion.querySelector('.cv-accordion__trigger'), 
      body = accordion.querySelector('.cv-accordion__body');

    if ( body.classList.contains('is-visible') ) {
      accordion.classList.add('is-active');
    }

    trigger.addEventListener('click', () => {
      if (body.classList.contains('is-visible')) {
        body.classList.remove('is-visible');
        accordion.classList.remove('is-active');
      } else {
        cleanAll(el);
        body.classList.add('is-visible');
        accordion.classList.add('is-active');
      }

    });
    
  });
}

export { accordion };