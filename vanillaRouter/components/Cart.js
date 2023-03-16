import Core from '../Core.js';
export default class Cart extends Core {
  constructor($target) {
    super($target);
    this.$target = $target;
  }
  markup() {
    return `<div id="cart"><h1>This is Cart Page</h1></div>`;
  }
  appendChild() {}
}
