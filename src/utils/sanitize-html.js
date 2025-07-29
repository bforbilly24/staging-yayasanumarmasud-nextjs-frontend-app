import DOMPurify from 'dompurify';

const sanitizeHTML = (htmlContent) => {
	if (!htmlContent) return '';
	return DOMPurify.sanitize(htmlContent, {
		ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'b', 'i', 'ul', 'ol', 'li', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		ALLOWED_ATTR: ['href', 'target', 'rel'],
		ALLOW_DATA_ATTR: false,
	});
};

export { sanitizeHTML };