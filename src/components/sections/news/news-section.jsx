'use client';

import { useCallback, useEffect, useState } from 'react';
import { getNews } from '@/actions/get-news';
import { NewsCard } from '@/components/cards/news-card';
import { ContainerBanner } from '@/components/container/container-banner';
import Filter from '@/components/global/filter';
import ResponsivePagination from '@/components/global/responsive-pagination';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { NewsCardSkeleton } from '@/components/skeletons/news-card-skeleton';

function NewsSection() {
	const [newsList, setNewsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedUser, setSelectedUser] = useState('all');
	const itemsPerPage = 8;

	const fetchNews = useCallback(
		async (user) => {
			try {
				setIsLoading(true);
				const response = await getNews(true);
				if (response.error) throw new Error('Gagal mendapatkan data, cek database');

				const filteredNews = user !== 'all' ? response.data.filter((item) => item.user.id === parseInt(user)) : response.data;
				setNewsList(filteredNews);

				const newTotalPages = Math.ceil(filteredNews.length / itemsPerPage);
				if (currentPage >= newTotalPages && newTotalPages > 0) {
					setCurrentPage(newTotalPages - 1);
				} else if (newTotalPages === 0) {
					setCurrentPage(0);
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		},
		[currentPage, itemsPerPage],
	);

	useEffect(() => {
		fetchNews(selectedUser);
	}, [selectedUser, fetchNews]);

	const handleFilterChange = (user) => {
		setSelectedUser(user);
		setCurrentPage(0);
	};

	const indexOfLastItem = (currentPage + 1) * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = newsList.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(newsList.length / itemsPerPage);

	return (
		<>
			<ContainerBanner upperCamelCase={true} />
			<MaxWidthWrapper>
				<Section id={'berita'} className='flex flex-col justify-center items-center gap-y-8 font-["Poppins"]'>
					<Filter onFilterChange={handleFilterChange} defaultUser='all' title='Filter Berita Berdasarkan Lembaga' />
					{error ? (
						<p className='text-red-500 text-center'>{error}</p>
					) : isLoading ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full font-['Poppins']">
							{Array.from({ length: 4 }).map((_, index) => (
								<NewsCardSkeleton key={index} />
							))}
						</div>
					) : (
						<div className='w-full'>
							<NewsCard data={currentItems} />
							{totalPages > 1 && <ResponsivePagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
						</div>
					)}
				</Section>
			</MaxWidthWrapper>
		</>
	);
}

export default NewsSection;
