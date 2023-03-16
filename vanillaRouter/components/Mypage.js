import Core from '../Core.js';

export default class Mypage extends Core {
  constructor($target) {
    super($target);
  }
  markup() {
    return `<div id="mypage"><h1>This is MyPage</h1></div>`;
  }
  appendChild() {}
}
