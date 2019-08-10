/*
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
*/

var quotes = ['Sun','is','star','planet','Life','a','war','game','lights'];

var author = ['Ram Sukla', 'Krishna Gupta','Joy Roy','Sam Patro'];

newQuote(quotes,author);

dsocument.getElementById('nxtqt').click(function(){
    newQuote(quotes,author);
    
});

function newQuote(q,a){
    //qtNum = Math.floor(Math.random() * quotes.length);
    authNum = Math.floor(Math.random() * author.length);
    var n=4;
    var quote=[];

    for (var i =0; i<=n; i++){
        qtNum = Math.floor(Math.random() * quotes.length);
        quote.push(q[qtNum]);
        console.log(q[qtNum]);
      }
    
    var newQ = quote.slice(0, quote.length).join(' ');
      console.log(newQ);
    

    return(alert(newQ)); 
    document.getElementById('qt').text(newQ);
    document.getElementById('auth').text( a[authNum] );

}
