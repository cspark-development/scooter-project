const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

/* We'll re-use the returned user and scooter objects in future tests if they are successfully created */
const testScooterApp = new ScooterApp();
let testUser;
let testScooter;

describe("ScooterApp.registerUser(username, password, age)", () => {
	it.skip("registers a new user if old enough", () => {
		testUser = testScooterApp.registerUser("testuser", "testpassword", 20);
		expect(testUser).toBeInstanceOf(User);
	});

	it.skip("throws an error if too young or already registered", () => {
		expect(() => {
			testScooterApp.registerUser("testuser2", "testpassword", 15);
		}).toThrow("too young to register")

		expect(() => {
			testScooterApp.registerUser("testuser", "testpassword", 20);
		}).toThrow("already registered")
	});
});

describe("ScooterApp.loginUser(username, password)", () => {
	it.skip("logs in a registered user", () => {
		const loginUserAttempt = testScooterApp.loginUser("testuser", "testpassword");
		expect(loginUserAttempt).toHaveReturned();
	});

	it.skip("throws an error if user not found or password incorrect", () => {
		expect(() => {
			testScooterApp.loginUser("testuserNULL", "testpassword");
		}).toThrow("Username or password is incorrect");
		expect(() => {
			testScooterApp.loginUser("testuser", "testpasswordNULL");
		}).toThrow("Username or password is incorrect");
	});
});

describe("ScooterApp.logoutUser(username)", () => {
	it.skip("logs out a registered user", () => {
		const logoutUserAttempt = testScooterApp.logoutUser("testuser");
		expect(logoutUserAttempt).toEqual("user is logged out");
	});

	it.skip("throws an error if user not found", () => {
		expect(() => {
			testScooterApp.logoutUser("testuserNULL");
		}).toThrow("no such user is logged in");
	});
});

describe("ScooterApp.createScooter(station)", () => {
	it.skip("creates a new scooter and adds it to ScooterApp.stations", () => {
		testScooter = testScooterApp.createScooter("testStation");
		expect(testScooter).toBeInstanceOf(Scooter);
	});

	it.skip("throws an error if a station does not exist", () => {
		expect(() => {
			testScooterApp.createScooter("testStationNULL");
		}).toThrow("no such station error");
	});
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
	it.skip("docks a scooter at a station", () => {
		expect(dockScooterAttempt).toHaveReturned();
	});

	it.skip("throws an error if a station does not exist", () => {
		expect(() => {
			testScooterApp.dockScooter(testScooter, "testStationNULL");
		}).toThrow("no such station");
	});

	it.skip("throws an error if a scooter is already at a station", () => {
		expect(() => {
			testScooterApp.dockScooter(testScooter, "testStation");
		}).toThrow("scooter already at station");
	});
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
	it.skip("rents a scooter out to a user", () => {
		const rentScooterAttempt = testScooterApp.rentScooter(testScooter, testUser);
		expect(rentScooterAttempt).toHaveReturned();
	});

	it.skip("throws an error if a scooter is already rented", () => {
		expect(() => {
			testScooterApp.rentScooter(testScooter, testUser);
		}).toThrow("scooter already rented");
	});
});
