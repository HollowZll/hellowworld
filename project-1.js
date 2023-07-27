// variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
    {
        quote: "Dickens is one of those authors who are well worth stealing",
        person: "George Orwell"
    }
    ,{
        quote: "What a blessed thing it is, that Nature, when she invented, manufactured, and patented her authors, contrived to make critics out of the chips that were left!",
        person: "Oliver Wendell"
    }
    , {
        quote: "It is impossible to live without failing at something, unless you live so cautiously you might as well not have lived at all – in which case, you fail by default",
        person: "JK Rowling"
    }
    , {
        quote: "Nobody is a villain in their own story. We’re all the heroes of our own stories",
        person: "George Martin"
    }
    , {
        quote: "Books are a uniquely portable magic",
        person: "King"
    }
    , {
        quote: "If one cannot enjoy reading a book over and over again there is no use reading it at all",
        person: "Wilde O."
    }
    , {
        quote: "All you have to do is write one true sentence. Write the truest sentence you know",
        person: "Hemmingway"
    }
    , {
        quote: "The love of books is among the choicest gifts of the gods",
        person: "Conan Doyle"
    }
    , {
        quote: "I try to avoid looking forward or backward and try to keep looking upward.",
        person: "Doyle"
    }
    , {
        quote: "A writer of fiction lives in fear. Each new day demands new ideas and he can never be sure whether he is going to come up with them or not ",
        person: "Dahl"
    },];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})