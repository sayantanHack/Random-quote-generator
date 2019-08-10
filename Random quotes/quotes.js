var quotes = ['Sun','is','star','planet','Life','a','war','game','lights'];

var author = ['Ram Sukla', 'Krishna Gupta','Joy Roy','Sam Patro'];

newQuote(quotes,author);

document.getElementById('nxtqt').click(function(){
    newQuote(quotes,author);
    
});

function newQuote(q,a){
    qtNum = Math.floor(Math.random() * quotes.length);
    authNum = Math.floor(Math.random() * author.length);
    document.getElementById('qt').text('" '+ q[qtNum] + ' "');
    dsocument.getElementById('auth').text('" '+ a[authNum] + ' "');

}
