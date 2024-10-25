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
  
  const handleFormSubmit = (event) => {
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
  
    // Call our function to get the form data.
    const data = formToJSON(form.elements);
  
    // Demo only: print the form data onscreen as a formatted JSON object.
    const dataContainer = document.getElementsByClassName('results__display')[0];
  
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, '  ');
    const dataString = JSON.stringify(data, null, '  ');
    console.log(JSON.stringify(data, null, '  '));
  
    // ...this is where we’d actually do something with the form data...
    createAccount(dataString)
    
  };

  async function createAccount(dataString) {
    console.log('start')
         url='http://localhost:8080/api/accounts' 
    try{
      const newProduct = dataString
      console.log('String sent thru post: '+newProduct)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json; charset=utf-8'
        },
        body: newProduct,
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

  
  const form = document.getElementById('addAccountForm');
  form.addEventListener('submit', handleFormSubmit);
}