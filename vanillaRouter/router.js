export default class Router {
  constructor(target, routes, errorPage) {
    this.target = target;
    this.routes = routes;
    this.errorPage = errorPage;
    this.linkEventHandler();
    this.linkBackEventHanlder();
  }

  route() {
    const path = window.location.pathname;
    let target = this.routes.find((e) => e.name === path);
    if (target) {
      console.log(target.name);
      return;
    }
  }
  linkEventHandler() {
    this.target.addEventListener('click', (event) => {
      const target = event.target.closest('a');
      if (!target) return;
      event.preventDefault();
      this.push(target.href);
    });
  }
  linkBackEventHanlder() {
    window.addEventListener('popstate', () => {
      this.route();
    });
  }
  push(url) {
    window.history.pushState(null, null, url);
    this.route();
  }
}
//싱글톤 디자인패턴

//컴포넌트별로 패스 경로가 설정되어있음.
//event를 발생시키면 html에서 이벤트를 캐치해서 해당 이벤트 네임에 맞는 url 변경
//location.pathname을 보고 pathname에 맞으면 해당 컴포넌트 로드.
