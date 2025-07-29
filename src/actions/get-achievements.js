'use server';

import axios from 'axios';
import { getUsers } from '@/actions/get-users';
import { ENDPOINTS } from '@/api/api-url';
import { apiUrl } from '@/types/environment';

async function getAchievements(showAll = false, page = 1) {
  try {
    const achievementsResponse = await axios.get(ENDPOINTS.ACHIEVEMENTS.GET(page), {
      headers: {
        Authorization: `Bearer ${process.env.STATIC_BEARER_TOKEN}`,
      },
    });

    if (achievementsResponse?.data?.status !== 'success') {
      return { error: true, isEmpty: true, data: [] };
    }

    const rawAchievements = achievementsResponse.data.data;

    const usersResponse = await getUsers();
    const usersData = usersResponse.data.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});

    const processedAchievements = rawAchievements.map((item) => {
      const user = usersData[item.user_id] || { name: 'Unknown', email: '', photo: '', blurhash: '' };

      return {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image
          ? item.image.startsWith('http://') || item.image.startsWith('https://')
            ? item.image
            : `${apiUrl.replace('/api', '')}${item.image}`
          : '',
        blurDataImage: item.blurDataImage,
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

    const sortedData = showAll
      ? processedAchievements
      : processedAchievements.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 4);

    return {
      error: false,
      isEmpty: sortedData.length === 0,
      data: sortedData,
    };
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return { error: true, isEmpty: true, data: [] };
  }
}

export { getAchievements };