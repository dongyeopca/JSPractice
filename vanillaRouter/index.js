import Router from './router.js';
import Home from './components/Home.js';
import Mypage from './components/Mypage.js';
import Navigator from './components/Navigator.js';
import Cart from './components/Cart.js';
import Core from './Core.js';
class App extends Core {
  constructor($target) {
    super($target);
  }
  setup() {
    this.routes = [
      { path: 'vanillaRouter/', component: Home },
      { path: 'vanillaRouter/cart', component: Cart },
      { path: 'vanillaRouter/mypage', component: Mypage },
    ];
  }
  markup() {
    return `<div id="navigation"></div><div id="content"></div>`;
  }

  appendChild() {
    const nav = document.querySelector('#navigation');
    new Navigator(nav, { inner: true });
    const content = document.querySelector('#content');
    new Router(this.$target, content, this.routes);
  }
}

new App(document.querySelector('#app'));
