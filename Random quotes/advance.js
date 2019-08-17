var general = [ ['Sun','Star','Planet','Life'],
                ['is moving', 'is greater than', 'is not smaller than','is always changing on'],
                ['war.','game.','lights.','facts.']
            ];
var motivation = [ ['Sun','Star','Planet','Life'],
            ['is moving', 'is greater than', 'is not smaller than','is always changing on'],
            ['war.','game.','lights.','facts.']
        ];
var author = ['-Ram Sukla', '-Krishna Gupta','-Joy Roy','-Sam Patro','-John Brien','-Rohit Tyagi', '-John Sinha','-Nasd Layer'];

if (document.getElementById("gen").clicked() === true){
  var quotes = general; console.log("General quote");
}
else if (document.getElementById("motiv").click() == true){
  var quotes = motivation; console.log('Motivation Quotes');
}
function newQuote(){
    //qtNum = Math.floor(Math.random() * quotes.length);
    authNum = Math.floor(Math.random() * author.length);
    var n=quotes.length;
    var quote=[];
    var e = document.getElementById('number_of_quote');
    var num = parseInt(e.options[e.selectedIndex].value);

    for(var j=0;j<num;j++){
        for (var i =0; i< n; i++){
            qtNum = Math.floor(Math.random() * quotes[i].length);
            quote.push(quotes[i][qtNum]);
            console.log(quotes[i][qtNum]);
          }
          quote.push('<br>');
    }

    var newQ = quote.slice(0, quote.length).join(' ');
    console.log(newQ);
  

  document.getElementById('qt').innerHTML= newQ;
  document.getElementById('auth').innerHTML = author[authNum] ;

}
