var studentDeets = [
  {
    roll: 1,
    name: "Success Kid"
  },
  {
    roll: 2,
    name: "Nyaan Cat"
  },
  {
    roll: 3,
    name: "Good Guy Greg"
  },
  {
    roll: 4,
    name: "Rage Guy"
  },
  {
    roll: 5,
    name: "Doge Such Wow"
  },
  {
    roll: 6,
    name: "Grumpy Cat"
  }
];

// creating table elements
var tbl = document.createElement('table');
var tr = document.createElement('tr');
var th1 = document.createElement('th'); //header 1 of the table
var th2 = document.createElement('th'); //header 2 of the table

//writing heading for the table and appending to the tr and then the table itself

var th1Node = document.createTextNode('Roll No.');
var th2Node = document.createTextNode('Name');
th1.appendChild(th1Node);
th2.appendChild(th2Node);
tr.appendChild(th1);
tr.appendChild(th2);
tbl.appendChild(tr);

// extracting data from studentDeets and placing it in the table elements
for (var i=0; i<studentDeets.length; i++) {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  td1.innerHTML = studentDeets[i].roll; // used innerHTML instead of createTExtNode just to try new things :P
  td2.innerHTML = studentDeets[i].name;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tbl.appendChild(tr);
};

document.body.appendChild(tbl);