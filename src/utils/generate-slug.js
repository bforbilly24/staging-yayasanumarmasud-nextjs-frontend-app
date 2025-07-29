export function generateSlug(text = '') {
	if (!text) return '';

	return text
		.toString()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.trim();
}
