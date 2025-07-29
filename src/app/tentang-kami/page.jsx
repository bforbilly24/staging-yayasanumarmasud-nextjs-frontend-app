import { AboutSection } from '@/components/sections/about/about-section';

export const metadata = {
	title: 'Tentang Kami',
};

export default function AboutPage() {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<AboutSection />
		</div>
	);
}
