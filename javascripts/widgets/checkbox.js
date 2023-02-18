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
        deslectMainBoxes();
      }
      // if related check box was selected
    } else if (e.target === checkBox) {
      selectRelatedBoxes();
    }
  }

  function selectRelatedBoxes() {
    if ((checkboxes.type = "checkbox")) {
      checkboxes[i].checked = true;
    }
  }

  function diselectRelatedBoxes() {
    if ((checkboxes.type = "checkbox")) {
      checkboxes[i].checked = false;
    }
  }

  function selectMainBoxes() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  }

  function deslectMainBoxes() {
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
