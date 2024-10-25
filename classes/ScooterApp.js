const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
	// ScooterApp code here
	constructor() {
		this.stations = {
			"testStation": [],
			"bravo": [],
			"charlie": [],
		};
		this.registeredUsers = {};
	}

	registerUser(username, password, age) {
		if (age < 18) {
			throw new Error("too young to register");
		} else if (username in this.registeredUsers) {
			throw new Error("already registered");	
		}

		this.registeredUsers[username] = new User(username, password, age);

		console.log("user has been registered");

		return this.registeredUsers[username];
	}

	loginUser(username, password) {
		if (!(username in this.registeredUsers)) {
			throw new Error("Username or password is incorrect");
		}

		try {
			this.registeredUsers[username].login(password);
			console.log("user has been logged in");
		} catch {
			throw new Error("Username or password is incorrect");
		}
	}

	logoutUser(username) {
		if (!(username in this.registeredUsers) || this.registeredUsers[username].loggedIn === false) {
			throw new Error("no such user is logged in");
		}

		this.registeredUsers[username].logout();
	}

	createScooter(station) {
		if (!(station in this.stations)) {
			throw new Error("no such station error");
		}

		const newScooter = new Scooter(station);
		this.stations[station].push(newScooter);

		console.log("created new scooter");

		return newScooter;
	}

	dockScooter(scooter, station) {
		if (!(station in this.stations)) {
			throw new Error("no such station error");
		} else if (scooter in this.stations[station]) {
			throw new Error("scooter already at station");
		}

		scooter.dock();
		this.stations[station].push(scooter);

		console.log("scooter is docked");
	};

	rentScooter(scooter, user) {
		/* There's not necessarily any checks asked for in the specification (Like if objects are invalid), ideally I'd implement them though */
		const scooterStation = this.stations[scooter.station];

		/* Scooter object is removed from array and therefore disappears forever? */ 
		scooter.rent();
		scooterStation.splice(scooterStation.indexOf(scooter), 1);
	}

	print() {
		console.log(`Registered Users: ${this.registeredUsers}`);

		console.log(`Stations: ${this.stations}`);
	}
}

module.exports = ScooterApp;
