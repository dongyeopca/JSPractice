import Core from '../Core.js';

export default class Mypage extends Core {
  constructor($target) {
    super();
    this.$target = $target;
  }
  render() {
    this.$target.innerHTMl = `Mypage`;
  }
}
