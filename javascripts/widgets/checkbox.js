function checkbox(widget) {
  var checkboxes = widget.querySelectorAll("[kjs-role=checkbox]");
  //var controls = widget.querySelectorAll("[kjs-role=Control]");
  //console.log("controls:", controls);
  console.log("checkboxes:", checkboxes);

  function handleClick() {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == checkbox) {
        console.log(true);
      }
      // if checkboxes are unchecked then check em
      // else if check boxes are checked uncheck em
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
