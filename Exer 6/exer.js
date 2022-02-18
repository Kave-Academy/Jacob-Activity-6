function run() {
    let firstName = document.getElementById("input_fname").value;
    let lastName = document.getElementById("input_lname").value;

    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();

    cell1.innerHTML = `${firstName}`;
    cell2.innerHTML = `${lastName}`;
    
}
