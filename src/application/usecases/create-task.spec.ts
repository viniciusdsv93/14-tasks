import { Task } from "../../domain/entities/Task";
import { ITaskRepository } from "../repositories/task-repository";
import { CreateTask } from "./create-task";

describe("Create Task Usecase", () => {
	type SutTypes = {
		createTask: CreateTask;
		taskRepository: ITaskRepository;
	};

	const makeTaskRepositoryStub = (): ITaskRepository => {
		class ITaskRepositoryStub implements ITaskRepository {
			async save(task: Task): Promise<boolean> {
				return true;
			}
		}
		return new ITaskRepositoryStub();
	};

	const makeSut = (): SutTypes => {
		const taskRepository = makeTaskRepositoryStub();
		const createTask = new CreateTask(taskRepository);

		return {
			createTask,
			taskRepository,
		};
	};

	const name = "Task sample";
	const deadline = new Date(Date.now() + 86400 * 1000);

	test("Should call task repository", async () => {
		const { createTask, taskRepository } = makeSut();
		const taskRepositorySpy = jest.spyOn(taskRepository, "save");
		await createTask.execute({ name, deadline });
		expect(taskRepositorySpy).toHaveBeenCalled();
	});

	test("Should return an instance of Task on success", async () => {
		const { createTask } = makeSut();
		const newTask = await createTask.execute({ name, deadline });
		expect(newTask).toBeInstanceOf(Task);
	});

	test("Should throw an error if repository throws", async () => {
		const { createTask, taskRepository } = makeSut();
		jest.spyOn(taskRepository, "save").mockImplementationOnce(() => {
			return new Promise((resolve) => resolve(false));
		});
		const promise = createTask.execute({ name, deadline });
		expect(promise).rejects.toThrowError("Could not save entity on database");
	});
});
