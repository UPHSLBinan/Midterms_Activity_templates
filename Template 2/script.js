var totalPrice = 0;
var rowCount = 0;

function purchase(movie) {
  const prices = {
    'avengers': 270,
    'ultron': 300,
    'infinity': 325,
    'endgame': 325,
    'secret': 350,
    'kang': 375
  }

  const movieTitles = {
    'avengers':  'Avengers',
    'ultron': 'Avengers Age of Ultron',
    'infinity': 'Avengers Infinity War',
    'endgame': 'Avengers Endgame',
    'secret': 'Avengers Secret Wars',
    'kang': 'Avengers Kang Dynasty'
  }
    
  var ticketNo = document.getElementById(movie + "-ticket");
  var value = ticketNo.value;
    
  if (!value.match(/^\d+$/)) {  //Internet really helps here sir!!
    alert("Please enter a number for the ticket quantity");
    return;
  } else if (value < 1 || value > 100) {
    alert("Ticket quantity must be between 1 and 100");
    return;
  }

  var ticketNo = document.getElementById(movie + "-ticket");
  if (ticketNo.value) {
    var table = document.getElementById("cartTable");
    rowCount = table.rows.length;
    if (rowCount >= 10) {
      alert("Maximum order limit reached!");
      return;
    }
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);  
    cell1.innerHTML = movieTitles[movie];
    cell2.innerHTML = prices[movie];
    cell3.innerHTML = ticketNo.value;
    cell4.innerHTML = prices[movie] * ticketNo.value;
  }
  
  var totalPriceHTML = document.getElementById('totalCost');
  totalPrice += prices[movie] * ticketNo.value
  totalPriceHTML.innerHTML = "Total Price P" + totalPrice + ".00";
}

document.getElementById("orderButton").addEventListener("click", function() {
location.reload();
  }); //Another help from the internet