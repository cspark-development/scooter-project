const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");
const ScooterApp = require("../classes/ScooterApp.js");

/* We'll re-use the returned user object in future tests if it is successfully created */
let testUser;

describe("user.login(password)", () => {
	it.skip("logs a user in if the password is correct", () => {
		testUser = new ScooterApp("testuser", "testpassword", 20);
		const loginAttempt = testUser.login("testpassword");
		expect(loginAttempt).toHaveReturned();
	});

  	it.skip("throws an error if the password is incorrect", () => {
		expect(() => {
			testUser.login("testpasswordINCORRECT");
		}).toThrow("incorrect password");
	});
});

describe("user.logout()", () => {
	it.skip("logs a user out", () => {
		const logoutAttempt = testUser.logout();
		expect(logoutAttempt).toHaveReturned();
	});
});
