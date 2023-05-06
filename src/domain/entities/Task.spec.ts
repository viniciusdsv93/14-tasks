import { Task } from "./Task";

describe("Task Entity", () => {
	test("Should return an instance of Task", () => {
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const newTask = new Task(name, deadline);
		expect(newTask).toBeInstanceOf(Task);
	});

	test("Should throw an error if name provided is an empty string", () => {
		const name = "";
		const deadline = new Date(Date.now() + 86400 * 1000);
		expect(() => new Task(name, deadline)).toThrowError("Task name cannot be empty");
	});

	test("Should throw an error if deadline provided is on the past", () => {
		const name = "Task sample";
		const deadline = new Date(Date.now() - 86400 * 1000);
		expect(() => new Task(name, deadline)).toThrowError(
			"Task deadline must be a future date"
		);
	});
});
