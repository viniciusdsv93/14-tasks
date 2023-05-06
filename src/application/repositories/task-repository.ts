import { Task } from "../../domain/entities/Task";

export interface ITaskRepository {
	save(task: Task): Promise<void>;
}
