import Core from '../Core.js';
export default class Home extends Core {
  constructor($target) {
    super($target);
  }
  markup() {
    return `<div id="home"><h1> This is Home Page</h1> </div>`;
  }
  appendChild() {
    // const home = document.querySelector('#home');
  }
}
