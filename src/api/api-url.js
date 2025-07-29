import { apiUrl } from "@/types/environment";

const ENDPOINTS = {
	ACHIEVEMENTS: {
		GET: (page = 1) => `${apiUrl}/achievements?page=${page}`,
	},
	NEWS: {
		GET: (page = 1) => `${apiUrl}/news?page=${page}`,
	},
	PROGRAMS: {
		GET: (page = 1) => `${apiUrl}/programs?page=${page}`,
	},
	DOCUMENTS: {
		GET: (page = 1) => `${apiUrl}/documents?page=${page}`,
	},
	USERS: {
		GET: `${apiUrl}/users`,
	},
};

export { ENDPOINTS };
