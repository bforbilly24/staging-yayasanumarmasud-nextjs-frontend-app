'use client';

import { Card, CardContent } from '@/components/ui/shadcn/card';

function AchievementCardSkeleton() {
	return (
		<Card className='flex flex-row lg:flex-col md:flex-col items-start rounded-lg bg-white shadow-md overflow-hidden w-full p-2 lg:p-0 md:p-0'>
			<div className='relative w-1/3 lg:w-full md:w-full h-32 lg:h-52 md:h-40 bg-gray-200 rounded-t-lg lg:rounded-b-none md:rounded-b-none rounded-b-lg animate-pulse' />

			<CardContent className='flex flex-col w-2/3 lg:w-full md:w-full p-3 lg:p-4 md:p-4 gap-y-2'>
				<div className='flex flex-row justify-between items-center w-full'>
					<div className='flex items-center gap-x-1 max-w-20 lg:max-w-32 md:max-w-32'>
						<div className='rounded-full bg-gray-200 size-6 lg:size-6 md:size-6 animate-pulse' />
						<div className='h-4 w-16 bg-gray-200 rounded animate-pulse' />
					</div>
					<div className='flex items-center gap-x-1'>
						<div className='h-4 w-4 bg-gray-200 rounded animate-pulse' />
						<div className='h-4 w-16 bg-gray-200 rounded animate-pulse' />
					</div>
				</div>

				<div className='flex flex-col lg:gap-y-2 md:gap-y-2 gap-y-1 lg:h-28 md:h-24 h-20 w-full'>
					<div className='h-5 w-3/4 bg-gray-200 rounded animate-pulse' />
					<div className='h-4 w-full bg-gray-200 rounded animate-pulse' />
					<div className='h-4 w-5/6 bg-gray-200 rounded animate-pulse' />
					<div className='hidden lg:block md:block h-4 w-3/4 bg-gray-200 rounded animate-pulse' />
				</div>

				<div className='hidden md:block h-8 lg:h-9 md:h-9 w-full bg-gray-200 rounded animate-pulse' />
			</CardContent>
		</Card>
	);
}

export { AchievementCardSkeleton };
