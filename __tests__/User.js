const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");
const ScooterApp = require("../classes/ScooterApp.js");

/* We'll re-use the returned user object in future tests */
const testScooterApp = new ScooterApp();
let testUser;

describe("user.login(password)", () => {
	it("logs a user in if the password is correct", () => {
		testUser = testScooterApp.registerUser("testuser", "testpassword", 20);
		const loginAttempt = testUser.login("testpassword");
		expect(testUser.loggedIn).toEqual(true);
	});

  	it("throws an error if the password is incorrect", () => {
		expect(() => {
			testUser.login("testpasswordINCORRECT");
		}).toThrow("incorrect password");
	});
});

describe("user.logout()", () => {
	it("logs a user out", () => {
		const logoutAttempt = testUser.logout();
		expect(testUser.loggedIn).toEqual(false);
	});
});
