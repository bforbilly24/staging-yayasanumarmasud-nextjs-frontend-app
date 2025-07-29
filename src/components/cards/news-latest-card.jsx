import Autoplay from 'embla-carousel-autoplay';
import { BookOpenText, CircleUser, Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/shadcn/carousel';
import { ImageUrl } from '@/lib/image-url';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';

function NewsLatestCard({ data = [], onClick }) {
	const [api, setApi] = useState(null);
	const [current, setCurrent] = useState(1);
	const [count, setCount] = useState(0);
	const latestNews = data;

	useEffect(() => {
		if (api) {
			setCount(api.scrollSnapList().length);
			setCurrent(api.selectedScrollSnap() + 1);

			api.on('select', () => {
				setCurrent(api.selectedScrollSnap() + 1);
			});
		}
	}, [api]);

	if (!latestNews.length) {
		return <p className='text-sm text-gray-500'>Tidak ada Berita Terbaru untuk ditampilkan.</p>;
	}

	return (
		<div className='w-full'>
			<div className='items-center justify-center flex flex-col lg:hidden md:hidden w-full'>
				<Carousel setApi={setApi} className='w-full' plugins={[Autoplay({ delay: 3000 })]}>
					<CarouselContent>
						{latestNews.map((news) => {
							const slug = generateSlug(news.name);
							const [imageSrc, setImageSrc] = useState(ImageUrl(news.image, 'news'));
							const [profileSrc, setProfileSrc] = useState(ImageUrl(news.user?.photo, 'profile'));

							const handleImageError = (type) => () => {
								if (type === 'news') setImageSrc(ImageUrl(null, 'news'));
								if (type === 'profile') setProfileSrc(ImageUrl(null, 'profile'));
							};

							return (
								<CarouselItem key={news.id}>
									<Card className='w-full'>
										<CardContent className='p-0'>
											<Image src={imageSrc} width={1080} height={200} alt={news.name} className='rounded-t-lg h-52 object-cover' onError={handleImageError('news')} />
											<div className='flex flex-col p-4 gap-y-4 w-full'>
												<div className='flex justify-between items-center'>
													<div className='flex items-center gap-x-1 max-w-32'>
														{news.user?.photo ? (
															<Image src={profileSrc} alt={news.user.name} width={24} height={24} className='rounded-full border border-gray-300 object-cover lg:size-6 md:size-6 size-6' onError={handleImageError('profile')} />
														) : (
															<CircleUser className='text-cit-secondary lg:size-6 md:size-6 size-6' />
														)}
														<p className='text-sm line-clamp-1 text-cit-secondary capitalize'>{news.user?.name || 'Unknown'}</p>
													</div>
													<div className='flex items-center gap-x-1'>
														<Clock className='text-primary size-4' />
														<p className='text-xs text-gray-600'>{formatDate(news.created_at).formattedDate}</p>
													</div>
												</div>
												<div className='mt-2 lg:mt-0 md:mt-0 flex flex-col gap-y-2 h-24 w-full'>
													<h5 className='text-lg line-clamp-1 font-semibold leading-tight'>{news.name}</h5>
													<div className='prose text-base text-gray-500 line-clamp-3 leading-snug' dangerouslySetInnerHTML={{ __html: news.description }} />
												</div>
												<Button variant='default' size='lg' className='w-full flex gap-x-1 items-center justify-center' onClick={() => onClick(generateSlug(news.name))}>
													Baca lebih lanjut
													<BookOpenText className='size-4' />
												</Button>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					{/* <CarouselPrevious className='flex text-primary hover:text-cit-secondary ml-8' /> */}
					{/* <CarouselNext className='flex text-primary hover:text-cit-secondary mr-8' /> */}
				</Carousel>
				<div className='py-2 text-center text-sm text-muted-foreground'>
					Slide {current} dari {count}
				</div>
			</div>

			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full font-['Poppins']">
				{latestNews.map((item) => {
					const slug = generateSlug(item.name);
					const [imageSrc, setImageSrc] = useState(ImageUrl(item.image, 'news'));
					const [profileSrc, setProfileSrc] = useState(ImageUrl(item.user?.photo, 'profile'));

					const handleImageError = (type) => () => {
						if (type === 'news') setImageSrc(ImageUrl(null, 'news'));
						if (type === 'profile') setProfileSrc(ImageUrl(null, 'profile'));
					};

					return (
						<Card key={item.id} className='flex flex-col items-center rounded-lg bg-white shadow-md overflow-hidden'>
							<div className='w-full h-52 relative'>
								<Image src={imageSrc} fill alt={item.name} className='rounded-t-lg object-cover object-top' onError={handleImageError('news')} />
							</div>
							<CardContent className='flex flex-col items-start justify-between p-3 gap-y-4 w-full'>
								<div className='flex justify-between items-center w-full'>
									<div className='flex items-center gap-x-1 max-w-20 lg:max-w-32 md:max-w-32'>
										{item.user?.photo ? (
											<Image src={profileSrc} alt={item.user.name} width={24} height={24} className='rounded-full border border-gray-300 object-cover lg:size-6 md:size-6 size-6' onError={handleImageError('profile')} />
										) : (
											<CircleUser className='text-cit-secondary h-6 w-6' />
										)}
										<p className='text-sm line-clamp-1 text-cit-secondary capitalize'>{item.user?.name || 'Unknown'}</p>
									</div>
									<div className='flex items-center gap-x-1'>
										<Clock className='text-primary size-4' />
										<p className='text-xs text-gray-600 truncate max-w-20'>{formatDate(item.created_at).formattedDate}</p>
									</div>
								</div>
								<div className='mt-2 lg:mt-0 md:mt-0 flex flex-col gap-y-2 h-24 w-full'>
									<h5 className='text-lg line-clamp-1 font-semibold leading-tight'>{item.name}</h5>
									<div className='prose text-base text-gray-500 line-clamp-3 leading-snug' dangerouslySetInnerHTML={{ __html: item.description }} />
								</div>
								<Button variant='default' size='lg' className='w-full flex gap-x-1 items-center justify-center' onClick={() => onClick(generateSlug(item.name))}>
									Baca Lebih Lanjut
									<BookOpenText className='size-4' />
								</Button>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export { NewsLatestCard };
