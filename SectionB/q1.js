/* 
	Section B
	Question 1
	Name: Alvin Tang
	Admin No: p1234567
	Class: DIT1B02
	
*/

const readline = require("readline-sync");

// Import the dataVehicleInfo.js and dataVehicleType.js data
// TODO: Q3a Code here
const allData = require("./dataVehicleInfo");
const allVehicleType = require("./dataVehicleType");

// Display Option Menu 
// TODO: Code here
function displayMenu() {
	console.log("Please select one option (1 to 4):");
	console.log("1. All Vehicle Type");
	console.log("2. Query Vehicle Type");
	console.log("3. Total Number of Vehicle By Year");
	console.log("4. Exit");
}

function displayAllVehicleType(){
	console.log("Vehicle Types:");
	allVehicleType.forEach(element=> console.log(element));
}

function queryVehicleType(){
	let userVehicleIndex=0;
	do{
		console.log("Select Vehicle Type:");
		allVehicleType.forEach((element, index)=> console.log((index+1) + ".",element));
		userVehicleIndex = readline.questionInt("Enter 0 to exit.");
		if(userVehicleIndex != 0){
			locatePrintVehicleType(allVehicleType[userVehicleIndex-1]);
		}
	} while(userVehicleIndex != 0);

}

// chosenVehicleType: a string rep of the vehicle type
function locatePrintVehicleType(chosenVehicleType){
	console.log("You chose:", chosenVehicleType);
	allData.forEach(element=>{
		if(element.type == chosenVehicleType){
			console.log("Year -", element.year, "Number -", element.number);
		}
	})
}

function totalVehicleByYear(){
	let yearToQuery = readline.questionInt("Enter the Year for total vehicle population: ");
	let counter = 0;
	allData.forEach(element=>{
		if(element.year == yearToQuery){
			counter += Number(element.number);
		}
	})
	console.log("The total number of vehicle in year", yearToQuery, "is", counter);
}

/*
1. All Vehicle Type;
2. Query Vehicle Type;
3. Total Number of Vehicle By Year;
4. Exit;
*/
let userInput=0;
do{
	displayMenu();
	userInput = readline.questionInt();
	switch(userInput){
		case 1:
			displayAllVehicleType();
			break;
		case 2:
			queryVehicleType();
			break;
		case 3:
			totalVehicleByYear();
			break;
		default:
			console.log("Please enter a valid menu option.");
	}

}while(userInput!=4);
// TODO: Code here for each option 
