const quotesData = [
    {
        quote: 'The only way to do great work is to love what you do'
    }, {
        quote: 'The difference between ordinary and extraordinary is that little extra'
    }, {
        quote: 'Do not go gentle into that good night, rage, rage against the dying of the light'
    }, {
        quote: 'The greatest glory in living lies not in never falling, but in rising everytime we fall'
    }, {
        quote: 'The only way to avoid doing great work is to try to avoid work all together'
    }, {
        quote: 'The best way to predict the future is to create it'
    }, {
        quote: 'The only limit to our realization of tomorrow will be our doubts of today'
    }, {
        quote: 'The only person you are destined to become is the person you decide to be'
    }, {
        quote: 'The only thing we have to fear is fear itself'
    }, {
        quote: 'The only constant in life is change'
    }
]

//* get all the constants
const quoteUl = document.getElementById('quoteText');
// quoteText.style.color = 'white';
const currentQuote = 0;


loadQuotes();

function loadQuotes() {
    const currentQuoteData = quotesData[currentQuote];
    const quoteText = document.createElement("li");
    quoteText = currentQuoteData.quote;
    quoteUl.appendChild(quoteText);
}