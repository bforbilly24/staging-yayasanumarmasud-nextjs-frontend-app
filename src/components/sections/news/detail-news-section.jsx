'use client';

import { BookOpenText, CircleUser, Clock } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getNews } from '@/actions/get-news';
import { ContainerBanner } from '@/components/container/container-banner';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import DetailNewsSkeleton from '@/components/skeletons/detail-news-skeleton';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import { ImageUrl } from '@/lib/image-url';
import { sanitizeHTML } from '@/utils/sanitize-html';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';

function DetailNewsSection({ params }) {
	const router = useRouter();
	const [newsItem, setNewsItem] = useState(null);
	const [relatedNews, setRelatedNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [mainImageSrc, setMainImageSrc] = useState('');
	const [mainProfileSrc, setMainProfileSrc] = useState('');
	const [sanitizedDescription, setSanitizedDescription] = useState('');

	const slug = decodeURIComponent(params.jendelaId);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const newsData = await getNews(true);
				const selectedNewsItem = newsData.data.find((item) => generateSlug(item.name) === slug);

				if (!selectedNewsItem) {
					setError('News item not found');
					return;
				}

				const related = newsData.data
					.filter((item) => item.id !== selectedNewsItem.id)
					.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
					.slice(0, 4);

				setNewsItem(selectedNewsItem);
				setRelatedNews(related);
				setMainImageSrc(ImageUrl(selectedNewsItem.image, 'news'));
				setMainProfileSrc(ImageUrl(selectedNewsItem.user?.photo, 'profile'));
				setSanitizedDescription(sanitizeHTML(selectedNewsItem.description));
			} catch (err) {
				setError('Failed to fetch news');
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, [slug]);

	const handleImageError = (type, setImage) => () => {
		if (type === 'news') setImage(ImageUrl(null, 'news'));
		if (type === 'profile') setImage(ImageUrl(null, 'profile'));
	};

	const RelatedNewsItem = ({ item }) => {
		const [imageSrc, setImageSrc] = useState(ImageUrl(item.image, 'news'));
		const [profileSrc, setProfileSrc] = useState(ImageUrl(item.user?.photo, 'profile'));
		const [sanitizedRelatedDesc, setSanitizedRelatedDesc] = useState('');

		useEffect(() => {
			setSanitizedRelatedDesc(sanitizeHTML(item.description));
		}, [item.description]);

		const handleCardClick = () => {
			router.push(`/jendela-berita/${generateSlug(item.name)}`);
		};

		return (
			<Card className='flex flex-row lg:flex-col md:flex-col items-start rounded-lg bg-white shadow-md overflow-hidden w-full p-2 lg:p-0 md:p-0 cursor-pointer md:cursor-default' onClick={() => window.innerWidth < 768 && handleCardClick()}>
				<div className='relative w-1/3 lg:w-full md:w-full h-full lg:h-52 md:h-40'>
					<Image src={imageSrc} fill alt={item.name} className='object-cover rounded-t-lg lg:rounded-b-none md:rounded-b-none rounded-b-lg' sizes='(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw' onError={handleImageError('news', setImageSrc)} />
				</div>
				<CardContent className='flex flex-col w-2/3 lg:w-full md:w-full p-3 lg:p-4 md:p-4 gap-y-2'>
					<div className='flex flex-row justify-between items-center w-full'>
						<div className='flex items-center gap-x-1 max-w-20 lg:max-w-32 md:max-w-32'>
							{item.user?.photo ? (
								<Image src={profileSrc} alt={item.user.name} width={24} height={24} className='rounded-full border border-gray-300 object-cover size-6 lg:size-6 md:size-6' onError={handleImageError('profile', setProfileSrc)} />
							) : (
								<CircleUser className='text-cit-secondary size-6 lg:size-6 md:size-6' />
							)}
							<p className='text-xs lg:text-sm md:text-sm line-clamp-1 text-cit-secondary capitalize'>{item.user?.name || 'Unknown'}</p>
						</div>
						<div className='flex items-center gap-x-1'>
							<Clock className='text-primary size-4' />
							<p className='text-xs text-gray-600'>{formatDate(item.created_at).formattedDate}</p>
						</div>
					</div>
					<div className='flex flex-col lg:gap-y-2 md:gap-y-2 gap-y-1 lg:h-28 md:h-24 h-20 w-full'>
						<h5 className='lg:text-lg md:text-lg text-base line-clamp-1 font-semibold leading-tight'>{item.name}</h5>
						<div className='lg:text-base md:text-base text-sm text-gray-500 line-clamp-3 leading-snug' dangerouslySetInnerHTML={{ __html: sanitizedRelatedDesc }} />
					</div>
					<Button variant='default' size='sm' className='hidden md:flex w-full gap-x-1 items-center justify-center text-sm lg:text-base' onClick={handleCardClick}>
						Lihat Detail
						<BookOpenText className='size-4' />
					</Button>
				</CardContent>
			</Card>
		);
	};

	return (
		<>
			<ContainerBanner title={newsItem ? newsItem.name : '...'} />
			{loading ? (
				<DetailNewsSkeleton />
			) : error ? (
				<p className='text-center text-red-500'>{error}</p>
			) : (
				<MaxWidthWrapper>
					<div className="w-full gap-y-10 font-['Poppins']">
						<main className='w-full'>
							<article className='w-full'>
								<header className='mb-8'>
									<div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm'>
										{newsItem.user?.photo ? (
											<Image src={mainProfileSrc} alt={newsItem.user.name} width={48} height={48} className='rounded-full border border-gray-300 object-cover lg:size-11 md:size-9 size-8' onError={handleImageError('profile', setMainProfileSrc)} />
										) : (
											<CircleUser className='text-cit-secondary lg:h-11 lg:w-11 md:h-9 md:w-9 h-8 w-8' />
										)}
										<div>
											<p className='lg:text-lg md:text-base text-sm font-semibold capitalize text-gray-900'>{newsItem.user?.name || 'Unknown'}</p>
											<p className='lg:text-sm md:text-sm text-xs text-gray-500'>{formatDate(newsItem.created_at).formattedDate}</p>
										</div>
									</div>
									<h1 className='mt-6 w-full lg:text-3xl md:text-2xl text-xl font-bold leading-tight text-gray-900 break-words'>{newsItem.name}</h1>
								</header>
								<div className='relative w-full overflow-hidden rounded-lg shadow-lg'>
									<Image src={mainImageSrc} width={800} height={450} alt={newsItem.name} className='w-full max-h-[40rem] h-full rounded-lg object-cover object-top transition-transform duration-500 hover:scale-105' onError={handleImageError('news', setMainImageSrc)} />
								</div>
								<div
									className='prose max-w-full lg:text-lg md:text-lg text-base text-gray-700 text-justify lg:leading-relaxed md:leading-relaxed leading-normal lg:mt-6 md:mt-6 mt-4 lg:indent-8 md:indent-7 indent-6 whitespace-normal break-words'
									dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
								/>
							</article>
						</main>
						<div className='pt-12 w-full'>
							<h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>Berita Terkait</h2>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
								{relatedNews.map((item) => (
									<RelatedNewsItem key={item.id} item={item} />
								))}
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			)}
		</>
	);
}

export default DetailNewsSection;
