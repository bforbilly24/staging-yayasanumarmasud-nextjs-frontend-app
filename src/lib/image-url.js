import { imageUrl } from "@/types/environment";

const ImageUrl = (url, type = 'default') => {
	const cloudinaryBaseUrl = imageUrl;
	
	const placeholderImages = {
		school: '/placeholder/school-placeholder.svg',
		icon: '/placeholder/icon-placeholder.svg',
		profile: '/placeholder/profile-placeholder.svg',
		structure: '/placeholder/structure-placeholder.svg',
		news: '/placeholder/news-placeholder.svg',
		achievement: '/placeholder/achievement-placeholder.svg',
	};

	const isValidImageUrl = (url) => {
		if (!url || url === '' || typeof url !== 'string') return false;

		const imageExtensions = /\.(jpg|jpeg|png|gif|svg|webp)$/i;
		const isUrlLike = /^(https?:\/\/|\/)/i.test(url);
		return isUrlLike || imageExtensions.test(url);
	};

	const getPlaceholder = (type) => {
		switch (type) {
			case 'school': return placeholderImages.school;
			case 'icon': return placeholderImages.icon;
			case 'profile': return placeholderImages.profile;
			case 'structure': return placeholderImages.structure;
			case 'news': return placeholderImages.news;
			case 'achievement': return placeholderImages.achievement;
			default: return placeholderImages.school;
		}
	};

	if (!isValidImageUrl(url)) {
		return getPlaceholder(type);
	}

	if (url.startsWith('http://') || url.startsWith('https://')) {
		return url;
	}

	if (url.startsWith('/')) {
		return url;
	}

	if (cloudinaryBaseUrl && url) {
		const cleanUrl = url.replace(/^v\d+\//, '');
		
		const fullCloudinaryUrl = `${cloudinaryBaseUrl}/${url}`;
		return fullCloudinaryUrl;
	}

	return getPlaceholder(type);
};

export { ImageUrl };