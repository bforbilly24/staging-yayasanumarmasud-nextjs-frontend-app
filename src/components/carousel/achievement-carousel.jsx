import { Clock, Image as ImageUpscale } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import { CarouselItem } from '@/components/ui/shadcn/carousel';
import { ImageUrl } from '@/lib/image-url';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';

function AchievementCarousel({ achievement, onPreviewClick }) {
	const [imageSrc, setImageSrc] = useState(ImageUrl(achievement.image, 'achievement'));
	const [profileSrc, setProfileSrc] = useState(ImageUrl(achievement.user?.photo, 'profile'));
	const slug = generateSlug(achievement.name);

	const handleImageError = (type) => () => {
		if (type === 'achievement') setImageSrc(ImageUrl(null, 'achievement'));
		if (type === 'profile') setProfileSrc(ImageUrl(null, 'profile'));
	};

	return (
		<CarouselItem>
			<Card className='w-full'>
				<CardContent className='p-0'>
					<Image src={imageSrc} width={360} height={200} alt={achievement.name} className='rounded-t-lg h-52 object-cover w-full' onError={handleImageError('achievement')} />
					<div className='flex flex-col p-4 gap-y-4 w-full'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-x-1 max-w-32'>
								{achievement.user?.photo ? (
									<Image src={profileSrc} alt={achievement.user.name} width={24} height={24} className='rounded-full border border-gray-300 object-cover' onError={handleImageError('profile')} />
								) : (
									<div className='w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm'>?</div>
								)}
								<p className='text-sm line-clamp-1 text-cit-secondary capitalize'>{achievement.user?.name || 'Unknown'}</p>
							</div>
							<div className='flex items-center gap-x-1'>
								<Clock className='text-primary h-4 w-4' />
								<p className='text-xs text-gray-600 max-w-20 truncate'>{formatDate(achievement.created_at).formattedDate}</p>
							</div>
						</div>
						<div className='mt-2 lg:mt-0 md:mt-0 flex flex-col gap-y-2 h-24 w-full'>
							<h5 className='text-lg line-clamp-1 font-semibold leading-tight'>{achievement.name}</h5>
							<p className='prose text-base text-gray-500 line-clamp-3 leading-snug jus' dangerouslySetInnerHTML={{ __html: achievement.description }} />
						</div>
						<Button variant='default' size='lg' className='w-full flex gap-x-2 items-center' onClick={() => onPreviewClick(slug)}>
							Lihat Detail Prestasi
							<ImageUpscale className='h-5 w-5' />
						</Button>
					</div>
				</CardContent>
			</Card>
		</CarouselItem>
	);
}

export { AchievementCarousel };
