var quotes = [ ['Sun','Star','Planet','Life'],
                ['is moving', 'is greater than', 'is not smaller than','is always changing on'],
                ['war.','game.','lights.','facts.']
            ];

var author = ['Ram Sukla', 'Krishna Gupta','Joy Roy','Sam Patro','John Brien'];


function newQuote(){
    //qtNum = Math.floor(Math.random() * quotes.length);
    authNum = Math.floor(Math.random() * author.length);
    var n=quotes.length;
    var quote=[];
    
    for (var i =0; i< n; i++){
        qtNum = Math.floor(Math.random() * quotes[i].length);
        quote.push(quotes[i][qtNum]);
        console.log(quotes[i][qtNum]);
      }
    
    var newQ = quote.slice(0, quote.length).join(' ');
      console.log(newQ);
    

    document.getElementById('qt').innerHTML= newQ;
    document.getElementById('auth').innerHTML = author[authNum] ;

}

