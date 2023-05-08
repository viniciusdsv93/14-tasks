export type HttpRequest = {
	params?: string[];
	query?: string[];
	body?: any;
};

export type HttpResponse = {
	code: number;
	body?: any;
};
