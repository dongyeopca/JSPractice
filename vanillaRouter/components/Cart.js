import Core from '../Core.js';
export default class Cart extends Core {
  constructor($target) {
    super();
    this.$target = $target;
  }
  render() {
    this.$target.innerHTMl = `Cart`;
  }
}
