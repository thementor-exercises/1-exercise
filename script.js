const price = [];
const totalCost = [];

fetch("/salads.json")
  .then((response) => response.json())
  .then((data) => doEverything(data));

function sum(totalCost) {
  let sumValue = totalCost.reduce((a, b) => a + b, 0);
  return sumValue;
}

function doEverything(data) {
  for (let index = 0; index < data.length; index++) {
    const letterNumber = 0;
    let word = data[index];
    let firstLetter = word.charAt(letterNumber);
    let isThirdIteration = (index + 1) % 3 === 0;
    if (isThirdIteration) {
      price[index] = "15zl";
    } else if (
      firstLetter === "E" ||
      firstLetter === "R" ||
      firstLetter === "S"
    ) {
      price[index] = "10zl";
    } else if (price[index] != "15zl") {
      price[index] = "20zl";
    }
  }
  for (let i = 0; i < data.length; i++) {
    const dishName = document.createElement("p");
    const newCheckbox = document.createElement("input");
    const newPrice = document.createElement("p");
    dishName.innerHTML = `${i + 1}. ${data[i]}`;
    dishName.className = "dishname";
    newCheckbox.id = "checkbox-" + [i + 1];
    newCheckbox.type = "checkbox";
    newCheckbox.addEventListener("change", (e) => newOrderAdded(e));
    newPrice.innerHTML = price[i];
    newPrice.className = "price";
    dishName.appendChild(newPrice);
    dishName.appendChild(newCheckbox);
    document.getElementById("main").append(dishName);
  }
  return data;
}
function newOrderAdded(e) {
  const calculatedValue = document.getElementById("totalcost");
  const labelToCheck = e.currentTarget.id;
  const indexOfDash = labelToCheck.indexOf("-");
  let index = parseInt(
    labelToCheck.substr(indexOfDash + 1, labelToCheck.length + 1)
  );
  index = index - 1;
  if (e.target.checked) {
    totalCost.push(parseInt(price[index].replace(/[^\d.-]/g, "")));
    sum(totalCost);
    calculatedValue.innerHTML = "total cost: " + sum(totalCost) + " zł";
  } else {
    for (var i = 0; i < totalCost.length; i++) {
      if (totalCost[i] === parseInt(price[index].replace(/[^\d.-]/g, ""))) {
        totalCost.splice(i, 1);
        i--;
        sum(totalCost);
        calculatedValue.innerHTML = "total cost: " + sum(totalCost) + " zł";
        break;
      }
    }
  }
}
