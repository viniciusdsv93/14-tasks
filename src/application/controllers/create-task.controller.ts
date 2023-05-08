import { ICreateTask } from "../../domain/usecases/create-task";
import { Controller } from "../helpers/controller";
import { HttpRequest, HttpResponse } from "../helpers/http";

export class CreateTaskController implements Controller {
	private createTaskUsecase: ICreateTask;

	constructor(createTaskUsecase: ICreateTask) {
		this.createTaskUsecase = createTaskUsecase;
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		const { name, deadline } = request.body;
		const newTask = await this.createTaskUsecase.execute({ name, deadline });
		return {
			code: 200,
			body: newTask,
		};
	}
}
