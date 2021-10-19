function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	if (fastest) {
		return fastestTandemBicycleSpeed(redShirtSpeeds, blueShirtSpeeds)
	} 
	return slowestTandemBicycleSpeed (redShirtSpeeds, blueShirtSpeeds);
}

function fastestTandemBicycleSpeed (redShirtSpeeds, blueShirtSpeeds) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
	console.log(redShirtSpeeds, blueShirtSpeeds);
	let sum = 0;

	for (let i = 0; i < redShirtSpeeds.length; i++) {
		console.log(sum);
		sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
	}
	
	return sum
}

function slowestTandemBicycleSpeed (redShirtSpeeds, blueShirtSpeeds) {
	redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

	let sum = 0;

	for (let i = 0; i < redShirtSpeeds.length; i++) {
		sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
	}
	
	return sum
}

module.exports = tandemBicycle;