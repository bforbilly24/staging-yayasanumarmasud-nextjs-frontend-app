'use server';

import axios from 'axios';
import { getUsers } from '@/actions/get-users';
import { ENDPOINTS } from '@/api/api-url';
import { apiUrl } from '@/types/environment';

async function getPrograms(showAll = false, page = 1) {
	try {
		const programsResponse = await axios.get(ENDPOINTS.PROGRAMS.GET(page), {
			headers: {
				Authorization: `Bearer ${process.env.STATIC_BEARER_TOKEN}`,
			},
		});

		if (programsResponse?.data?.status !== 'success') {
			return { error: true, isEmpty: true, data: [] };
		}

		const rawPrograms = programsResponse.data.data;

		const usersResponse = await getUsers();
		const usersData = usersResponse.data.reduce((acc, user) => {
			acc[user.id] = user;
			return acc;
		}, {});

		const processedPrograms = rawPrograms.map((item) => {
			const user = usersData[item.user_id] || { name: 'Unknown', email: '', photo: '', blurhash: '' };

			return {
				id: item.id,
				user_id: item.user_id,
				name: item.name,
				description: item.description,
				image: item.image ? (item.image.startsWith('http://') || item.image.startsWith('https://') ? item.image : `${apiUrl.replace('/api', '')}${item.image}`) : '',
				blurDataImage: item.blurDataImage,
				date: item.date,
				created_at: item.created_at,
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
					photo: user.photo || '',
					blurhash: user.blurhash || '',
				},
			};
		});

		return {
			error: false,
			isEmpty: processedPrograms.length === 0,
			data: processedPrograms,
		};
	} catch (error) {
		console.error('Error in getPrograms:', error);
		return { error: true, isEmpty: true, data: [] };
	}
}

export { getPrograms };
