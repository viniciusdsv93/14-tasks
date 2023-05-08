import { Task } from "../../domain/entities/Task";
import { CreateTaskDTO, ICreateTask } from "../../domain/usecases/create-task";
import { Controller } from "../helpers/controller";
import { HttpRequest } from "../helpers/http";
import { CreateTaskController } from "./create-task.controller";

describe("Create Task Controller", () => {
	type SutTypes = {
		createTaskController: Controller;
		createTaskUsecase: ICreateTask;
	};

	const makeCreateTaskUsecaseStub = (): ICreateTask => {
		class CreateTaskUsecaseStub implements ICreateTask {
			execute(createTaskDto: CreateTaskDTO): Promise<Task> {
				const { name, deadline } = createTaskDto;
				return new Promise((resolve) =>
					resolve(new Task("id_sample", name, deadline))
				);
			}
		}

		return new CreateTaskUsecaseStub();
	};

	const makeSut = (): SutTypes => {
		const createTaskUsecase = makeCreateTaskUsecaseStub();
		const createTaskController = new CreateTaskController(createTaskUsecase);

		return {
			createTaskController,
			createTaskUsecase,
		};
	};

	const name = "Task sample";
	const deadline = new Date(Date.now() + 86400 * 1000);

	const makeFakeHttpRequest = (): HttpRequest => {
		return {
			body: {
				name,
				deadline,
			},
		};
	};

	test("Should call create task usecase", async () => {
		const { createTaskController, createTaskUsecase } = makeSut();
		const createTaskUsecaseSpy = jest.spyOn(createTaskUsecase, "execute");
		await createTaskController.handle(makeFakeHttpRequest());
		expect(createTaskUsecaseSpy).toHaveBeenCalled();
	});
});
