//const abstractMethod = Symbol('abstract');

class FieldBase {
  constructor(dom, options) {}
  //

  render() {}

  getValue() {}

  setValue(value) {}

  isEmpty() {}

  isValid() {
    throw new Error("You must implement this method in a subclass");
  }
}
