//global variable _name
//var _SALADS;

var total = 0;

fetch("./salads.json")
    .then(function(resp) {
        //return stop exectuitng the code and the vaule is returend and console log just print to console
        return resp.json();
    })
    .then(function(data) {
        //calling function populateMenu
        populateMenu(data);
    }) 

//promise - to check regarding waiting time to excatue the code
//function body declaration
function populateMenu(data){
    console.log(data);  
    for (i = 0; i < data.length; i++) {
        let price = "20";
        if ((i+1) % 3 == 0){
        price = "15";
        } else if (data[i].charAt(0) == "E" || data[i].charAt(0) == "R" || data[i].charAt(0) == "G"){
        price = "10";
        }     

        let menuItem = "<tr>"; 
        menuItem += "<td>" + (i+1).toString() + "</td>";
        menuItem += "<td>" + data[i] + "</td>";
        menuItem += "<td>" + price + "zl </td>";
        menuItem += "<td><input type='checkbox' onclick='totalPrice(this, "+ price + ")'></td>";
        menuItem += "</tr>";

    document.getElementById("menu-table").innerHTML += menuItem;
    
    }
}

function totalPrice(element, priceAdded){
    if (element.checked){   
        total += parseInt(priceAdded);
    } else {
        total -= parseInt(priceAdded);
    }

    document.getElementById("sum").innerHTML = total;
}
