'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/shadcn/carousel';
import { Progress } from '@/components/ui/shadcn/progress';
import { cn } from '@/lib/utils';

const bannerImages = [
	'/placeholder/carousel-placeholder.svg',
	'/placeholder/carousel-placeholder.svg',
	'/placeholder/carousel-placeholder.svg',
	'/placeholder/carousel-placeholder.svg',
	'/placeholder/carousel-placeholder.svg',
];

export default function BannerCarouselSection() {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	const progress = (current * 100) / count;

	const handleThumbClick = useCallback((index) => {
		api?.scrollTo(index);
	}, [api]);

	React.useEffect(() => {
		if (!api) return;

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		const onSelect = () => {
			setCurrent(api.selectedScrollSnap());
		};

		api.on('select', onSelect);
		onSelect();

		// Auto-play functionality
		const autoplay = setInterval(() => {
			api.scrollNext();
		}, 6000);

		return () => {
			api.off('select', onSelect);
			clearInterval(autoplay);
		};
	}, [api]);

	return (
		<section className='w-full relative'>
			{/* Main Carousel */}
			<div className='w-full'>
				<Carousel
					setApi={setApi}
					opts={{
						align: 'center',
						loop: true,
					}}
					className='w-full relative bg-transparent'
				>
					<CarouselContent className='-ml-1 md:-ml-2 lg:-ml-4'>
						{bannerImages.map((image, index) => {
							const isActive = current === index;
							return (
								<CarouselItem key={index} className='pl-1 md:pl-2 lg:pl-4 basis-full sm:basis-4/5 md:basis-4/5 lg:basis-3/4'>
									<div className='p-0.5 md:p-1'>
										<Card className={cn(
											'border-none shadow-xl md:shadow-2xl rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 transform bg-transparent',
											isActive ? 'scale-100 sm:scale-105 opacity-100' : 'scale-95 sm:scale-95 opacity-80'
										)}>
											<CardContent className='relative h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] p-0 overflow-hidden bg-transparent'>
												{/* Background Image */}
												<div className='absolute inset-0'>
													<Image
														src={image}
														alt={`Banner ${index + 1}`}
														fill
														className={cn(
															'object-cover transition-transform duration-700',
															isActive ? 'scale-110' : 'scale-100'
														)}
														priority={index === 0}
													/>
													{/* Dynamic Overlay */}
													<div className={cn(
														'absolute inset-0 transition-all duration-500',
														isActive 
															? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent' 
															: 'bg-black/60'
													)}></div>
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>
				</Carousel>

				{/* Thumbnails Carousel - Hidden on Mobile */}
				<div className='hidden md:block mt-6 md:mt-8 px-4'>
					<Carousel className='w-full max-w-4xl mx-auto bg-transparent'>
						<CarouselContent className='flex ml-0 py-2'>
							{bannerImages.map((image, index) => (
								<CarouselItem
									key={index}
									className={cn(
										'basis-1/5 cursor-pointer px-2 transition-all duration-300',
										current === index ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-80 scale-95'
									)}
									onClick={() => handleThumbClick(index)}
								>
									<Card className={cn(
										'border-2 rounded-lg overflow-hidden transition-all duration-300 shadow-lg bg-transparent',
										current === index 
											? 'border-cit-main shadow-cit-main/20' 
											: 'border-transparent hover:border-gray-300'
									)}>
										<CardContent className='p-0 relative aspect-video bg-transparent'>
											<Image
												src={image}
												alt={`Banner ${index + 1}`}
												fill
												className='object-cover'
											/>
											<div className={cn(
												'absolute inset-0 transition-all duration-300',
												current === index 
													? 'bg-cit-main/20' 
													: 'bg-black/40 hover:bg-black/20'
											)}></div>
											{/* Indicator */}
											{current === index && (
												<div className='absolute inset-0 flex items-center justify-center'>
													<div className='w-3 h-3 bg-cit-main rounded-full animate-pulse'></div>
												</div>
											)}
											{/* Slide Number */}
											<div className='absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded'>
												{index + 1}
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>

				{/* Progress Bar */}
				<div className='flex justify-center mt-4 md:mt-6'>
					<Progress value={(current + 1) * (100 / count)} className="w-32 md:w-40" />
				</div>
			</div>
		</section>
	);
}
