var data=[
{
  name:'Bishal Shrestha',
  college:'Apex',
  course:'Computer Information Systems',
  roll: 1
},
{
  name:'Madan Dhungana',
  college:'ACEM',
  course:'Computer Engineeing',
  roll:'2'
},
{         
  name:'Rajan Shrestha',
  college:'Kathmandu Engineering College',
  course:'Computer Engineering',
  roll:3
},
{
  name:'Sujan Vaidya',
  college:'Texas College',
  course:'CSIT',
  roll:4
},
{
  name:'Santosh Pandey',
  college:'IOE Pulchowk Campus',
  course: 'Computer Engineeing',
  roll:'5'
},
{
  name:'Bibek Shah',
  college:'Pulchowk Campus',
  course:'Electronics Engineering',
  roll:6
},
{
  name: 'Grishma Shrestha',
  college: 'Kathmandu Engineering College',
  course: 'Computer Engineering',
  roll: 7
},
{
  name:'Sanjay Maharjan',
  college:'KEC',
  course:'Computer Engineeing',
  roll:8
},
{
  name:'Laxman khanal',
  college:'ACEM',
  course:'Computer Engineering',
  roll:9
},
{
  name:'Saroj Bhandari',
  college:'Pulchowk Campus',
  course:'Computer Engineering',
  roll:10
},
{
  name:'Saurav Lal Karn',
  college:'Pulchowk Campus',
  course:'Computer Engineering',
  roll:11
},
{
  name:'Prayas Neupane',
  college:'Pulchowk Campus',
  course:'Computer Engineeing',
  roll:12
},
{
  name: 'Romit Amgai',
  college: 'ACEM',
  course: 'Computer Engineering',
  roll: 13
},
{
  name:'Kiran Pariyar',
  college:'ACEM',
  course:'Computer Engineeing',
  roll:14
},
{
  name:'Sampresh Shrestha',
  college:'Kantipur',
  course:'Computer Engineeing',
  roll:15
},
{
  name:'Bishal Shrestha',
  college:'ACEM',
  course:'Computer Engineeing',
  roll:16
},
{
  name: 'Binod Kumar Shrestha',
  college: 'Pulchowk campus',
  course: 'Computer Engineering',
  roll: 17
},
{
  name: 'kamal Bahadur Rana',
  college: 'pulchowk campus',
  course: 'Electronics Engineering',
  roll: 18
},
{
  name:'Ruban Dangol',
  college:'Islington College',
  course:'BSc Hons in Computing',
  roll:19
},
{
  name:'Achyut Pokhrel',
  college:'St.Xavier\'s College',
  course:'BSc CSIT',
  roll: 20
},
{
  name:'Gaurav KC',
  college:'Kathmandu Engineering College, Kalimati',
  course:'Computer Engineeing',
  roll:'21'
},
{
  name:'Prajjwal Raj Kandel',
  college:'Pulchowk Campus',
  course:'Electronics Engineering',
  roll:22 
},
{
  name:'Kiran Sharma',
  college:'Prime College',
  course:'BSc.CSIT',
  roll:23
},
{
  name: 'Pratish Bahadur Shrestha',
  college: 'ACEM',
  course: 'Computer Engineering',
  roll: 24
}];

function tableCreate(){
  var headerColumns = ['Roll no.', 'Name', 'College', 'Course'];
  var body = document.body,
  tbl  = document.createElement('table');
  tbl.style.width  = '300px';
  tbl.style.border = '1px solid black';
  var tr = tbl.insertRow();
  
  for(var i=0; i<headerColumns.length; i++){
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(headerColumns[i]));  
    td.style.border = '1px solid black';
  }

  for(var i = 0; i < data.length; i++){
    var tr = tbl.insertRow();
    
    var td1 = tr.insertCell();
    td1.appendChild(document.createTextNode(data[i].roll));
    td1.style.border = '1px solid black';
    
    var td2 = tr.insertCell();
    td2.appendChild(document.createTextNode(data[i].name));
    td2.style.border = '1px solid black';

    var td3 = tr.insertCell();
    td3.appendChild(document.createTextNode(data[i].college));
    td3.style.border = '1px solid black';

    var td4 = tr.insertCell();
    td4.appendChild(document.createTextNode(data[i].course));
    td4.style.border = '1px solid black';
  }
  body.appendChild(tbl);
}
tableCreate();