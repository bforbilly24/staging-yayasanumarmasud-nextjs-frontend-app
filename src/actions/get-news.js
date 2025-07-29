'use server';

import { ENDPOINTS } from '@/api/api-url';
import { apiUrl } from '@/types/environment';
import axios from 'axios';

async function getNews(page = 1) {
	try {
		const newsResponse = await axios.get(ENDPOINTS.NEWS.GET(page), {
			headers: {
				Authorization: `Bearer ${process.env.STATIC_BEARER_TOKEN}`,
			},
		});

		if (newsResponse?.data?.status !== 'success') {
			return { error: true, isEmpty: true, data: [] };
		}

		const rawNews = newsResponse.data.data;

		const processedNews = rawNews.map((item) => {
			const userPhoto = item.user.photo ? (item.user.photo.startsWith('http') || item.user.photo.startsWith('https') ? item.user.photo : `${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}/storage/photos/${item.user.photo}`) : '';

			return {
				id: item.id,
				name: item.name,
				description: item.description,
				image: item.image ? (item.image.startsWith('http') ? item.image : `${apiUrl.replace('/api', '')}${item.image}`) : '',
				blurDataImage: item.blurDataImage,
				created_at: item.created_at,
				user: {
					id: item.user.id,
					name: item.user.name,
					email: item.user.email,
					photo: userPhoto,
					blurhash: item.user.blurhash || '',
				},
			};
		});

		const sortedData = processedNews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

		return {
			error: false,
			isEmpty: sortedData.length === 0,
			data: sortedData,
		};
	} catch (error) {
		console.error('Error fetching news:', error);
		return { error: true, isEmpty: true, data: [] };
	}
}

export { getNews };
