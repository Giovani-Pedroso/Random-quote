const text = document.getElementById("text");

const author = document.getElementById("author");

const newQuote = document.getElementById("new-quote");

const tweetQuote = document.getElementById("tweet-quote");

const tweetInit = "https://twitter.com/intent/tweet?hashtags=freeCodeCamp&text=\"";



const quote = () =>{ 
    fetch("http://api.quotable.io/random").then(response => {
    return response.json()}).then(json =>{ 
    text.innerText=json.content; 
    author.innerText=json.author; 
    tweetQuote.href = tweetInit + json.content + "\"" + " -" + json.author;
    }) ;
}

newQuote.addEventListener("click", quote);
quote();






/*console.log("ola");

const a = fetch("http://api.quotable.io/random");

const pharse = {
    text:'',
    author:'',
};

const quote = () =>{ 
    fetch("http://api.quotable.io/random").then(response => {
    return response.json()}).then(json =>{ 
        pharse.text=json.content;
        pharse.author=json.author;
        console.log(pharse);
    }) ;
}

const frase = () =>{

    let b = {};
     fetch("http://api.quotable.io/random").then(res => res.json()).then(j =>{
        b=j;
        console.log(b);
     } );
    
    return b;


}

console.log(frase());
*/
