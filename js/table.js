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
    roll:5
  },
  {
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
		roll:18
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
var table=document.createElement("table");
var tr=document.createElement("tr");
var roll=document.createElement("td");
var names=document.createElement("td");
var college=document.createElement("td");
var course=document.createElement("td");
var troll = document.createTextNode("roll"); 
var tname = document.createTextNode("name"); 
var tcollege = document.createTextNode("college"); 
var tcourse = document.createTextNode("course"); 

table.style.border = "2px solid black"
roll.style.border = "2px solid black";
	names.style.border = '2px solid black';
	college.style.border = '2px solid black';
	course.style.border = '2px solid black';
	table.setAttribute('width','100%');


roll.appendChild(troll);
names.appendChild(tname);
college.appendChild(tcollege);
course.appendChild(tcourse);
tr.appendChild(roll);
tr.appendChild(names);
tr.appendChild(college);
tr.appendChild(course);
table.appendChild(tr);
document.body.appendChild(table);

for(i=0;i<data.length;i++){
	for(j=i;j<data.length;j++){
		if(parseInt(data[i].roll)>parseInt(data[j].roll)){
			var temp=data[i];
			data[i]=data[j];
			data[j]=temp;
		}
	}
}

for(i=0;i<data.length;i++){
	var tr=document.createElement("tr");
	var roll=document.createElement("td");

	var namess=document.createElement("td");
	var colleges=document.createElement("td");
	var courses=document.createElement("td");
	var trolls = document.createTextNode(data[i].roll); 
	var tnames = document.createTextNode(data[i].name); 
	var tcolleges = document.createTextNode(data[i].college); 
	var tcourses = document.createTextNode(data[i].course); 
	tr.style.border = "1px solid black";
	roll.style.border = "1px solid black";
	namess.style.border = '1px solid black';
	colleges.style.border = '1px solid black';
	courses.style.border = '1px solid black';
	roll.appendChild(trolls);
	namess.appendChild(tnames);
	colleges.appendChild(tcolleges);
	courses.appendChild(tcourses);
	tr.appendChild(roll);
	tr.appendChild(namess);
	tr.appendChild(colleges);
	tr.appendChild(courses);
	table.appendChild(tr);
}