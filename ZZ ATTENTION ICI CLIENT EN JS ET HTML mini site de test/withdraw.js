main()
function main() {
  /**
   * Checks that an element has a non-empty `name` and `value` property.
   * @param  {Element} element  the element to check
   * @return {Bool}             true if the element is an input, false if not
   */
  const isValidElement = (element) => {
      return element.name && element.value;
    };
  const formToJSON = (elements) =>
      [].reduce.call(
        elements,
        (data, element) => {
          // Make sure the element has the required properties.
          if (isValidElement(element)) {
            data[element.name] = element.value;
          }
    
          return data;
        },
        {}
      );
    
    const handleSubmit = (event) => {

      console.log("handleSubmit")
      // Stop the form from submitting since we’re handling that with AJAX.
      event.preventDefault();
    
      // Call our function to get the form data.
      const data = formToJSON(form.elements);
    
      // Demo only: print the form data onscreen as a formatted JSON object.
      const dataContainer = document.getElementsByClassName('results__display')[0];
    
      // Use `JSON.stringify()` to make the output valid, human-readable JSON.
      dataContainer.textContent = JSON.stringify(data, null, '  ');
      const amount=JSON.stringify(data, null, '  ');
      //const amount=data.amount
      const id= data.id
      console.log(id);
    
      // ...this is where we’d actually do something with the form data...
      withdraw(id,amount)
      
    };

  async function withdraw(id,amount) {
    console.log('start')
         url='http://localhost:8080/api/accounts/'+id+'/withdraw'
         console.log('at url'+url)
        //console.log("{\"amount\":"+amount+"}")
    try{
    
      console.log('url sent thru put: '+url)
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json; charset=utf-8'
        },
        body: amount
        // "{\"amount\":"+amount+"}"
      })
      console.log(response)
      console.log('status:', response.status)
    }
  
    catch(error){
        console.log(error);
    }
    finally{
        console.log(`Promise for fetch ${url} is resolved`);        
    }
}

  
  const form = document.getElementById('withdrawForm');
  form.addEventListener('submit', handleSubmit);
}