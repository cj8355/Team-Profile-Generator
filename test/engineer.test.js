const engineer = require("../lib/engineer");

test("Can set GitHub account via a constructor", () => {
    const testValue = "GitHubUser";
    const e = new engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
    const testValue = "Engineer";
    const e = new engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can set GitHub username via getGitHub()", () => {
    const testValue = "GitHubUser";
    const e = new engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});