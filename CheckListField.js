class CheckList extends FieldBase {
  #choicesContainer;
  #selectAllElement;

  constructor(dom, options) {
    super(dom, options);
    this.dom = dom;
    this.options = options;
  }


  render() {
    // Append select all
    this.drawSelectAll();
    this.dom.appendChild(this.selects);
    // Append choices
    this.createListOfChoices();
    this.dom.appendChild(this.choices);
  }


  createElement(itemToAppend, type, settings) {
    const newElement = document.createElement(type);
    for (var key in settings) {
      //console.log(key + ": " +  settings[key]);
      newElement[key] = settings[key];
    }
    itemToAppend.appendChild(newElement);
    // Only
    return newElement;
  }
  

  drawSelectAll() {
    this.selects = document.createElement("ul");
    const li_Item = document.createElement("li");

    let settings = {
      type: "checkbox",
      checked: false,
      id: "selectAll",
      name: "selectAll",
    };

    this.#selectAllElement = this.createElement(li_Item, "input", settings);
    this.#selectAllElement.addEventListener("click", () => {
      this.#onSelectAllClick(this.#selectAllElement.checked);
    });
    // let me = this;
    // this.#selectAllElement.addEventListener("click", function () {
    //   me.#onSelectAllClick(this.checked);
    // });

    settings = {
      textContent: "Select ALL",
      htmlFor: "selectAllLabel",
      id: "checkmark",
    };
    this.createElement(li_Item, "label", settings);
    this.selects.appendChild(li_Item);
  }


  selectAll() {
    var elementChecked = this.dom.querySelectorAll("input[type=checkbox]");
    console.log(elementChecked);
  }


  createChoice(item, newItem) {
    // Note: Break the code into multiple methods

    if (options.inLine) {
      newItem.id = "inline-li";
    }

    // Create checkbox
    let settings = {
      type: "checkbox",
      checked: false,
      id: item.id,
      name: item.id,
      disabled: item.disabled,
    };

    let checkboxElement = this.createElement(newItem, "input", settings);
    this.registeringOnClick(checkboxElement, item);

    settings = {
      src: item.icon,
      alt: "Icon",
      id: "icons",
    };

    if (item.icon) {
      let iconElement = this.createElement(newItem, "img", settings);
    }

    settings = {
      textContent: item.text,
      htmlFor: item.id,
      id: "checkmark",
    };

    let labelElement = this.createElement(newItem, "label", settings);
  }


  // For best practice seperate the createChice method to many small method to create(draw) for example icon, label and input.
  #createChoiceInput() {}
  #createChoiceIcon() {}
  #createChoiceLabel() {}


  createListOfChoices() {
    this.choices = document.createElement("ul");

    options.listChoices.forEach((item) => {
      const newChoice = document.createElement("li");

      this.createChoice(item, newChoice);

      this.choices.appendChild(newChoice);
    });
  }


  getValue() {
    var elementChecked = this.choices.querySelectorAll("input[type=checkbox]");
    var checkedValues = [];

    for (var i = 0; i < elementChecked.length; i++) {
      if (elementChecked[i].checked) {
        checkedValues.push(elementChecked[i].id);
      }
    }

    return checkedValues;
  }


  setValue(dataChecked) {
    dataChecked.forEach(function (choiceId) {
      document.getElementById(choiceId).checked = true;
      // Solution:
      // let choiceElement = this.choices.findById("get matched chekbox");
    });
  }


  registeringOnClick(input, choice) {
    input.addEventListener("click", () => {
      const checkboxes = this.choices.querySelectorAll(
        "input[type='checkbox']"
      );
      //let isAllChecked = checkboxes.every((checkbox) => checkbox.checked);
      let isAllChecked = true;
      checkboxes.forEach((checkbox) => {
        if (!checkbox.checked && !checkbox.disabled) {
          isAllChecked = false;
        }
      });
      this.#selectAllElement.checked = isAllChecked;

      if (
        this.options.onChange &&
        typeof this.options.onChange === "function"
      ) {
        this.options.onChange(choice.id, choice.checked);
        console.log(`Lists after check ${input.id}`, this.getValue());
      }
    });
  }


  #onSelectAllClick(isChecked) {
    const checkboxes = this.choices.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
      //if (!checkbox.disabled) {
      checkbox.checked = isChecked;
      //}
    });
  }

  isValid() {
    console.log("This is the implementation in CheckListField");
  }
}


// this.choices <----