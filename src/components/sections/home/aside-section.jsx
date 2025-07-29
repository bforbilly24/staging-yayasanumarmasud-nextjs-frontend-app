'use client';

import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { getAchievements } from '@/actions/get-achievements';
import { getPrograms } from '@/actions/get-programs';
import { AchievementCarousel } from '@/components/carousel/achievement-carousel';
import { TitleSection } from '@/components/sections/title-section';
import { AchievementSkeleton } from '@/components/skeletons/achievement-skeleton';
import { ProgramsSkeleton } from '@/components/skeletons/program-skeleton';
import { Carousel, CarouselContent } from '@/components/ui/shadcn/carousel';
import { handleViewMore } from '@/lib/navigation';
import { formatDate } from '@/utils/format-date';

const AsideSection = () => {
	const router = useRouter();
	const [programs, setPrograms] = useState([]);
	const [achievements, setAchievements] = useState([]);
	const [programsLoading, setProgramsLoading] = useState(true);
	const [achievementsLoading, setAchievementsLoading] = useState(true);
	const [api, setApi] = useState(null);
	const [current, setCurrent] = useState(1);
	const [count, setCount] = useState(0);

	const onViewMorePrograms = () => {
		handleViewMore(router, '/program-kerja');
	};

	const onViewMoreAchievements = () => {
		handleViewMore(router, '/prestasi');
	};

	const currentMonth = formatDate(new Date().toISOString()).monthName.toLowerCase();

	useEffect(() => {
		const fetchPrograms = async () => {
			try {
				const programsData = await getPrograms();
				const filteredPrograms = programsData.data.filter((program) => program.user_id === 1).sort((a, b) => new Date(b.date) - new Date(a.date));
				setPrograms(filteredPrograms);
			} catch (error) {
				console.error('Error fetching programs:', error);
			} finally {
				setProgramsLoading(false);
			}
		};

		const fetchAchievements = async () => {
			try {
				const achievementsData = await getAchievements();
				const sortedAchievements = achievementsData.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5);
				setAchievements(sortedAchievements);
			} catch (error) {
				console.error('Error fetching achievements:', error);
			} finally {
				setAchievementsLoading(false);
			}
		};

		fetchPrograms();
		fetchAchievements();
	}, []);

	useEffect(() => {
		if (api) {
			setCount(api.scrollSnapList().length);
			setCurrent(api.selectedScrollSnap() + 1);

			api.on('select', () => {
				setCurrent(api.selectedScrollSnap() + 1);
			});
		}
	}, [api]);

	const currentMonthPrograms = useMemo(() => {
		return programs.filter((program) => formatDate(program.date).monthName.toLowerCase() === currentMonth);
	}, [programs, currentMonth]);

	const handlePreviewClick = (slug) => {
		router.push(`/prestasi/${slug}`);
	};

	return (
		<aside id='aside' className='z-10 font-["Poppins"] flex md:w-64 w-full flex-col items-start justify-start gap-y-8'>
			<div className='inline-flex h-fit md:w-64 w-full flex-col items-start justify-start'>
				<div className='flex flex-col items-center justify-center gap-4 w-full'>
					<div className='w-full item-start justify-center'>
						<TitleSection title='Program Kerja Terbaru' onClick={onViewMorePrograms} content={false} data={programs} />
					</div>
					<div className='inline-flex h-fit w-full flex-col items-center justify-start bg-white rounded-md shadow-md p-4'>
						{programsLoading ? (
							<ProgramsSkeleton />
						) : currentMonthPrograms.length === 0 ? (
							<p className='text-sm text-center text-gray-500'>Tidak ada Program yang tersedia untuk bulan ini.</p>
						) : (
							<ul className='w-full'>
								{currentMonthPrograms.map((item, index) => {
									const monthName = formatDate(item.date).monthName.toLowerCase();
									return (
										<li key={item.id} className='group relative flex flex-col items-start justify-center pl-6'>
											<div
												className={`absolute h-full left-1.5 top-0 w-px bg-secondary 
                        ${index === 0 ? 'group-first:top-0' : ''}`}
											/>
											<div className='absolute left-0 top-5 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-cit-secondary bg-white' />
											<div className='flex flex-col gap-y-2 py-2 w-full'>
												<Link href={`/program-kerja/yayasan-syech-maulana-umar-masud/${monthName}`} className='flex flex-row justify-between items-center w-full'>
													<p className='line-clamp-1 text-base font-semibold text-primary lg:max-w-40 md:max-w-40 max-w-32 w-full hover:text-cit-primary'>{item.name}</p>
													<p className='text-sm font-light text-primary'>{formatDate(item.date).formattedDate}</p>
												</Link>
												<p className='line-clamp-2 text-base font-normal h-10 text-primary/80'>{item.description}</p>
											</div>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			</div>

			<div className='flex h-fit md:w-64 w-full flex-col'>
				<div className='flex flex-col items-center justify-center w-full gap-y-4'>
					<div className='w-full'>
						<TitleSection title='Prestasi Terbaru' content={false} data={achievements} onClick={onViewMoreAchievements} />
					</div>
					<div className={`flex w-full md:max-w-64 rounded-lg lg:shadow-md md:shadow-md shadow-none ${achievements.length === 0 ? 'p-0' : 'p-0'}`}>
						{achievementsLoading ? (
							<AchievementSkeleton />
						) : achievements.length === 0 ? (
							<p className='w-text-sm text-center text-gray-500'>Tidak ada Prestasi yang tersedia saat ini.</p>
						) : (
							<div className='w-full'>
								<Carousel setApi={setApi} className='w-full md:max-w-64' plugins={[Autoplay({ delay: 5000 })]}>
									<CarouselContent>
										{achievements.map((achievement) => (
											<AchievementCarousel key={achievement.id} achievement={achievement} onPreviewClick={handlePreviewClick} />
										))}
									</CarouselContent>
									{/* <CarouselPrevious className='lg:hidden md:hidden flex text-primary hover:text-cit-secondary ml-8' /> */}
									{/* <CarouselNext className='lg:hidden md:hidden flex text-primary hover:text-cit-secondary mr-8' /> */}
								</Carousel>
								<div className='lg:hidden md:hidden block py-2 text-center text-sm text-muted-foreground'>
									Slides {current} dari {count}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</aside>
	);
};

export default AsideSection;
