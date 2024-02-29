function generateInputFields() {
  var numberOfNights = parseInt(document.getElementById("numberOfNights").value);
  var nightInputFields = document.getElementById("nightInputFields");
  nightInputFields.innerHTML = "";

  for (var i = 1; i <= numberOfNights; i++) {
    var nightContainer = document.createElement("div");
    nightContainer.classList.add("night-container");

    var accommodationInput = `<label for="accommodationCost${i}">Night ${i} Accommodation Cost:</label>
                              <input type="number" id="accommodationCost${i}" style="margin-right: 10px;">`;

    var parkFeesInput = `<label for="parkFees${i}">Night ${i} Park Fees:</label>
                         <input type="number" id="parkFees${i}">`;

    nightContainer.innerHTML = accommodationInput + parkFeesInput;
    nightInputFields.appendChild(nightContainer);
  }
}

function calculateCost() {
  var numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  var numberOfNights = parseInt(document.getElementById("numberOfNights").value);
  var totalAccommodationCost = 0;
  var totalParkFees = 0;

  // Calculate total accommodation cost and total park fees
  for (var i = 1; i <= numberOfNights; i++) {
    totalAccommodationCost += parseFloat(document.getElementById("accommodationCost" + i).value);
    totalParkFees += parseFloat(document.getElementById("parkFees" + i).value);
  }

  // Multiply by the number of people
  totalAccommodationCost *= numberOfPeople;
  totalParkFees *= numberOfPeople;

  var transportCost = parseFloat(document.getElementById("transportCost").value);
  var totalTransportCost = transportCost * (numberOfNights + 1);

  // Calculate total safari costs without multiplying by number of people
  var totalSafariCosts = totalAccommodationCost + totalParkFees + totalTransportCost;

  var profitSelect = document.getElementById("profitSelect");
  var selectedProfit = parseFloat(profitSelect.value);
  var totalProfit = totalSafariCosts * selectedProfit;

  var totalCostWithProfit = totalSafariCosts + totalProfit;
  var perPersonCost = totalCostWithProfit / numberOfPeople;

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Total Accommodation Cost: $${totalAccommodationCost}</p>
    <p>Total Park Fees: $${totalParkFees}</p>
    <p>Total Transport Cost: $${totalTransportCost}</p>
    <p>Total Safari Costs: $${totalSafariCosts}</p>
    <p>Total Profit (${(selectedProfit * 100).toFixed(0)}%): $${totalProfit}</p>
    <p>Total Cost with Profit: $${totalCostWithProfit}</p>
    <p>Per Person Cost: $${perPersonCost.toFixed(2)}</p>
  `;
}
