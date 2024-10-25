const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const ScooterApp = require("../classes/ScooterApp.js");

/* TODO: Ideally I'd refactor these tests to have all variables encapsulated within the tests itself so there are no dependencies from test to test. I should've done that from the beginning */
/* We'll re-use the returned user object in future tests */
const testScooterApp = new ScooterApp();
const testUser = testScooterApp.registerUser("testuser", "testpassword", 20);
const testScooter = testScooterApp.createScooter("testStation");

describe("scooter.rent(user)", () => {
	it("checks a scooter out to a user", () => {
		const rentAttempt = testScooter.rent(testUser);
		expect(testScooter.user).toEqual(testUser);
	});

	it("throws an error if battery dead or scooter broken", () => {
		testScooter.charge = 10;
		expect(() => {
			testScooter.rent(testUser);
		}).toThrow("scooter needs to charge");
	});
});

describe("scooter.dock(station)", () => {
	it("returns a scooter to a station", () => {
		const dockAttempt = testScooter.dock("testStation");
		expect(testScooter.user).toBeNull();
	});
});

describe("scooter.charge()", () => {
	it.skip("charges a scooter", () => {
		// Arrange
		// Act
		// Assert
	});
});

describe("scooter.repair()", () => {
	it.skip("repairs a scooter", () => {
		// Arrange
		// Act
		// Assert
	});
});
