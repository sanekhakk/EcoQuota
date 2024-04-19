// function calculateCarbonFootprint() {
//     var distance = document.getElementById("distance").value;
//     var carbonFootprint = distance * 0.12; // Assuming 0.12 kg CO2 emitted per km
//     document.getElementById("carbonFootprint").innerHTML = "Your carbon footprint for traveling " + distance + " km is " + carbonFootprint.toFixed(2) + " kg CO2.";
// }

function calculateFootprinttravel() {
    var commute = document.getElementById("commute").value;
    var vehicle = document.getElementById("vehicle").value;
    var footprint = 0;
    
    if((vehicle=="select") || (commute==null)) {
      alert("please input the vehicle type");
      return;
    }
    else if (vehicle == "car") {
      footprint = commute * 0.3; // assuming 0.5 lbs CO2/mile for a car
    } else if (vehicle == "bus") {
      footprint = commute * 0.2; // assuming 0.3 lbs CO2/mile for a bus
    } else if (vehicle == "bike") {
      footprint = commute * 0.1;
    } else if (vehicle == "Train"){
      footprint = commute * 0.05;
    } else if(vehicle=="Flight"){
      footprint= commute * 0.3;}


  
    document.getElementById("footprint").innerHTML = footprint + " lbs CO2";
    document.getElementById("result").style.display = "block";
    
  
    var option = ["Plan and combine trips to minimize overall travel distance","Research your destination before you go", ,
     "Choose greener transportation options", "Consider virtual meetings instead of traveling for business",
    "Travel slower","Choose sustainable accommodation","Plant trees","Opt for walking or cycling for short distances",
  "Carpool or rideshare with others","Choose fuel-efficient vehicles","Offset carbon emissions by investing in carbon offset programs",
"Pack light to reduce vehicle weight and fuel consumption","Choose direct flights to reduce overall travel time and emissions",
"Support and use renewable energy sources for transportation","Utilize video conferencing for remote work and meetings",
"Explore alternative transportation modes like electric scooters or bicycles",
"Practice eco-driving techniques to improve fuel efficiency",
"Support and advocate for sustainable transportation infrastructure",
"Participate in local advocacy groups promoting public transportation",
"Consider the environmental impact when choosing travel destinations",
"Stay in eco-friendly accommodations during travels",
"Offset carbon emissions from flights by planting trees or supporting reforestation projects",
"Choose eco-friendly travel activities and tours",
"Educate others about the importance of reducing travel-related carbon emissions"];
    var list = document.getElementById("option");
  if(footprint<=100){
    for (var i = 0; i <= footprint/10; i++) {
      var li = document.createElement("li");
      li.innerHTML = option[i];
      list.appendChild(li);
    }
  }
  else{
    for (var i = 0; i <= footprint/100; i++) {
      var li = document.createElement("li");
      li.innerHTML = option[i];
      list.appendChild(li);
    }
  }
  }


  function calculateCarbonFootprinthome() {
    // Get values from the form
    var electricity = parseFloat(document.getElementById("electricity").value);
    var gas = parseFloat(document.getElementById("gas").value);
    var water = parseFloat(document.getElementById("water").value);
    var waste = parseFloat(document.getElementById("waste").value);
  
    // Constants for carbon emissions (kgCO2e)
    var electricityEmissionFactor = 0.35; // kgCO2e per kWh
    var gasEmissionFactor = 2.0; // kgCO2e per cubic meter
    var waterEmissionFactor = 0.21; // kgCO2e per liter
    var wasteEmissionFactor = 0.04; // kgCO2e per kilogram
    
    // Calculate carbon footprint
    var electricityFootprint = electricity * electricityEmissionFactor;
    var gasFootprint = gas * gasEmissionFactor;
    var waterFootprint = water * waterEmissionFactor;
    var wasteFootprint = waste * wasteEmissionFactor;
    
    var totalCarbonFootprint = electricityFootprint + gasFootprint + waterFootprint + wasteFootprint;
  
    // Display result
    var resultElement = document.getElementById("resulthome");
    resultElement.innerHTML = "Your daily home carbon footprint is: "+ totalCarbonFootprint.toFixed(2) + " kgCO2";
    resultElement.scrollIntoView({ behavior: 'smooth' });
    
    var offsetElement = document.getElementById("offsethome");
  if (totalCarbonFootprint <= 5) {
    offsetElement.innerHTML = "You can offset your carbon footprint by planting trees or using renewable energy sources!";
  } else if (totalCarbonFootprint <= 10) {
    offsetElement.innerHTML = "Consider reducing energy consumption and supporting renewable energy initiatives!";
  } else {
    offsetElement.innerHTML = "To significantly reduce your carbon footprint, focus on energy efficiency, waste reduction, and supporting renewable energy projects!";
  }
  
  }

  function bigImg(x) {
    x.style.height = "30%";
    x.style.width = "30%";
  }
  
  function normalImg(x) {
    x.style.height = "25%";
    x.style.width = "25%";
  }
  function bigImgg(x) {
    x.style.height = "37%";
    x.style.width = "37%";
  }
  
  function normalImgg(x) {
    x.style.height = "35%";
    x.style.width = "35%";
  }

  