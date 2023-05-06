import { Task } from "./Task";

describe("Task Entity", () => {
	test("Should return an instance of Task", () => {
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const newTask = new Task(name, deadline);
		expect(newTask).toBeInstanceOf(Task);
	});
});
