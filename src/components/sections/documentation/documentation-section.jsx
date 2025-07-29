'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { getDocuments } from '@/actions/get-documents';
import { ContainerBanner } from '@/components/container/container-banner';
import Filter from '@/components/global/filter';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import DocumentationSkeleton from '@/components/skeletons/documentation-skeleton';
import { Button } from '@/components/ui/shadcn/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/shadcn/dialog';

function DocumentationSection() {
	const [activities, setActivities] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isFetchingMore, setIsFetchingMore] = useState(false);
	const [error, setError] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [selectedUser, setSelectedUser] = useState('all');
	const ITEMS_PER_PAGE = 12;

	const fetchData = useCallback(async (currentPage, user) => {
		try {
			setIsLoading(currentPage === 1);
			setIsFetchingMore(currentPage > 1);
			const result = await getDocuments(true, currentPage, ITEMS_PER_PAGE);
			if (result.error) throw new Error('Gagal mendapatkan data, cek database');

			const filteredData = user !== 'all' ? result.data.filter((item) => item.user_id === parseInt(user)) : result.data;
			setActivities((prev) => (currentPage === 1 ? filteredData : [...prev, ...filteredData]));
			setHasMore(filteredData.length === ITEMS_PER_PAGE && result.total > currentPage * ITEMS_PER_PAGE);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
			setIsFetchingMore(false);
		}
	}, []);

	useEffect(() => {
		setPage(1);
		setActivities([]);
		fetchData(1, selectedUser);
	}, [selectedUser, fetchData]);

	const loadMore = () => {
		setPage((prev) => prev + 1);
		fetchData(page + 1, selectedUser);
	};

	const handleFilterChange = (user) => {
		setSelectedUser(user);
	};

	return (
		<>
			<ContainerBanner upperCamelCase={true} />
			<MaxWidthWrapper>
				<div className='flex flex-col items-center gap-y-6 font-["Poppins"]'>
					<Filter onFilterChange={handleFilterChange} defaultUser='all' title='Filter Dokumentasi Berdasarkan Lembaga' />
					{error ? (
						<p className='text-red-500 text-center'>{error}</p>
					) : isLoading ? (
						<DocumentationSkeleton />
					) : activities.length === 0 ? (
						<p className='w-full flex items-center justify-center text-sm text-gray-500'>Tidak ada dokumentasi untuk lembaga ini.</p>
					) : (
						<div className='w-full'>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
								{[0, 1, 2, 3].map((colIndex) => (
									<div key={colIndex} className='grid gap-4'>
										{activities
											.filter((_, index) => index % 4 === colIndex)
											.map((item) => (
												<div key={item.id} className='relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-500 hover:scale-105' onClick={() => setSelectedImage(item)}>
													<Image src={item.image} width={500} height={500} alt={item.name} className='h-auto max-w-full rounded-lg' placeholder='blur' blurDataURL={`data:image/jpeg;base64,${item.blurDataImage}`} />
												</div>
											))}
									</div>
								))}
							</div>
							{hasMore && (
								<div className='mt-6'>
									{isFetchingMore ? (
										<DocumentationSkeleton />
									) : (
										<Button variant='default' className='w-full' onClick={loadMore}>
											Muat Lebih Banyak
										</Button>
									)}
								</div>
							)}
						</div>
					)}
				</div>
			</MaxWidthWrapper>

			{selectedImage && (
				<Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
					<DialogContent className='w-full font-["Poppins"]'>
						<DialogHeader>
							<DialogTitle>{selectedImage.name}</DialogTitle>
						</DialogHeader>
						<div className='flex flex-col gap-y-5'>
							<Image src={selectedImage.image} width={500} height={500} alt={selectedImage.name} className='h-full max-h-96 w-full object-cover rounded-md' placeholder='blur' blurDataURL={`data:image/jpeg;base64,${selectedImage.blurDataImage}`} />
							<p className='text-base text-gray-500 capitalize'>Diposting oleh: {selectedImage.user?.name || 'Unknown'}</p>
						</div>
					</DialogContent>
				</Dialog>
			)}
		</>
	);
}

export default DocumentationSection;
