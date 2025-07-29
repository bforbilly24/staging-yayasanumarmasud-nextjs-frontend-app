'use client';

import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';

function HeroSkeleton() {
	return (
		<Section id={'hero'} className='inline-flex h-ful] w-full flex-col items-center justify-center'>
			<div className='z-10 inline-flex w-full flex-col items-center justify-center lg:gap-y-8 md:gap-y-6 gap-y-4'>
				<MaxWidthWrapper className={'overflow-hidden'}>
					<div className='flex space-x-4 animate-pulse'>
						{Array.from({ length: 5 }).map((_, index) => (
							<div key={index} className='lg:size-52 md:size-52 size-36'>
								<div className='flex flex-col items-center lg:p-6 md:p-6 p-4'>
									<div className='lg:size-20 md:size-16 size-12 rounded-full bg-gray-300/50 border border-white/50' />
								</div>
								<div className='flex flex-col items-center text-center lg:px-6 md:px-4 px-3 pb-4'>
									<div className='h-3 lg:w-3/4 md:w-2/3 w-3/4 bg-gray-300/50 rounded' />
								</div>
							</div>
						))}
					</div>
				</MaxWidthWrapper>
			</div>
		</Section>
	);
}

export default HeroSkeleton;
