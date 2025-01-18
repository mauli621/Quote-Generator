const api_url = "https://quotes-api-self.vercel.app/quote";
const quote = document.getElementById("quote");
const author = document.getElementById("author"); 

async function  getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getquote(api_url);