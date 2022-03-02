import { each } from '../utils/each';

const validateSelector = (selector) => {
  const regExp = /([\.\#][a-z-A-Z-\--\_-\:]*)/g;
  return regExp.test(selector) ? true : false
}

const actionBind = (arr, remove) => {
  each(arr, (i, bind) => {
    let selector = bind.getAttribute('data-bind');

    if (validateSelector(selector)) {
      let element = document.querySelector(selector);

      if (element) {
        bind.addEventListener('click', () => {
          if (remove) {
            element.classList.remove('cv-bind-is-active')
          } else {
            if (element.classList.contains('cv-bind-is-active')) {
              element.classList.remove('cv-bind-is-active')
            } else {
              element.classList.add('cv-bind-is-active')
            }
          }
        });
      } else {
        console.warn(`"Selector" element doesn't exist`)
      }


    } else {
      console.warn(`"data-bind" value is not a valid selector`)
    }
  })
}

const bind = () => {
  let bindAdd = document.querySelectorAll('.cv-bind'),
  bindRemove = document.querySelectorAll('.cv-bind-close');

  // Add bind
  actionBind(bindAdd)
  // Remove bind
  actionBind(bindRemove, true)
}

export { bind }