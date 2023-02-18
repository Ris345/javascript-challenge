function checkbox(widget) {
  var checkboxes = widget.querySelectorAll("[kjs-role=checkmark]");
  const controlBox = document.getElementById("control");
  const checkBox = document.getElementById("check");

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
      // if related check box were selected
    } else {
      selectRelatedBoxes();
    }
  }

  // only select the selected check box
  function selectRelatedBoxes() {
    if ((checkboxes.type = "checkbox")) {
      checkboxes.checked = true;
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
