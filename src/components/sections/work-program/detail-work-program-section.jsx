'use client';

import { CircleUser, Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ContainerBanner } from '@/components/container/container-banner';
import ResponsivePagination from '@/components/global/responsive-pagination';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import DetailWorkProgramSkeleton from '@/components/skeletons/detail-work-program-skeleton';
import { ImageUrl } from '@/lib/image-url';
import { formatDate } from '@/utils/format-date';
import { sanitizeHTML } from '@/utils/sanitize-html';

function DetailWorkProgramSection({ programs, programId, selectedUser }) {
	const [currentPage, setCurrentPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [filteredPrograms, setFilteredPrograms] = useState([]);
	const [mainImageSrc, setMainImageSrc] = useState('');
	const [sanitizedDescription, setSanitizedDescription] = useState('');

	useEffect(() => {
		try {
			const filtered = selectedUser !== 'all' ? programs.filter((program) => program.user_id === parseInt(selectedUser)) : programs;
			const sorted = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
			setFilteredPrograms(sorted);

			if (currentPage >= sorted.length && sorted.length > 0) {
				setCurrentPage(sorted.length - 1);
			} else if (sorted.length === 0) {
				setCurrentPage(0);
			}
		} catch (err) {
			setError('Failed to load work programs');
		} finally {
			setLoading(false);
		}
	}, [programs, selectedUser, currentPage]);

	useEffect(() => {
		if (filteredPrograms.length > 0 && currentPage < filteredPrograms.length) {
			const currentProgram = filteredPrograms[currentPage];
			setMainImageSrc(ImageUrl(currentProgram?.image, 'default'));
			setSanitizedDescription(sanitizeHTML(currentProgram?.description));
		} else {
			setMainImageSrc(ImageUrl(null, 'default'));
			setSanitizedDescription('');
		}
	}, [filteredPrograms, currentPage]);

	const totalPages = filteredPrograms.length;
	const currentProgram = filteredPrograms[currentPage] || null;

	const handleImageError = () => {
		setMainImageSrc(ImageUrl(null, 'default'));
	};

	return (
		<>
			<ContainerBanner title={`Program Kerja Bulan ${programId.charAt(0).toUpperCase() + programId.slice(1)}`} />
			{loading ? (
				<DetailWorkProgramSkeleton />
			) : error ? (
				<p className='text-center text-red-500'>{error}</p>
			) : (
				<MaxWidthWrapper>
					<div className="w-full gap-y-10 font-['Poppins']">
						<main className='w-full'>
							<div className='max-w-3xl mx-auto'>
								{totalPages > 0 && currentProgram ? (
									<article className=''>
										<header className='mb-8'>
											<div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm'>
												{currentProgram.user?.photo ? (
													<Image src={ImageUrl(currentProgram.user.photo, 'profile')} alt={currentProgram.user.name || 'Unknown'} width={48} height={48} className='rounded-full border border-gray-300 object-cover lg:size-11 md:size-9 size-8' onError={handleImageError} />
												) : (
													<CircleUser className='text-cit-secondary lg:h-11 lg:w-11 md:h-9 md:w-9 h-8 w-8' />
												)}
												<div>
													<p className='lg:text-lg md:text-base text-sm font-semibold capitalize text-gray-900'>{currentProgram.user?.name || 'Unknown'}</p>
													<p className='lg:text-sm md:text-sm text-xs text-gray-500'>{formatDate(currentProgram.date).formattedDate}</p>
												</div>
											</div>
											<h1 className='mt-6 w-full lg:text-3xl md:text-2xl text-xl font-bold leading-tight text-gray-900 break-words'>{currentProgram.name}</h1>
										</header>
										<div className='relative w-full overflow-hidden rounded-lg shadow-lg'>
											<Image src={mainImageSrc} width={800} height={450} alt={currentProgram.name} className='w-full h-96 object-top rounded-lg object-cover transition-transform duration-500 hover:scale-105' onError={handleImageError} />
										</div>
										<div
											className='prose max-w-full lg:text-lg md:text-lg text-base text-gray-700 text-justify lg:leading-relaxed md:leading-relaxed leading-normal lg:mt-6 md:mt-6 mt-4 lg:indent-8 md:indent-7 indent-6 whitespace-normal break-words'
											dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
										/>
										{totalPages > 1 && <ResponsivePagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
									</article>
								) : (
									<div className='flex flex-col items-center justify-center w-full h-64 bg-gray-100 text-gray-500 rounded-lg shadow-md'>
										<p>Tidak ada program kerja untuk bulan {programId} di lembaga yang dipilih.</p>
									</div>
								)}
							</div>
						</main>
					</div>
				</MaxWidthWrapper>
			)}
		</>
	);
}

export default DetailWorkProgramSection;
