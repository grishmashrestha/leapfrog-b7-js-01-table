
  var data=[
  {         name:'Rajan Shrestha',
            college:'Kathmandu Engineering College',
            course:'Computer Engineering',
            roll:3
  },
  
  {
            name:'Sanjay Maharjan',
            college:'KEC',
            course:'Computer Engineeing',
            roll:8
  },
      {
          name:'Prayas Neupane',
          college:'Pulchowk Campus',
          course:'Computer Engineeing',
          roll:12
      },
      {
    name:'Santosh Pandey',
    college:'IOE Pulchowk Campus',
    course: 'Computer Engineeing',
    roll:5
  }
  ,{

          name:'Gaurav KC',
          college:'Kathmandu Engineering College, Kalimati',
          course:'Computer Engineeing',
          roll:21
  },

  {
          name:'Madan Dhungana',
          college:'ACEM',
          course:'Computer Engineeing',
          roll:2
            },
  {
          name:'Bishal Shrestha',
          college:'Apex',
          course:'Computer Information Systems',
          roll: 1
  },
  
  {
                name:'Achyut Pokhrel',
                college:'St.Xavier\'s College',
                course:'BSc CSIT',
                roll: 20
  },

        {
          name: 'Romit Amgai',
          college: 'ACEM',
          course: 'Computer Engineering',
          roll: 13
        },
            {
                name: 'Pratish Bahadur Shrestha',
                college: 'ACEM',
                course: 'Computer Engineering',
                roll: 24
            },
            {
        name: 'Binod Kumar Shrestha',
        college: 'Pulchowk campus',
        course: 'Computer Engineering',
        roll: 17
      },
      {
        name:'Bishal Shrestha',
        college:'ACEM',
        course:'Computer Engineeing',
        roll:16
      },

      {
        name: 'kamal Bahadur Rana',
        college: 'pulchowk campus',
        course: 'Electronics Engineering',
        roll: 18
      },


            {
                name:'Kiran Sharma',
                college:'Prime College',
                course:'BSc.CSIT',
                roll:23
            },

      {
          name:'Sampresh Shrestha',
          college:'Kantipur',
          course:'Computer Engineeing',
          roll:15
      },


      {
          name:'Kiran Pariyar',
          college:'ACEM',
          course:'Computer Engineeing',
          roll:14
      },

      {
        name:'Ruban Dangol',
          college:'Islington College',
          course:'BSc Hons in Computing',
          roll:19
      },
      {
        name:'Sujan Vaidya',
        college:'Texas College',
        course:'CSIT',
        roll:4
      },
            {
                name:'Saurav Lal Karn',
                college:'Pulchowk Campus',
                course:'Computer Engineering',
                roll:11
            },
            {
                name:'Bibek Shah',
                college:'Pulchowk Campus',
                course:'Electronics Engineering',
                roll:6
            },
            {
                name:'Laxman khanal',
                college:'ACEM',
                course:'Computer Engineering',
                roll:9
            },
            {
                name:'Prajjwal Raj Kandel',
                college:'Pulchowk Campus',
                course:'Electronics Engineering',
                roll:22 
            },
            {
                name:'Saroj Bhandari',
                college:'Pulchowk Campus',
                course:'Computer Engineering',
                roll:10
            }
];

 
  //sorting the data roll number wise
  for(var i=0; i<data.length;i++){
    for(var j=i+1;j<data.length;j++){
      if(data[i].roll>data[j].roll){
        var temp=data[i];
        data[i]=data[j];
        data[j]=temp;
      }
    }
  }

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var row = document.createElement("tr");

    var cellhead1=document.createElement("td");
    var cellheadid=document.createTextNode("Roll");
    cellhead1.appendChild(cellheadid);
    row.appendChild(cellhead1);

    var cellhead2=document.createElement("td");
    var cellheadname=document.createTextNode("Name");
    cellhead2.appendChild(cellheadname);
    row.appendChild(cellhead2);

    var cellhead3=document.createElement("td");
    var cellheadcollege=document.createTextNode("College");
    cellhead3.appendChild(cellheadcollege);
    row.appendChild(cellhead3);

    var cellhead4=document.createElement("td");
    var cellheadcourse=document.createTextNode("course");
    cellhead4.appendChild(cellheadcourse);
    row.appendChild(cellhead4);

    tblBody.appendChild(row);


  // creating all cells
  for (var i = 0; i < data.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    var cell1=document.createElement("td");
    var cellid=document.createTextNode(data[i].roll);
    cell1.appendChild(cellid);
    row.appendChild(cell1);

    var cell2=document.createElement("td");
    var cellname=document.createTextNode(data[i].name);
    cell2.appendChild(cellname);
    row.appendChild(cell2);

    var cell3=document.createElement("td");
    var cellcollege=document.createTextNode(data[i].college);
    cell3.appendChild(cellcollege);
    row.appendChild(cell3);

    var cell4=document.createElement("td");
    var cellcourse=document.createTextNode(data[i].course);
    cell4.appendChild(cellcourse);
    row.appendChild(cell4);
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  
  tbl.setAttribute("border", "1");
