import Core from '../Core.js';
export default class Navigator extends Core {
  markup() {
    return `
    <div style="display:flex; justify-content:space-around">
        <h1>Router 연습</h1>
        <ul style="display:flex;justify-content:space-between; align-items:center; width:40%; font-size: 1.5em; list-style:none" >
            <a href="/vanillaRouter/"><li> Home</li></a>
            <a href="/vanillaRouter/cart"><li> Cart </li></a>
            <a href="/vanillaRouter/mypage"><li> MyPage </li></a>
    </div>
    `;
  }
}
