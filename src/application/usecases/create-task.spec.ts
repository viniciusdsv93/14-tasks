import { Task } from "../../domain/entities/Task";
import { CreateTask } from "./create-task";

describe("Create Task Usecase", () => {
	test("Should return an instance of Task on success", async () => {
		const name = "Task sample";
		const deadline = new Date(Date.now() + 86400 * 1000);
		const createTask = new CreateTask();
		const newTask = await createTask.execute({ name, deadline });
		expect(newTask).toBeInstanceOf(Task);
	});
});
