function checkbox(widget) {
  var checkboxes = widget.querySelectorAll("[kjs-role=checkmark]");
  // var controls = widget.querySelector("[kjs-role=checkbox]");
  const controlBox = document.getElementById("control");
  console.log(controlBox.id);
  const checkBox = document.getElementById("check");
  console.log(checkBox.id);
  // console.log(controls.checked);

  function handleClick(e) {
    debugger;
    // if main box was selected
    if (e.target === controlBox) {
      if (controlBox.checked) {
        // select the boxes
        selectMainBoxes();
      } else {
        //  if main already selected unselect the boxes
        unselectMainBoxes();
      }
      // if related check box was selected
    } else if (e.target === checkBox) {
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
  function selectMainBoxes() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  }

  // unselect all checkboxes
  function unselectMainBoxes() {
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
