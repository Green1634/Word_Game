//codes for third letter 
var letter = function () {
    var your_name; 
    var result;
  your_name = document.getElementById("name").value; 
  result = your_name.slice(2, 3);
  document.getElementById("res").value = result;
  }
  


//codes forrandom letter 
var quotes = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function newQuote() {
var randomNumber = Math.round(Math.random()* (quotes.length));
document.getElementById('quoteDisplay').value = quotes[randomNumber];
}

var final = function () {
if (letter === newQuote) {
  var position
    position = "you are correct"
    document.getElementById("reply").innerHTML = position;
  }

  else  {
    position = "try again"
    document.getElementById("reply").innerHTML = position;
  }
}