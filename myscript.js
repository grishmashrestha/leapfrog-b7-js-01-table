function generate_table() {
  
  var body = document.getElementsByTagName("body")[0];
 

  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
 var row = document.createElement("tr");
  var cellText1 = document.createTextNode('NAME');
   var cellText2 = document.createTextNode('COLLEGE');
      var cellText3 = document.createTextNode('COURSE');
      var cellText4 = document.createTextNode('ROLL');
      var cell1 = document.createElement("td");
      var cell2 = document.createElement("td");
      var cell3 = document.createElement("td");
      var cell4 = document.createElement("td");
      
      cell1.appendChild(cellText1);
      cell2.appendChild(cellText2);
      cell3.appendChild(cellText3);
      cell4.appendChild(cellText4);

      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      row.appendChild(cell4);

  tblBody.appendChild(row);
 
  for (var i = 0; i < 24; i++) {

    var row = document.createElement("tr");
        var name= data[i].name;
       var college=data[i].college;
       var course=data[i].course;
       var roll=data[i].roll; 
   
      var cellText1 = document.createTextNode(name);
      var cellText2 = document.createTextNode(college);
      var cellText3 = document.createTextNode(course);
      var cellText4 = document.createTextNode(roll);
      var cell1 = document.createElement("td");
      var cell2 = document.createElement("td");
      var cell3 = document.createElement("td");
      var cell4 = document.createElement("td");
      
      cell1.appendChild(cellText1);
      cell2.appendChild(cellText2);
      cell3.appendChild(cellText3);
      cell4.appendChild(cellText4);

      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      row.appendChild(cell4);

 
    tblBody.appendChild(row);
  }
 
 
  tbl.appendChild(tblBody);

  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}
var data=[
      {         
        name:'Rajan Shrestha',
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
        roll:'5'
      },
      {
        name:'Gaurav KC',
        college:'Kathmandu Engineering College, Kalimati',
        course:'Computer Engineeing',
        roll:'21'
      },
      {
        name:'Madan Dhungana',
        college:'ACEM',
        course:'Computer Engineeing',
        roll:'2'
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
      },
      {
        name: 'Grishma Shrestha',
        college: 'Kathmandu Engineering College',
        course: 'Computer Engineering',
        roll: 7
      }];