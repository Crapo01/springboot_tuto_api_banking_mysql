main()
function main() {


  //https://www.learnwithjason.dev/blog/get-form-values-as-json/

//GET ACCOUNT BY ID
  function handleIdSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    // Do a bit of work to convert the entries to a plain JS object
    const value = Object.fromEntries(data.entries());
    var id = data.get("id");

    console.log(value);    
    console.log(id);

    getAccountById(id);

  }

  async function getAccountById(id) {
    url = 'http://localhost:8080/api/accounts\/' + id;
    console.log('start:'+url)
    try {

      const response = await fetch(url
      )
      const data = await response.json();
      console.log(response)
      console.log(data);
      console.log('status:', response.status)
    }

    catch (error) {
      console.log(error);
    }
    finally {
      console.log(`Promise for fetch ${url} is resolved`);

    }
  }
// GET ALL ACCOUNTS
  function handleAllSubmit(event) {
    event.preventDefault();
    getAllAccounts();
  }

  async function getAllAccounts() {
    url = 'http://localhost:8080/api/accounts/all';
    console.log('start:'+url)
    try {

      const response = await fetch(url
      )
      const data = await response.json();
      console.log(data);
      console.log(response)
      console.log('status:', response.status)      
    }

    catch (error) {
      console.log(error);
    }
    finally {
      console.log(`Promise for fetch ${url} is resolved`);

    }
  }

// DELETE ACCOUNT BY ID
  function handleDeleteSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    // Do a bit of work to convert the entries to a plain JS object
    const value = Object.fromEntries(data.entries());
    var id = data.get("id");

    console.log(value);    
    console.log(id);

    deleteAccountById(id);

  }

  async function deleteAccountById(id) {
    url = 'http://localhost:8080/api/accounts\/' + id;
    console.log('start:'+url)
    try {

      const response = await fetch(url, {
        method: 'DELETE'
      })
      const data = await response.json();
      
      console.log(data)      
      console.log('status:', response.status)
    }

    catch (error) {
      console.log(error);
    }
    finally {
      console.log(`Promise for fetch ${url} is resolved`);

    }
  }

  const formId = document.getElementById('getByIdForm');
  formId.addEventListener('submit', handleIdSubmit);

  const formAll = document.getElementById('getAllForm');
  formAll.addEventListener('submit', handleAllSubmit);

  const formDelete = document.getElementById('deleteByIdForm');
  formDelete.addEventListener('submit', handleDeleteSubmit);
}


