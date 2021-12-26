import { each } from '../utils/each';
import { toArray } from '../utils/toArray';


const tabs = () => {
  let trigger = document.querySelectorAll('.cv-tabs');


  each(trigger, (i, item) => {
    let tab = toArray(item.querySelectorAll('button')),
      contents = item.querySelectorAll('.cv-tabs-item');
      
    each(tab, (i, el) => {
      let index = tab.indexOf(el);
      el.addEventListener('click', () => {
        // Ocultamos todos contenedores
        each(contents, (i, el) => el.classList.remove('is-selected'));
        each(tab, (i, el) => el.classList.remove('is-selected'));

        // Mostramos el tab actual
        contents[index].classList.add('is-selected');
      
        el.classList.add('is-selected');

      })

    })

  });
}

export { tabs }