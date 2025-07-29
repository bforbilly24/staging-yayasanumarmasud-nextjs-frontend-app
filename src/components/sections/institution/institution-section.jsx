'use client';

import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useMemo, useState } from 'react';
import { InstitutionCard } from '@/components/cards/institution-card';
import { ContainerBanner } from '@/components/container/container-banner';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { InstitutionCardSkeleton } from '@/components/skeletons/instituion-card-skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/shadcn/carousel';
import { LISTINSTITUTION } from '@/constants/list-institution';
import { generateSlug } from '@/utils/generate-slug';

function InstitutionSection() {
	const [institutions, setInstitutions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [api, setApi] = useState(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInstitutions(LISTINSTITUTION);
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const carouselInstitutions = useMemo(() => institutions, [institutions]);

	const handleMouseEnter = () => {
		if (api && api.plugins().autoplay) {
			api.plugins().autoplay.stop();
		}
	};

	const handleMouseLeave = () => {
		if (api && api.plugins().autoplay) {
			api.plugins().autoplay.play();
		}
	};

	return (
		<>
			<ContainerBanner upperCamelCase={true} />
			<MaxWidthWrapper>
				<Section id='lembaga' className='font-["Poppins"] group'>
					<div className='max-w-7xl mx-auto'>
						{isLoading ? (
							<Carousel className='w-full'>
								<CarouselContent className='-ml-4'>
									{Array.from({ length: 4 }).map((_, index) => (
										<CarouselItem key={index} className='pl-4 basis-full md:basis-1/3 lg:basis-1/4'>
											<InstitutionCardSkeleton />
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						) : (
							<Carousel
								setApi={setApi}
								plugins={[
									Autoplay({
										delay: 2000,
										stopOnInteraction: false,
										playOnInit: true,
										stopOnLastSnap: false,
									}),
								]}
								className='w-full'
								opts={{
									align: 'start',
									loop: true,
									breakpoints: {
										'(min-width: 0px)': { slidesToScroll: 1, slidesPerView: 1 },
										'(min-width: 768px)': { slidesToScroll: 3, slidesPerView: 3 },
										'(min-width: 1024px)': { slidesToScroll: 4, slidesPerView: 4 },
									},
								}}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<CarouselContent className='-ml-4'>
									{carouselInstitutions.map((item) => (
										<CarouselItem key={item.id} className='pl-4 basis-full md:basis-1/3 lg:basis-1/4'>
											<InstitutionCard item={{ ...item, slug: generateSlug(item.name) }} />
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className='hidden md:flex ml-8 group-hover:scale-100 scale-0' />
								<CarouselNext className='hidden md:flex mr-8 group-hover:scale-100 scale-0' />
							</Carousel>
						)}
					</div>
				</Section>
			</MaxWidthWrapper>
		</>
	);
}

export default InstitutionSection;
