function create_table(arr) {
  // get the reference for the body
  var body = document.getElementsByTagName('body')[0];
 
  // creates table , table head and table body;

  	var tbl     = document.createElement('table');
  	var tblHead = document.createElement('thead');
  	var tblBody = document.createElement('tbody');
 
  // single row for table head
    var head_row = document.createElement('tr');
  //list of attributes for the head
    attrib = ['name' , 'college','course','roll']
 
    for (var x in attrib) {
      var head_col = document.createElement('td');
      var colText = document.createTextNode(attrib[x]);
      head_col.appendChild(colText);
      head_row.appendChild(head_col);
    }
 
    //appending head_row to table head
    tblHead.appendChild(head_row);
  
    //appending tblHead to table
  tbl.appendChild(tblHead);
  // appends tbl to body
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute('border', '12');




  //for the body of table setting the rows:
  for(var z in arr){
  	var body_row = document.createElement("tr");
  	//for each rows posses four elements
  		
  				var body_col = document.createElement('td');
                var col_text = document.createTextNode(arr[z].name);
                body_col.appendChild(col_text);
                body_row.appendChild(body_col);

                var body_col = document.createElement('td');
                var col_text = document.createTextNode(arr[z].college);
                body_col.appendChild(col_text);
                body_row.appendChild(body_col);

                var body_col = document.createElement('td');
                var col_text = document.createTextNode(arr[z].course);
                body_col.appendChild(col_text);
                body_row.appendChild(body_col);

                var body_col = document.createElement('td');
                var col_text = document.createTextNode(arr[z].roll);
                body_col.appendChild(col_text);
                body_row.appendChild(body_col);

 	 		
 	 	tblBody.appendChild(body_row);	
	}

	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	tbl.setAttribute('border', '5');



}