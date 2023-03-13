class IntegerRangeField extends FieldBase {
  constructor(dom, options) {
    super(dom, options);
    this.dom = dom;
  }

  render() {
    // Render from element
    this.#createFromElement();
    this.dom.appendChild(this.fromLabel);
    this.dom.appendChild(this.fromRange);
    // Render to element
    this.#createToElement();
    this.dom.appendChild(this.toLabel);
    this.dom.appendChild(this.toRange);
  }

  #createInputRange(elementRange, id, placeholder) {
    elementRange.setAttribute("type", "number");
    elementRange.setAttribute("id", id);
    elementRange.setAttribute("placeholder", placeholder);
  }

  #createFromElement() {
    this.fromLabel = document.createElement("label");
    this.fromLabel.innerHTML = "From";

    this.fromRange = document.createElement("input");
    this.#createInputRange(this.fromRange, "min", "Min");
  }

  #createToElement() {
    this.toLabel = document.createElement("label");
    this.toLabel.innerHTML = "To";

    this.toRange = document.createElement("input");
    this.#createInputRange(this.toRange, "max", "Max");
  }

  getValue() {
    return { from: this.fromRange.value, to: this.toRange.value };
  }

  isEmpty() {
    return !this.fromRange.value && !this.toRange.value;
  }
}
