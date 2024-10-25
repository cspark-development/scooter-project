const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

/* We'll re-use the returned user and scooter objects in future tests if they are successfully created */
let testUser;
let testScooter;

describe("ScooterApp.registerUser(username, password, age)", () => {
	it.skip("registers a new user if old enough", () => {
		testUser = new ScooterApp("testuser", "testpassword", 20);
		expect(testUser).toBeInstanceOf(User);
	});

	it.skip("throws an error if too young or already registered", () => {
		expect(() => {
			ScooterApp("testuser2", "testpassword", 15);
		}).toThrow("too young to register")

		expect(() => {
			ScooterApp("testuser", "testpassword", 20);
		}).toThrow("already registered")
	});
});

describe("ScooterApp.loginUser(username, password)", () => {
	it.skip("logs in a registered user", () => {
		const loginUserAttempt = ScooterApp.loginUser("testuser", "testpassword");
		expect(loginUserAttempt).toHaveReturned();
	});

	it.skip("throws an error if user not found or password incorrect", () => {
		expect(() => {
			ScooterApp.loginUser("testuserNULL", "testpassword");
		}).toThrow("Username or password is incorrect");
		expect(() => {
			ScooterApp.loginUser("testuser", "testpasswordNULL");
		}).toThrow("Username or password is incorrect");
	});
});

describe("ScooterApp.logoutUser(username)", () => {
	it.skip("logs out a registered user", () => {
		const logoutUserAttempt = ScooterApp.logoutUser("testuser");
		expect(logoutUserAttempt).toEqual("user is logged out");
	});

	it.skip("throws an error if user not found", () => {
		expect(() => {
			ScooterApp.logoutUser("testuserNULL");
		}).toThrow("no such user is logged in");
	});
});

describe("ScooterApp.createScooter(station)", () => {
	it.skip("creates a new scooter and adds it to ScooterApp.stations", () => {
		testScooter = ScooterApp.createScooter("testStation");
		expect(testScooter).toBeInstanceOf(Scooter);
	});

	it.skip("throws an error if a station does not exist", () => {
		expect(() => {
			ScooterApp.createScooter("testStationNULL");
		}).toThrow("no such station error");
	});
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
	it.skip("docks a scooter at a station", () => {
		expect(dockScooterAttempt).toHaveReturned();
	});

	it.skip("throws an error if a station does not exist", () => {
		expect(() => {
			ScooterApp.dockScooter(testScooter, "testStationNULL");
		}).toThrow("no such station");
	});

	it.skip("throws an error if a scooter is already at a station", () => {
		expect(() => {
			ScooterApp.dockScooter(testScooter, "testStation");
		}).toThrow("scooter already at station");
	});
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
	it.skip("rents a scooter out to a user", () => {
		const rentScooterAttempt = ScooterApp.rentScooter(testScooter, testUser);
		expect(rentScooterAttempt).toHaveReturned();
	});

	it.skip("throws an error if a scooter is already rented", () => {
		expect(() => {
			ScooterApp.rentScooter(testScooter, testUser);
		}).toThrow("scooter already rented");
	});
});
