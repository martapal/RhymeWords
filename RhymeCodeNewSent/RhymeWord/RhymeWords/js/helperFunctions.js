//renders response before it is modified
// const renderRawResponse = (res) =>{
//     //taking first ten words from res
//     let trimmedResponse = res.slice(0, 10);
//     //manipulates responsiveField to render the unformatted response
//     responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`//converts a value into a string
//     // By converting the value to a string, we can then send the data to a server.
// }
//// Formats response to look presentable on webpage
//function for rendering results in clear
const renderResponse = (res,searchedword) => {
    // handles if res is falsey
    if(!res){
        console.log(res.status);
    }
    //in case res comes back as a blank array
    if (!res.length) {
        responseField.innerHTML = `<p>Try again!</p><p>There were no suggestions found!</p>`;
        return
    }
    //creating an array to contain the HTML strings
    let wordLists = [];
    // looping through the response and maxxing out at 10
    for (let i = 0; i < Math.min(res.length, 10) ; i++) {//with the res it 
        //creating a list of words
        wordLists.push(`<li>${res[i].word}</li>`);
       
    }

    //joining returned string into one word
    wordLists = wordLists.join("");
    //manipulates responsivefield to render the modified response
    responseField.innerHTML = `<p>Words that rhyme with the given word are : </p> <ol>${wordLists}</ol>`
   //connecting to the VoiceRSS API
    VoiceRSS.speech({
        key: 'd9afd739981d4b6183a2a138afcb1c6b',
        src: 
        searchedword + " " + res[0].word + " " + res[1].word +  " " + res[2].word + " " + 
        res[3].word + " " + res[4].word + " "  + res[5].word + " " + res[6].word + " "  + 
        res[7].word + " " + res[8].word + " "   + res[9].word,
        hl: 'en-gb',
        r: -5, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });

    return
}