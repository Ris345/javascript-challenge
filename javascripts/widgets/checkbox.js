function checkbox(widget) {
  var checkboxes = widget.querySelectorAll("[kjs-role=checkbox]");
  var controls = widget.querySelectorAll("[kjs-role=Control]");
  
  function handleClick(e) {
    console.log('item clicked'); 
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
