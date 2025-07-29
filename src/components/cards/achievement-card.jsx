'use client';

import { BookOpenText, CircleUser, Clock } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import { ImageUrl } from '@/lib/image-url';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';

function AchievementCardItem({ achievement }) {
	const router = useRouter();
	const slug = generateSlug(achievement.name);
	const [imageSrc, setImageSrc] = useState(ImageUrl(achievement.image, 'achievement'));
	const [profileSrc, setProfileSrc] = useState(ImageUrl(achievement.user?.photo, 'profile'));

	const handleImageError = (type) => () => {
		if (type === 'achievement') setImageSrc(ImageUrl(null, 'achievement'));
		if (type === 'profile') setProfileSrc(ImageUrl(null, 'profile'));
	};

	const handleCardClick = () => {
		router.push(`/prestasi/${slug}`);
	};

	return (
		<Card className='flex flex-row lg:flex-col md:flex-col items-start rounded-lg bg-white shadow-md overflow-hidden w-full p-2 lg:p-0 md:p-0 cursor-pointer md:cursor-default' onClick={() => window.innerWidth < 768 && handleCardClick()}>
			<div className='relative w-1/3 lg:w-full md:w-full h-full lg:h-52 md:h-40'>
				<Image src={imageSrc} fill alt={achievement.name} className='object-cover rounded-t-lg lg:rounded-b-none md:rounded-b-none rounded-b-lg' sizes='(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw' onError={handleImageError('achievement')} />
			</div>

			<CardContent className='flex flex-col w-2/3 lg:w-full md:w-full p-3 lg:p-4 md:p-4 gap-y-2'>
				<div className='flex flex-row justify-between items-center w-full'>
					<div className='flex items-center gap-x-1 max-w-20 lg:max-w-28 md:max-w-32'>
						{achievement.user?.photo ? (
							<Image src={profileSrc} alt={achievement.user.name} width={24} height={24} className='rounded-full border border-gray-300 object-cover size-6 lg:size-6 md:size-6' onError={handleImageError('profile')} />
						) : (
							<CircleUser className='text-cit-secondary size-6 lg:size-6 md:size-6' />
						)}
						<p className='text-xs lg:text-sm md:text-sm line-clamp-1 text-cit-secondary capitalize'>{achievement.user?.name || 'Unknown'}</p>
					</div>
					<div className='flex items-center gap-x-1'>
						<Clock className='text-primary size-4' />
						<p className='text-xs text-gray-600'>{formatDate(achievement.created_at).formattedDate}</p>
					</div>
				</div>

				<div className='flex flex-col lg:gap-y-2 md:gap-y-2 gap-y-1 lg:h-28 md:h-24 h-20 w-full'>
					<h5 className='lg:text-lg md:text-lg text-base line-clamp-1 font-semibold leading-tight'>{achievement.name}</h5>
					<div 
						className='lg:text-base md:text-base text-sm text-gray-500 line-clamp-3 leading-snug'
						dangerouslySetInnerHTML={{ __html: achievement.description }}
					/>
				</div>

				<Button variant='default' size='sm' className='hidden md:flex w-full gap-x-1 items-center justify-center text-sm lg:text-base' onClick={handleCardClick}>
					Lihat Detail
					<BookOpenText className='size-4' />
				</Button>
			</CardContent>
		</Card>
	);
}

function AchievementCard({ data = [] }) {
	if (!data.length) {
		return <p className='text-sm text-gray-500 text-center w-full'>Tidak ada prestasi untuk ditampilkan.</p>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full font-['Poppins']">
			{data.map((achievement) => (
				<AchievementCardItem key={achievement.id} achievement={achievement} />
			))}
		</div>
	);
}

export { AchievementCard };
