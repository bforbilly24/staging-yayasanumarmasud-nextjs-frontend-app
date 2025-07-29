'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import HeroSkeleton from '@/components/skeletons/hero-skeleton';
import { Marquee } from '@/components/ui/magicui/marquee';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { LISTINSTITUTION } from '@/constants/list-institution';
import { ImageUrl } from '@/lib/image-url';
import { generateSlug } from '@/utils/generate-slug';

const HeroSection = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const handleCardClick = (name) => {
		const slug = generateSlug(name);
		router.push(`/lembaga/${slug}`);
	};

	return (
		<Section id={'hero'} className='inline-flex lg:h-[37.5rem] md:h-[34rem] h-[22rem] w-full flex-col items-center justify-center bg-[url("/home/bg-hero.jpg")] bg-no-repeat bg-cover relative font-["Poppins"]'>
			<div className='absolute top-0 right-0 bottom-0 left-0 bg-black/60 z-0' />

			<div className='z-10 inline-flex w-full flex-col items-center justify-center lg:gap-y-8 md:gap-y-6 gap-y-4'>
				<div className='flex flex-col items-center justify-start gap-y-4'>
					<Image width={200} height={200} src='/home/home-logo.svg' alt='background-hero' className='lg:size-48 md:size-40 size-20' />
					<h1 className='text-center lg:text-3xl md:text-2xl text-base font-bold capitalize text-white'>YAYASAN SYECH MAULANA UMAR MAS'UD</h1>
				</div>

				<MaxWidthWrapper className={'overflow-hidden'}>
					{loading ? (
						<HeroSkeleton />
					) : (
						<Marquee className='w-full' pauseOnHover>
							{LISTINSTITUTION.map((institution) => (
								<Card key={institution.id} className='lg:size-52 md:size-52 size-36 bg-white/10 border-white/20 text-white shadow-lg hover:bg-white/30 cursor-pointer' onClick={() => handleCardClick(institution.name)}>
									<CardHeader className='flex flex-col items-center lg:p-6 md:p-6 p-4'>
										<div className='relative lg:size-20 md:size-16 size-12 rounded-full overflow-hidden border border-white'>
											<Image src={ImageUrl(institution.icon, 'icon')} alt={institution.name} fill className='rounded-full object-cover' />
										</div>
									</CardHeader>
									<CardContent className='flex flex-col items-center text-center lg:px-6 md:px-4 px-3'>
										<CardTitle className='lg:text-sm md:text-sm text-xs font-medium'>{institution.name}</CardTitle>
									</CardContent>
								</Card>
							))}
						</Marquee>
					)}
				</MaxWidthWrapper>
			</div>
		</Section>
	);
};

export default HeroSection;
