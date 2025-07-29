'use client';

import { useCallback, useEffect, useState } from 'react';
import { getAchievements } from '@/actions/get-achievements';
import { AchievementCard } from '@/components/cards/achievement-card';
import { ContainerBanner } from '@/components/container/container-banner';
import Filter from '@/components/global/filter';
import ResponsivePagination from '@/components/global/responsive-pagination';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { AchievementCardSkeleton } from '@/components/skeletons/achievement-card-skeleton';

function AchievementSection() {
	const [achievements, setAchievements] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [selectedUser, setSelectedUser] = useState('all');
	const itemsPerPage = 8;

	const fetchAchievements = useCallback(
		async (user) => {
			try {
				setIsLoading(true);
				const response = await getAchievements(true);
				if (response.error) throw new Error('Gagal mendapatkan data, cek database');

				const filteredAchievements = user !== 'all' ? response.data.filter((item) => item.user.id === parseInt(user)) : response.data;
				setAchievements(filteredAchievements);

				const newTotalPages = Math.ceil(filteredAchievements.length / itemsPerPage);
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
		fetchAchievements(selectedUser);
	}, [selectedUser, fetchAchievements]);

	const handleFilterChange = (user) => {
		setSelectedUser(user);
		setCurrentPage(0);
	};

	const indexOfLastItem = (currentPage + 1) * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = achievements.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(achievements.length / itemsPerPage);

	return (
		<>
			<ContainerBanner upperCamelCase={true} />
			<MaxWidthWrapper>
				<div className='flex flex-col justify-center items-center gap-y-8 font-["Poppins"]'>
					<Filter onFilterChange={handleFilterChange} defaultUser='all' title='Filter Prestasi Berdasarkan Lembaga' />
					{error ? (
						<p className='text-red-500 text-center'>{error}</p>
					) : isLoading ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full font-['Poppins']">
							{Array.from({ length: 4 }).map((_, index) => (
								<AchievementCardSkeleton key={index} />
							))}
						</div>
					) : (
						<div className='w-full'>
							<AchievementCard data={currentItems} />
							{totalPages > 1 && <ResponsivePagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
						</div>
					)}
				</div>
			</MaxWidthWrapper>
		</>
	);
}

export default AchievementSection;
