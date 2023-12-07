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
const quoteText = document.getElementById('quoteText');
const generateBtn = document.getElementById('generateBtn');
let currentQuote = 0;

// quoteText.innerText = currentQuoteData.quote;

generateBtn.addEventListener('click', function() {
    const currentQuoteData = quotesData[currentQuote]; 
    quoteText.innerText = currentQuoteData.quote;
    currentQuote++;

    console.log(currentQuote, quotesData.length);
    if(currentQuote == quotesData.length) {
        quoteText.innerText = "You have ran out of free quotes!";
        generateBtn.style.width = '150px'; 
        generateBtn.style.boxShadow = '0px 0px 129px 0px rgba(235,235,235,0.39)'; 
        generateBtn.innerText = "Login / Sign Up";
    }
});