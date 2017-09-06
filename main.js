// let Something = (function(oldSomething){
// 	oldSomething.niceFunction = function(){
// 		console.log("im a nice function");
// 	}

// 	return oldSomething;

// })(Something || {});// add whatever is inside of the function to Something or create and empty obj and add it to that.

var SolarSystem = (function(oldSolarSystem){
	const planets= ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

	oldSolarSystem.getPlanets = function(){
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	};

	const spacecrafts= ["spacecraft1", "spacecraft2", "spacecraft3"];

	oldSolarSystem.getSpacecrafts = function(){
		return spacecrafts;
	};

	oldSolarSystem.setSpacecrafts = function(newSpacecraft){
		spacecrafts.push(newSpacecraft);	
	};


return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log("my planet", myPlanets);
SolarSystem.getSpacecrafts();