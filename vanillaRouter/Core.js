export default class Core {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
    this.componentDidMount();
  }
  setup() {}
  render() {
    this.$target.innerHTML = this.markup();
  }
  markup() {
    return '';
  }
  componentDidMount() {}
}
