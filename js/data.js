 
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


/* Creating table*/
var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');

var tr = document.createElement('tr');

var  head_topic = ['Name', 'College', 'Course','ROll'];



//data attributes
for(var i = 0; i<head_topic.length; i++){
  var th = document.createElement('th');
  var topic = document.createTextNode(head_topic[i]);
  th.appendChild(topic);
  tr.appendChild(th);
};

tbl.appendChild(tr);


//displaying data

for(var i = 0; i < data.length; i++){
  var tr = document.createElement('tr');
    var td1 =document.createElement('td');
    var td2 =document.createElement('td');
    var td3 =document.createElement('td');
    var td4 =document.createElement('td');
    td1.innerHTML = data[i].roll;
    td2.innerHTML = data[i].name;
    td3.innerHTML = data[i].course;
    td4.innerHTML = data[i].college;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbl.appendChild(tr);
}
document.body.appendChild(tbl);
console.log("laxman");