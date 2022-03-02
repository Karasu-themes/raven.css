import { each } from '../utils/each';

const toggle = () => {
  let el = document.querySelectorAll('.cv-toggle');

  each(el, (i, toggle) => {
    let trigger = toggle.querySelector('.cv-toggle__trigger'), 
      body = toggle.querySelector('.cv-toggle__body');

    if ( body.classList.contains('is-visible') ) {
      toggle.classList.add('is-active')
    }

    trigger.addEventListener('click', () => {
      body.classList.toggle('is-visible');
      toggle.classList.toggle('is-active')
    })
    
  });

}

export { toggle };