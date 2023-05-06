import { randomUUID } from "crypto";
import { Task } from "../../domain/entities/Task";
import { CreateTaskDTO, ICreateTask } from "../../domain/usecases/create-task";
import { ITaskRepository } from "../repositories/task-repository";

export class CreateTask implements ICreateTask {
	private taskRepository: ITaskRepository;

	constructor(taskRepository: ITaskRepository) {
		this.taskRepository = taskRepository;
	}

	async execute(createTaskDto: CreateTaskDTO): Promise<Task> {
		const id = randomUUID();
		const { name, deadline } = createTaskDto;
		const newTask = new Task(id, name, deadline);
		await this.taskRepository.save(newTask);
		return newTask;
	}
}
