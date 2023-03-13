class GetAllData extends InputBase {
  constructor(dom, options) {
    super(dom, options);

    this.options = options;

    this.createButtonField(options);

    this.render();
    this.registeringOnClick();
  }

  createButtonField(options) {
    this.element = document.createElement("button");
    this.element.setAttribute("type", "button");
    this.element.setAttribute("id", options.id);
    this.element.setAttribute("name", options.name);
    this.element.textContent = options.label;
  }

  registeringOnClick() {
    this.element.addEventListener("click", () => {
      if (this.options.onClick && typeof this.options.onClick === "function") {
        this.options.onClick();
      }
    });
  }
}
