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


// theme change UI button
const toggle = document.getElementById('themeBtn');
const nav = document.querySelector('nav');
const main = document.getElementById('prime-card');
const container = document.getElementById('container');
// const navUl = document.getElementById('navUl');
const navTitle = document.getElementById('nav-title');
const mainTitle = document.getElementById('mainTitle');
const homeBtn = document.getElementById('homeBtn');
const genBtn = document.getElementById('genBtn');
const loginBtn = document.getElementById('loginBtn')
const quoteBox = document.getElementById('quotesDisplaySection');



toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        // dark theme
        nav.style.backgroundColor='black';
        main.style.backgroundColor='black';
        container.style.backgroundColor='#8F43EE';
        navTitle.style.color = 'white';
        mainTitle.style.color = 'white';
        homeBtn.style.color = 'white';
        homeBtn.style.border = 'white';
        genBtn.style.color = 'white';
        loginBtn.style.color = 'white';
        homeBtn.addEventListener('mouseover',()=>{
            homeBtn.style.boxShadow = '0px 0px 2px 2px #f5f5f5'
        });
        homeBtn.addEventListener('mouseout',()=>{
            homeBtn.style.boxShadow = ''
        });
        genBtn.addEventListener('mouseover',()=>{
            genBtn.style.boxShadow = '0px 0px 2px 2px #f5f5f5'
        });
        genBtn.addEventListener('mouseout',()=>{
            genBtn.style.boxShadow = ''
        });loginBtn.addEventListener('mouseover',()=>{
            loginBtn.style.boxShadow = '0px 0px 2px 2px #f5f5f5'
        });
        loginBtn.addEventListener('mouseout',()=>{
            loginBtn.style.boxShadow = ''
        });
        generateBtn.style.color = 'black';
        generateBtn.style.backgroundColor = 'white';
        generateBtn.addEventListener('mouseover',()=>{
            generateBtn.style.boxShadow = '0px 0px 1px 2px gray'
        });
        generateBtn.addEventListener('mouseout',()=>{
            generateBtn.style.boxShadow = ''
        });
        quoteBox.style.backgroundColor = 'rgba(50, 50, 50, 0.2)';
        quoteText.style.color = 'white';
        toggle.style.color = 'yellow';
        toggle.style.backgroundColor = 'black';        
    }else{
        // Light theme
        nav.style.backgroundColor='#f2f2f2';
        main.style.backgroundColor='#f2f2f2';
        container.style.backgroundColor='#69c8ee'
        navTitle.style.color = 'black';
        mainTitle.style.color = 'black';
        homeBtn.style.color = 'black';
        genBtn.style.color = 'black';
        loginBtn.style.color = 'black';
        generateBtn.style.backgroundColor = 'black';
        generateBtn.style.color = 'white';
        quoteBox.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        quoteText.style.color = 'black'
        toggle.style.backgroundColor = '#f2f2f2';
        toggle.style.color = 'black';
        homeBtn.addEventListener('mouseover',()=>{
            homeBtn.style.boxShadow = '0px 0px 5px 5px rgba(0, 0, 0, 0.2)'
        });
        homeBtn.addEventListener('mouseout',()=>{
            homeBtn.style.boxShadow = ''
        });
        genBtn.addEventListener('mouseover',()=>{
            genBtn.style.boxShadow = '0px 0px 5px 5px rgba(0, 0, 0, 0.2)'
        });
        genBtn.addEventListener('mouseout',()=>{
            genBtn.style.boxShadow = ''
        });loginBtn.addEventListener('mouseover',()=>{
            loginBtn.style.boxShadow = '0px 0px 5px 5px rgba(0, 0, 0, 0.2)'
        });
        loginBtn.addEventListener('mouseout',()=>{
            loginBtn.style.boxShadow = ''
        });
    }
});