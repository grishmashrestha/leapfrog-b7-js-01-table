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