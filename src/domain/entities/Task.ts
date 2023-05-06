export class Task {
	private name: string;
	private deadline: Date;

	constructor(name: string, deadline: Date) {
		if (name === "") throw new Error("Task name cannot be empty");

		this.name = name;
		this.deadline = deadline;
	}
}
