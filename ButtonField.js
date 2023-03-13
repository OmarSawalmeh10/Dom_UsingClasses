//dom, options
class ButtonField extends InputBase {
  constructor(dom, options) {
    super(dom, options);

    this.options = options;
  }

  render() {
    this.createButtonField(this.options);
    this.appendElement();
    this.#registeringOnClick();
  }

  createButtonField(options) {
    this.element = document.createElement("button");
    this.element.setAttribute("type", "button");
    this.element.setAttribute("id", options.id);
    this.element.setAttribute("name", options.name);
    this.element.textContent = options.label;
  }

  #registeringOnClick() {
    this.element.addEventListener("click", () => {
      //console.log('Type Of ===>', typeof this.options.handller);
      // Handller Check if its exist and type of is function
      if (this.options.onClick && typeof this.options.onClick === "function") {
        this.options.onClick();
      }
    });
  }
}
