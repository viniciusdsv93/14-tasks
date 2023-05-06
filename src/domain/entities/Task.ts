export class Task {
	private name: string;
	private deadline: Date;

	constructor(name: string, deadline: Date) {
		if (name === "") throw new Error("Task name cannot be empty");
		if (deadline.getTime() <= Date.now())
			throw new Error("Task deadline must be a future date");
		this.name = name;
		this.deadline = deadline;
	}
}
