function checkbox(widget) {
  const check = widget.querySelectorAll('[kjs-role=ceckbox]');
  const control = widget.querySelector('[kjs-role=control]');


  function handleCheck() {
    if (control) {
      console.log(check); 
     }
     
   }  

   const actions = [{
    element: check,
    event: 'change',
    handler: handleCheck
  }];
  return { setup, actions };
}

module.exports = checkbox; 