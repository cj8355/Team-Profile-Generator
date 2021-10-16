const employee = require("../lib/employee");

test("Can instantiate employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "John"
    const e = new employee(name);
    expect(typeof(e)).toBe("object");
});

test("Can set id via constructor arguments", () => {
    const testValue = 100;
    const e = new employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can instantiate employee instance", () => {
    const testValue = "test@test.com";
    const e = new employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "John"
    const e = new employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new employee("Foo", testValue);
    expect(e.getID()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new employee("John", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
