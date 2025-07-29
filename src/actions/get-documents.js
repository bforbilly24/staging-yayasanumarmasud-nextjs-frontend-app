'use server';

import axios from 'axios';
import { ENDPOINTS } from '@/api/api-url';
import { apiUrl } from '@/types/environment';

async function getDocuments(showAll = false, page = 1) {
	try {
		const response = await axios.get(ENDPOINTS.DOCUMENTS.GET(page), {
			headers: {
				Authorization: `Bearer ${process.env.STATIC_BEARER_TOKEN}`,
			},
		});

		if (response?.data?.status === 'success') {
			const rawData = response.data.data;

			const sortedData = showAll ? rawData : rawData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 4);

			return {
				error: false,
				isEmpty: sortedData.length === 0,
				data: sortedData.map((item) => ({
					id: item.id,
					user_id: item.user_id,
					name: item.name,
					image: item.image ? (item.image.startsWith('http://') || item.image.startsWith('https://') ? item.image : `${apiUrl.replace('/api', '')}${item.image}`) : '',
					blurDataImage: item.blurDataImage,
					created_at: item.created_at,
					user: item.user
						? {
								id: item.user.id,
								name: item.user.name,
							}
						: null,
				})),
			};
		} else {
			return { error: true, isEmpty: true, data: [] };
		}
	} catch (error) {
		console.error('Error fetching documents:', error);
		return { error: true, isEmpty: true, data: [] };
	}
}

export { getDocuments };
