function generateTable() {
    
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
    
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
 
    var datakeys = Object.keys(data[0]);
    
    //Get the count of columns.
    var columnCount = datakeys.length;
 
    //Add the header row.
    var row = table.insertRow(-1);
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "S.N";
    row.appendChild(headerCell);				
    for (var i = 0; i < columnCount; i++) {
        headerCell = document.createElement("TH");
        headerCell.innerHTML = datakeys[i];
        row.appendChild(headerCell);
    }
 
    //Add the data rows.
    for (var i = 0; i < data.length; i++) {
            row = table.insertRow(-1);
            var cell = row.insertCell(-1);
	    cell.innerHTML = i+1;	
	    cell = row.insertCell(-1);	
            cell.innerHTML = data[i].name;
            cell = row.insertCell(-1);
            cell.innerHTML = data[i].college;
            cell = row.insertCell(-1);
            cell.innerHTML = data[i].course;
            cell = row.insertCell(-1);
            cell.innerHTML = data[i].roll;            
    }
 
    var tableDiv = document.getElementById("tablediv");
    tableDiv.innerHTML = "Generating Table with JavaScript";
    tableDiv.appendChild(table);
}
