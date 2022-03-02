import { modal } from './component/modal';
import { tabs } from './component/tabs';
import { toggle } from './component/toggle';
import { accordion } from './component/accordion';
import { bind } from './component/bind';

export default (() => {
  modal();
  tabs();
  toggle();
  accordion();
  bind();
})();