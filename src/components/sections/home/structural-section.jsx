'use client';

import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import { StructuralCard } from '@/components/cards/structural-card';
import { NextButton, PrevButton, usePrevNextButtons } from '@/components/carousel/embla-carousel-arrow-buttons';
import { DotButton, useDotButton } from '@/components/carousel/embla-carousel-dot-button';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { TitleSection } from '@/components/sections/title-section';
import { StructuralCardSkeleton } from '@/components/skeletons/structural-card-skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/shadcn/carousel';
import { STRUCTURE } from '@/constants/structure';

const StructuralSection = () => {
	const [emblaApi, setEmblaApi] = useState(null);
	const [hovered, setHovered] = useState(null);
	const [loading, setLoading] = useState(true);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Section id='structure' className="font-['Poppins'] w-full">
			<MaxWidthWrapper>
				<TitleSection title='Struktural Organisasi' content="Bidang Organisasi Yayasan Syech Maulana Umar Mas'ud" showButton={false} />

				<div className='flex flex-col items-center gap-8 mt-6'>
					<p className='text-center text-base md:text-base z-10 text-primary italic'>""اليد الواحدة لا تصفق، والجماعة قوة""</p>

					<div className='w-full flex flex-col items-center justify-center'>
						<Carousel
							setApi={setEmblaApi}
							opts={{
								align: 'start',
								breakpoints: {
									'(min-width: 640px)': { slidesToScroll: 1, slidesPerView: 1 },
									'(min-width: 768px)': { slidesToScroll: 3, slidesPerView: 3 },
									'(min-width: 1024px)': { slidesToScroll: 4, slidesPerView: 4 },
								},
							}}
							plugins={[Autoplay({ delay: 3000 })]}
							className='w-full lg:max-w-full md:max-w-full max-w-72'
						>
							<CarouselContent>
								{loading
									? Array.from({ length: 4 }).map((_, index) => (
											<CarouselItem key={`skeleton-${index}`} className='gap-x-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
												<StructuralCardSkeleton />
											</CarouselItem>
										))
									: STRUCTURE.map((member, index) => (
											<CarouselItem key={member.name} className='gap-x-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
												<StructuralCard member={member} index={index} hovered={hovered} setHovered={setHovered} />
											</CarouselItem>
										))}
							</CarouselContent>
							<CarouselPrevious className='lg:hidden md:hidden text-primary hover:text-cit-secondary ml-3 flex' />
							<CarouselNext className='lg:hidden md:hidden text-primary hover:text-cit-secondary mr-3 flex' />

							<div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 place-items-between gap-3 lg:mt-5 md:mt-4 mt-2'>
								<div className='flex justify-center gap-2 items-center w-fit'>
									<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='lg:block md:block hidden text-primary hover:text-primary-dark' />
									<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='lg:block md:block hidden text-primary hover:text-primary-dark' />
								</div>

								<div className='flex items-center justify-center w-full'>
									<p className='text-center text-sm text-muted-foreground'>
										Slide {selectedIndex + 1} dari {scrollSnaps.length}
									</p>
								</div>

								<div className='hidden md:flex justify-end items-center -mr-1.5'>
									<div className='flex flex-wrap items-center gap-1.5'>
										{scrollSnaps.map((_, index) => (
											<DotButton
												key={index}
												onClick={() => onDotButtonClick(index)}
												className={clsx('w-3 h-3 rounded-full transition-all duration-300', 'shadow-[inset_0_0_0_0.2rem_rgba(156,163,175)]', {
													'shadow-[inset_0_0_0_0.2rem_rgba(40,145,41,1)]': index === selectedIndex,
													'w-6': index === selectedIndex,
												})}
											/>
										))}
									</div>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
};

export default StructuralSection;
