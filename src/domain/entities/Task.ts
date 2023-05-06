export class Task {
	private id: string;
	private name: string;
	private deadline: Date;
	private isDone: boolean;

	constructor(id: string, name: string, deadline: Date) {
		if (id === "") throw new Error("Task id cannot be empty");
		if (name === "") throw new Error("Task name cannot be empty");
		if (deadline.getTime() <= Date.now())
			throw new Error("Task deadline must be a future date");
		this.id = id;
		this.name = name;
		this.deadline = deadline;
		this.isDone = false;
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getDeadline() {
		return this.deadline;
	}

	getIsDone() {
		return this.isDone;
	}
}
