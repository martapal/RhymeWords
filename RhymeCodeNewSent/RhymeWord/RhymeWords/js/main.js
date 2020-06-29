const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';
//connecting to the html (ids)
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


//AJAX function//stands for Asynchronous JavaScript And XML//
//AJAX is a technique for accessing web servers from a web page
const getSuggestions = async () => {
    const wordQuery = inputField.value;//gets the input given by the user
   const endpoint = `${url}${queryParams}${wordQuery}`;//add a query string to the URL with all the necessary parameters.
   try {
      const response = await fetch(endpoint, {   //await is an operator: it returns the resolved value of the promise. 
           cache: 'no-cache'                   //Since promises resolve in an indeterminate amount of time, await halts, 
       });                                    //or pauses, the execution of our async function until a given promise is resolved.
       if (response.ok) {                     // fetch = go for and then bring back the information
           
           const jsonResponse = await response.json();//await the resolution of calling the .json() method on response.
           //Since .json() is an asynchronous method we have to await until the promise status is resolved. Then we store the value to know what data the JSON holds.
           renderResponse(jsonResponse, wordQuery);
           //The renderResponse() function is used to take in the response and present the results in a clean way on the page. 
           //It takes the response object and takes each word, combines them into one string, then displays them on the page.
       }
    } catch (error) {//is executed when the promise is rejected ->  the promise that the call to the api will
       console.log(error); //return a list of words
    }
    //Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

}



//function for displaying returned results
//clear previous results and display results to webpage
const displaySuggestions = (event) => {
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);//The removed child node still exists in memory, but is no longer part of the DOM
        //responseField is parent node;
        //it removes the first element of the list
    }
    getSuggestions();
}
submit.addEventListener('click', displaySuggestions);









































