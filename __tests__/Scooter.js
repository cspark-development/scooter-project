const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const ScooterApp = require("../classes/ScooterApp.js");

/* We'll re-use the returned user object in future tests */
const testUser = new ScooterApp("testuser", "testpassword", 20);
const testScooter = ScooterApp.createScooter("testStation");

describe("scooter.rent(user)", () => {
	it.skip("checks a scooter out to a user", () => {
		const rentAttempt = testScooter.rent(testUser);
		expect(rentAttempt).toHaveReturned();
	});

	it.skip("throws an error if battery dead or scooter broken", () => {
		expect(() => {
			testScooter.rent(testUser);
		}).toThrow("scooter needs to charge");
	});
});

describe("scooter.dock(station)", () => {
	it.skip("returns a scooter to a station", () => {
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
