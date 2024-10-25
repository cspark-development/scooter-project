class Scooter {
	// Scooter code here
	static nextSerial = 1;
	constructor(station) {
		this.station = station;
		this.user = null;
		this.serial = this.nextSerial++;
		this.charge = 100;
		this.isBroken = false;
	}

	rent(user) {
		if (this.charge < 20) {
			throw new Error("scooter needs to charge");	
		} else if (this.isBroken) {
			throw new Error("scooter needs repair");	
		}

		/* Adding the scooter to the station is done by ScooterApp method */
		this.user = user;
	}

	dock(station) {
		/* Removing the scooter to the station is done by ScooterApp method */
		this.user = null;
	}

	async recharge() {
		console.log('Starting charge');
    
		await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
		this.charge = 100

		console.log('Charge complete');	
	}

	async requestRepair() {
		console.log('Starting repair');
    
		await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
		this.isBroken = false;

		console.log('Repair complete');	
	}
}

module.exports = Scooter;
