export default class Core {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.componentDidMount();
    this.render();
    this.appendChild();
  }
  setup() {}

  render() {
    this.$target.innerHTML = this.markup();
    if (this.props?.inner) {
      this.$target.replaceWith(...this.$target.childNodes);
    }
  }
  markup() {
    return '';
  }
  appendChild() {}
  componentDidMount() {}

  // setState(nextState) {
  //   this.state = { ...this.state, ...nextState };
  //   this.render();
  // }
  addEvent(eventType, selector, callback) {
    const target = (eventTarget) => eventTarget.closest(selector);
    this.$target.addEventListner(eventType, (event) => {
      if (!target(event.target)) return false;
      callback(event);
    });
  }
}
