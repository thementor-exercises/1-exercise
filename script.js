let saladMenuFileData = [], prices = [];
let bill = 0, divContent="<table>";

fetch("/salads.json")
  .then((response) => response.json())
  .then((saladMenuFileData) => createMenu(saladMenuFileData));

  function setPrice(counter,saladMenuFileData){
    if((counter + 1) % 3 == 0) return 15;
    else if(saladMenuFileData[counter][0] == 'E' ||
            saladMenuFileData[counter][0] == 'R' ||
            saladMenuFileData[counter][0] == 'G' ) return 10;
    else return 20;
  }

function createMenu(saladMenuFileData){
  let divMenu = document.getElementById("menu");
    for(let indexCounter=0; indexCounter < saladMenuFileData.length; indexCounter++){
      prices[indexCounter] = setPrice(indexCounter, saladMenuFileData);
       divContent += "<tr  >";
       divContent += "<td class='classContentRow' id=salad" + indexCounter + ">" + (indexCounter + 1);
       divContent += ". " + saladMenuFileData[indexCounter] +"</td>";
       divContent += "<td> " + prices[indexCounter] + "zł</td>";
       divContent += "<td><input type='checkbox' id='checkbox" + indexCounter + "' value='" + indexCounter + "'onclick='checkMenuBox(id,value)'></td>";
       divContent += "</tr>";
    }
  divContent+="</table>";
  divMenu.innerHTML = divContent;
}

function checkMenuBox(boxId,boxValue){
  boxValue = parseInt(boxValue);
  if(document.getElementById(boxId).checked == true)
  {
    bill += prices[boxValue];
    document.getElementById("salad"+boxValue).style = "font-weight:bold;";
  }
  else
  {
    bill -= prices[boxValue];
    document.getElementById("salad"+boxValue).style = "font-weight:normal;";
  }
  document.getElementById("sum").innerHTML = "Suma: " + bill + "zł";
}
