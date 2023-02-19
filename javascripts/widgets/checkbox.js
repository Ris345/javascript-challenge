function checkbox(widget) {
  var checkboxes = widget.querySelectorAll("[kjs-role=checkmark]");
  const controlBox = document.getElementById("control");
  const checkOne = document.getElementById("check1");
  const checkTwo = document.getElementById("check2");
  const checkThree = document.getElementById("check3");
  const checkFour = document.getElementById("check4");
  console.log(checkOne.checked);

  function handleClick(e) {
    debugger;
    // if main box was selected
    if (e.target === controlBox) {
      controlBox.checked
        ? // select all
          selectControlBoxes()
        : // unselectAll
          unselectControlBoxes();
      // if related check box was selected
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked
          ? selectRelatedBoxes
          : indeterminateStage();
      }
    }
  }
  // only select the selected check box
  function selectRelatedBoxes() {
    if ((checkboxes.type = "checkbox")) {
      checkboxes.checked = true;
    }
  }

  function indeterminateStage() {
    // if the main is not selected then interdeterminate postiion = false
    // else inderminate position = true;
    controlBox.checked
      ? (controlBox.indeterminate = true)
      : (controlBox.indeterminate = false);
    // tocheck if all values are removed
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