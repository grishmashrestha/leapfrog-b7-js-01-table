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

var temp_data;
for(var i=0; i<data.length; i++)
{
  for(var j=i; j<data.length; j++)
  {
    if(data[i].roll>data[j].roll)
    {
      temp_data=data[i];
      data[i]=data[j];
      data[j]=temp_data;
    }
  }
}

      function Create_table()
      {
        var table = document.createElement("table");
        table.setAttribute("border", "1");
        var body = document.createElement("tbody");
        

        for(var i=0; i<data.length; i++)
        {
           var table_row=document.createElement("tr");

           var table_roll = document.createElement("td");           
           var data_roll = document.createTextNode(data[i].roll);
           table_roll.appendChild(data_roll);
           table_row.appendChild(table_roll);


           var table_name = document.createElement("td");           
           var data_name = document.createTextNode(data[i].name);
           table_name.appendChild(data_name);
           table_row.appendChild(table_name);


           var table_college = document.createElement("td");           
           var data_college = document.createTextNode(data[i].college);
           table_college.appendChild(data_college);
           table_row.appendChild(table_college);


           var table_course = document.createElement("td");           
           var data_course = document.createTextNode(data[i].course);
           table_course.appendChild(data_course);
           table_row.appendChild(table_course);

           body.appendChild(table_row);
        }

        table.appendChild(body);        

        document.body.appendChild(table);

      }

      Create_table();