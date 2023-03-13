class PasswordField extends InputBase {
  constructor(dom, options) {
    super(dom, options);

    this.options = options;
  }

  render() {
    this.#createPasswordField(this.options);
    this.appendElement();
  }

  #createPasswordField(options) {
    this.element = document.createElement("input");
    this.element.setAttribute("type", "password");
    this.element.setAttribute("id", options.id);
    this.element.setAttribute("name", options.name);
    this.element.readOnly = options.readOnly;
    this.element.required = options.isRequired;
  }
}
