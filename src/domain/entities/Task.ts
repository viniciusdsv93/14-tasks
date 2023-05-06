export class Task {
	private name: string;
	private deadline: Date;
	private isDone: boolean;

	constructor(name: string, deadline: Date) {
		if (name === "") throw new Error("Task name cannot be empty");
		if (deadline.getTime() <= Date.now())
			throw new Error("Task deadline must be a future date");
		this.name = name;
		this.deadline = deadline;
		this.isDone = false;
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
