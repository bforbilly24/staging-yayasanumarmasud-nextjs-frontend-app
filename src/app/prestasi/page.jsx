import Image from 'next/image';
import AchievementSection from '@/components/sections/achievement/achievement-section';

export const metadata = {
	title: 'Prestasi',
};

export default function AchievementPage() {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<AchievementSection />
		</div>
	);
}
