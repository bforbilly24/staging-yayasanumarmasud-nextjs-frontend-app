import Image from 'next/image';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import AdvertisementDividerSection from '@/components/sections/home/advertisement-divider-section';
import ArticleSection from '@/components/sections/home/article-section';
import AsideSection from '@/components/sections/home/aside-section';
import BannerCarouselSection from '@/components/sections/home/banner-carousel-section';
import HeroSection from '@/components/sections/home/hero-section';

export const metadata = {
	title: 'Beranda',
};

export default function HomePage() {
	return (
		<div className='lg:pb-24 md:pb-16 pb-4 flex flex-col gap-y-12 relative'>
			{/* <Image src='/global/pattern-1.png' fill className='absolute inset-0 z-0 h-full w-full object-cover' /> */}

			<HeroSection />
			<BannerCarouselSection />
			<AdvertisementDividerSection />
			<MaxWidthWrapper>
				<main className='flex flex-col lg:flex-row md:flex-row justify-between gap-5'>
					<ArticleSection />
					<AsideSection />
				</main>
			</MaxWidthWrapper>
		</div>
	);
}
