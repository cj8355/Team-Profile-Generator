const intern = require("../lib/intern");

test("Can set school via constructor", () => {
    const testValue = "NYU";
    const e = new intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
    const testValue = "Intern";
    const e = new intern("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can set school via getSchool()", () => {
    const testValue = "NYU";
    const e = new intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});