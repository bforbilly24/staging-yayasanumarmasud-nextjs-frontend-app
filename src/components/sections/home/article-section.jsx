'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getNews } from '@/actions/get-news';
import { NewsLatestCard } from '@/components/cards/news-latest-card';
import { TitleSection } from '@/components/sections/title-section';
import { NewsLatestCardSkeleton } from '@/components/skeletons/news-latest-card-skeleton';
import { handleViewMore } from '@/lib/navigation';

const ArticleSection = () => {
	const router = useRouter();
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const onViewMoreClick = () => {
		handleViewMore(router, '/jendela-berita');
	};

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews();

				const sortedNews = response.data ? response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) : [];

				setNews(sortedNews.slice(0, 6));
			} catch (err) {
				console.error('Error fetching news:', err);
				setError('Failed to load news.');
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	return (
		<article id='aside' className='z-10 font-["Poppins"] inline-flex w-full flex-col items-start justify-start gap-8'>
			<div className='flex flex-col gap-y-4'>
				<h5 className='text-lg text-primary font-bold border-b-2 border-cit-secondary pb-2 w-fit'>Sambutan</h5>
				<div className='flex h-fit flex-col items-start justify-start self-stretch rounded-lg bg-white p-4 shadow-md'>
					<div className='flex flex-col items-start justify-start gap-4 self-stretch'>
						<div className='flex flex-col items-start justify-start gap-y-2.5'>
							<p className='text-base font-bold text-primary'>Ketua Umum Pengurus</p>
							<div className='flex h-fit w-full flex-col items-start justify-start'>
								<p className='text-base font-normal text-primary/80'>
									Alhamdulillahirrobbil ‘alamiin. Puji syukur kami panjatkan ke hadirat Allah SWT yang telah melimpahkan taufiq, hidayah serta inayah-Nya kepada kita semua. Shalawat serta salam kami sanjungkan kepada junjungan kita Nabi Muhammad SAW.
									<br />
									<br />
									Dalam rangka ikut serta mencerdaskan kehidupan bangsa dan mewujudkan tujuan pendidikan nasional, kami Yayasan Syech Maulana Umar Mas'ud menyelenggarakan pendidikan baik formal maupun non-formal untuk memberikan kontribusi terbaik bagi masyarakat.
								</p>
							</div>
							<div className='flex flex-col w-full items-start justify-center gap-y-1'>
								<p className='text-base font-bold text-gray-500'>ردين احسن الحق </p>
								<p className='text-base font-bold text-gray-500'>- (Drs. R. Akhsanul Haq)</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='inline-flex h-fit w-full flex-col items-start justify-start gap-8'>
				<TitleSection title='Berita Terbaru' content={false} onClick={onViewMoreClick} data={news} />
				<div className='w-full'>
					{loading ? (
						<NewsLatestCardSkeleton />
					) : error ? (
						<p className='text-sm text-red-500'>{error}</p>
					) : news.length === 0 ? (
						<p className='text-sm text-gray-500'>Tidak ada Berita Terbaru yang tersedia saat ini.</p>
					) : (
						<NewsLatestCard data={news} onClick={(slug) => router.push(`/jendela-berita/${slug}`)} />
					)}
				</div>
			</div>
		</article>
	);
};

export default ArticleSection;
