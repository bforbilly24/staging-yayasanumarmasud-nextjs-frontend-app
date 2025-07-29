import Image from 'next/image';
import NewsSection from '@/components/sections/news/news-section';

export const metadata = {
	title: 'Jendela Berita',
};

export default function NewsPage() {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<NewsSection />
		</div>
	);
}
