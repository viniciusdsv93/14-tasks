import { randomUUID } from "crypto";
import { Task } from "./Task";

describe("Task Entity", () => {
	test("Should return an instance of Task", () => {
		const id = randomUUID();
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const newTask = new Task(id, name, deadline);
		expect(newTask).toBeInstanceOf(Task);
	});

	test("Should throw an error if name provided is an empty string", () => {
		const id = randomUUID();
		const name = "";
		const deadline = new Date(Date.now() + 86400 * 1000);
		expect(() => new Task(id, name, deadline)).toThrowError(
			"Task name cannot be empty"
		);
	});

	test("Should throw an error if deadline provided is on the past", () => {
		const id = randomUUID();
		const name = "Task sample";
		const deadline = new Date(Date.now() - 86400 * 1000);
		expect(() => new Task(id, name, deadline)).toThrowError(
			"Task deadline must be a future date"
		);
	});

	test("Should return task id when getId method is called", () => {
		const id = randomUUID();
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const newTask = new Task(id, name, deadline);
		expect(newTask.getId()).toBe(id);
	});

	test("Should return task name when getName method is called", () => {
		const id = randomUUID();
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const newTask = new Task(id, name, deadline);
		expect(newTask.getName()).toBe(name);
	});

	test("Should return task deadline when getDeadline method is called", () => {
		const id = randomUUID();
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const newTask = new Task(id, name, deadline);
		expect(newTask.getDeadline()).toBe(deadline);
	});

	test("Should return false when getIsDone method is called after creating an instance", () => {
		const id = randomUUID();
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const newTask = new Task(id, name, deadline);
		expect(newTask.getIsDone()).toBe(false);
	});
});
