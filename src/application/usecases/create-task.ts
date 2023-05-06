import { randomUUID } from "crypto";
import { Task } from "../../domain/entities/Task";
import { CreateTaskDTO, ICreateTask } from "../../domain/usecases/create-task";

export class CreateTask implements ICreateTask {
	async execute(createTaskDto: CreateTaskDTO): Promise<Task> {
		const id = randomUUID();
		const { name, deadline } = createTaskDto;
		return new Task(id, name, deadline);
	}
}
