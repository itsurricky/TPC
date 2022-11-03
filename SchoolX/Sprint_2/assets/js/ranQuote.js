arrQuote = [
    {
        author: 'Dalai Lama',
        quote: '"The purpose of our lives is to be happy."',
    },
    {
        author: 'Thomas A. Edison',
        quote: '"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
    },
    {
        author: 'Babe Ruth',
        quote: '"Never let the fear of striking out keep you from playing the game."',
    },
    {
        author: 'Will Smith',
        quote: '"Money and success don’t change people; they merely amplify what is already there."',
    },
    {
        author: 'Steve Jobs',
        quote: '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."',
    },
    {
        author: 'Seneca',
        quote: '"Not how long, but how well you have lived is the main thing',
    },
    {
        author: 'Frank Sinatra',
        quote: '"The big lesson in life, baby, is never be scared of anyone or anything."',
    }
]
const text = document.querySelector('.bottom-text')
const quotes = document.querySelector('.bottom-textQuote')
const signature = document.querySelector('.bottom-textSignature')
text.addEventListener("click",function() {
    const item = arrQuote[Math.floor(Math.random()*arrQuote.length)];
    quotes.innerHTML = item.quote;
    signature.innerHTML = item.author;
})