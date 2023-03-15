import Core from '../Core.js';
export default class Home extends Core {
  constructor($target) {
    super();
    this.$target = $target;
  }
  render() {
    this.$target.innerHTMl = `Home`;
  }
}
