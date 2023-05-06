import { Task } from "../entities/Task";

export type CreateTaskDTO = {
	name: string;
	deadline: Date;
};

export interface ICreateTask {
	execute(createTaskDto: CreateTaskDTO): Promise<Task>;
}
