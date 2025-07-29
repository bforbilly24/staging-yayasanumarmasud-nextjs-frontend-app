import Image from 'next/image';
import { getNews } from '@/actions/get-news';
import DetailNewsSection from '@/components/sections/news/detail-news-section';
import { generateSlug } from '@/utils/generate-slug';

export async function generateMetadata({ params }) {
	const { jendelaId } = params;
	const slug = decodeURIComponent(jendelaId);
	const newsData = await getNews(true);
	const newsItem = newsData.data.find((item) => generateSlug(item.name) === slug);

	if (!newsItem) {
		return { title: 'Berita Tidak Ditemukan' };
	}

	return {
		title: newsItem.name,
		description: newsItem.description.substring(0, 160),
		openGraph: {
			title: newsItem.name,
			description: newsItem.description.substring(0, 160),
			images: [{ url: newsItem.image, width: 800, height: 450 }],
			type: 'article',
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/jendela-berita/${slug}`,
		},
		twitter: {
			card: 'summary_large_image',
			title: newsItem.name,
			description: newsItem.description.substring(0, 160),
			image: newsItem.image,
		},
	};
}

export default async function NewsDetailPage({ params }) {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<DetailNewsSection params={params} />
		</div>
	);
}
