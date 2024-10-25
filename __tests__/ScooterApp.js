const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

/* We'll re-use the returned user and scooter objects in future tests if they are successfully created */
const testScooterApp = new ScooterApp();
let testUser;
let testScooter;

describe("ScooterApp.registerUser(username, password, age)", () => {
	it("registers a new user if old enough", () => {
		testUser = testScooterApp.registerUser("testuser", "testpassword", 20);
		expect(testUser).toBeInstanceOf(User);
	});

	it("throws an error if too young or already registered", () => {
		expect(() => {
			testScooterApp.registerUser("testuser2", "testpassword", 15);
		}).toThrow("too young to register")

		expect(() => {
			testScooterApp.registerUser("testuser", "testpassword", 20);
		}).toThrow("already registered")
	});
});

describe("ScooterApp.loginUser(username, password)", () => {
	it("logs in a registered user", () => {
		const loginUserAttempt = testScooterApp.loginUser("testuser", "testpassword");
		expect(testScooterApp.registeredUsers.testuser.loggedIn).toEqual(true);
	});

	it("throws an error if user not found or password incorrect", () => {
		expect(() => {
			testScooterApp.loginUser("testuserNULL", "testpassword");
		}).toThrow("Username or password is incorrect");
		expect(() => {
			testScooterApp.loginUser("testuser", "testpasswordNULL");
		}).toThrow("Username or password is incorrect");
	});
});

describe("ScooterApp.logoutUser(username)", () => {
	it("logs out a registered user", () => {
		const logoutUserAttempt = testScooterApp.logoutUser("testuser");
		expect(testScooterApp.registeredUsers.testuser.loggedIn).toEqual(false);
	});

	it("throws an error if user not found", () => {
		expect(() => {
			testScooterApp.logoutUser("testuserNULL");
		}).toThrow("no such user is logged in");
	});
});

describe("ScooterApp.createScooter(station)", () => {
	it("creates a new scooter and adds it to ScooterApp.stations", () => {
		testScooter = testScooterApp.createScooter("testStation");
		expect(testScooter).toBeInstanceOf(Scooter);
	});

	it("throws an error if a station does not exist", () => {
		expect(() => {
			testScooterApp.createScooter("testStationNULL");
		}).toThrow("no such station error");
	});
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
	it("docks a scooter at a station", () => {
		const randomUndockedScooter = new Scooter("bravo");
		const dockScooterAttempt = testScooterApp.dockScooter(randomUndockedScooter, "testStation");
		expect(testScooterApp.stations["testStation"]).toContain(testScooter);
	});

	it("throws an error if a station does not exist", () => {
		expect(() => {
			testScooterApp.dockScooter(testScooter, "testStationNULL");
		}).toThrow("no such station");
	});

	it("throws an error if a scooter is already at a station", () => {
		expect(() => {
			testScooterApp.dockScooter(testScooter, "testStation");
		}).toThrow("scooter already at station");
	});
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
	it("rents a scooter out to a user", () => {
		const rentScooterAttempt = testScooterApp.rentScooter(testScooter, testUser);
		expect(testScooterApp.stations.testStation.includes(testScooter)).toEqual(false);
	});

	it("throws an error if a scooter is already rented", () => {
		expect(() => {
			testScooterApp.rentScooter(testScooter, testUser);
		}).toThrow("scooter already rented");
	});
});
