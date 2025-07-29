'use server';

import axios from 'axios';
import { ENDPOINTS } from '@/api/api-url';
import { apiUrl } from '@/types/environment';

async function getUsers() {
  try {
    const response = await axios.get(ENDPOINTS.USERS.GET, {
      headers: { Authorization: `Bearer ${process.env.STATIC_BEARER_TOKEN}` },
    });

    if (response?.data?.status !== 'success') {
      return { error: true, isEmpty: true, data: [] };
    }

    const users = response.data.data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      photo: user.photo
        ? user.photo.startsWith('http://') || user.photo.startsWith('https://')
          ? user.photo
          : `${apiUrl.replace('/api', '')}/${user.photo}`
        : '',
      blurhash: user.blurhash || '',
    }));

    return { error: false, isEmpty: users.length === 0, data: users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { error: true, isEmpty: true, data: [] };
  }
}

export { getUsers };