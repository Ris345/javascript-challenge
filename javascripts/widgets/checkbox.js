function checkbox(widget) {
  var checkboxes = widget.querySelectorAll("[kjs-role=checkmark]");
  const controlBox = document.getElementById("control");
  const checkOne = document.getElementById("check1");
  const checkTwo = document.getElementById("check2");
  const checkThree = document.getElementById("check3");
  const checkFour = document.getElementById("check4");

  function handleClick(e) {
    // if controlling checkbox was selected
    if (e.target === controlBox) {
      // check if control box is checked
      controlBox.checked
        ? // select all
          selectControlBoxes()
        : // unselectAll
          unselectControlBoxes();
      // if related check box was selected
    } else {
      helper();
    }
  }

  // check to  see if related boxes need to be checked or called to indeterminate stage
  function helper() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked ? selectRelatedBoxes() : indeterminateStage();
    }
  }

  // only select the selected related check box
  function selectRelatedBoxes() {
    if ((checkboxes.type = "checkbox")) {
      checkboxes.checked = true;
    }
    // remove the indeterminate stage and add a checked box
    if (
      checkOne.checked &&
      checkTwo.checked &&
      checkThree.checked &&
      checkFour.checked &&
      controlBox.indeterminate
    ) {
      return (controlBox.indeterminate = false);
    }
  }

  // indeterminate stage
  function indeterminateStage() {
    controlBox.checked
      ? (controlBox.indeterminate = true)
      : (controlBox.indeterminate = false);

    //  if all values are unchecked
    if (
      !checkOne.checked &&
      !checkTwo.checked &&
      !checkThree.checked &&
      !checkFour.checked
    ) {
      controlBox.checked = false;
    }
  }

  // select all checkBoxes
  function selectControlBoxes() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  }
  // unselect all checkboxes
  function unselectControlBoxes() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }

  var actions = [];
  checkboxes.forEach((element) => {
    actions.push({
      element: element,
      event: "click",
      handler: handleClick,
    });
  });

  return { actions: actions };
}

module.exports = checkbox;
