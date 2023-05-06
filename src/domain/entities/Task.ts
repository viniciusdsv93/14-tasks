export class Task {
	private name: string;
	private deadline: Date;

	constructor(name: string, deadline: Date) {
		this.name = name;
		this.deadline = deadline;
	}
}
