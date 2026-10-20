export const publicUrl = (path: string) => {
	if (!path || /^(https?:|data:)/.test(path)) {
		return path;
	}

	return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};
