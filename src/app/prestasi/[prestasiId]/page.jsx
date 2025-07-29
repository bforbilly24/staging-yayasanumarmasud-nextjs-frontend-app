import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAchievements } from '@/actions/get-achievements';
import DetailAchievementSection from '@/components/sections/achievement/detail-achievement-section';
import { generateSlug } from '@/utils/generate-slug';

export async function generateMetadata({ params }) {
	const { prestasiId } = params;
	const slug = decodeURIComponent(prestasiId);
	const achievementsData = await getAchievements(true);

	const achievementItem = achievementsData.data.find((item) => generateSlug(item.name) === slug);

	if (!achievementItem) {
		return { title: 'Prestasi Tidak Ditemukan' };
	}

	return {
		title: achievementItem.name,
		description: achievementItem.description.substring(0, 160),
		openGraph: {
			title: achievementItem.name,
			description: achievementItem.description.substring(0, 160),
			images: [{ url: achievementItem.image, width: 800, height: 450 }],
			type: 'article',
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/prestasi/${slug}`,
		},
		twitter: {
			card: 'summary_large_image',
			title: achievementItem.name,
			description: achievementItem.description.substring(0, 160),
			image: achievementItem.image,
		},
	};
}

export default async function AchievementDetailPage({ params }) {
	const { prestasiId } = params;
	const slug = decodeURIComponent(prestasiId);
	const achievementsData = await getAchievements(true);

	const achievementItem = achievementsData.data.find((item) => generateSlug(item.name) === slug);

	if (!achievementItem) {
		return notFound();
	}

	return (
		<div className='pb-24 flex flex-col gap-y-12 bg-slate-50 relative'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<DetailAchievementSection achievementItem={achievementItem} achievementsData={achievementsData.data} />
		</div>
	);
}
