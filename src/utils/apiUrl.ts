export const apiUrl = (resource: 'products' | 'categories') => {
	if (import.meta.env.DEV) {
		return `http://localhost:3001/${resource}`;
	}

	return `${import.meta.env.BASE_URL}data/${resource}.json`;
};
