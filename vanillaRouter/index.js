import Router from './router.js';
import Home from './components/Home.js';
import Mypage from './components/Mypage.js';
import Navigator from './components/Navigator.js';
import Cart from './components/Cart.js';
import Core from './Core.js';
class App extends Core {
  constructor() {
    super();
    this.router = new Router(this.$target, [
      { name: 'Home', component: Home },
      { name: 'Cart', component: Cart },
      { name: 'Mypage', component: Mypage },
    ]);
  }
  markup() {
    `${new Navigator(this.$target).markup()}`;
    // `${this.router.component}`
  }
}

new App(document.querySelector('#app'));
