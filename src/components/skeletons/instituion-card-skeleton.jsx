'use client';

import { Skeleton } from '@/components/ui/shadcn/skeleton';
import { cn } from '@/lib/utils';

const InstitutionCardSkeleton = () => {
	return (
		<div className='lg:max-w-xs md:max-w-full max-w-full w-full flex-1 min-w-0'>
			<div className={cn('overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4', 'bg-gray-200')}>
				<div className='absolute w-full h-full top-0 left-0 bg-gray-300 opacity-60' />

				<div className='flex flex-row items-center space-x-4 z-10'>
					<Skeleton className='h-10 w-10 rounded-full bg-gray-300' />
					<div className='flex flex-col space-y-2'>
						<Skeleton className='h-4 w-32 bg-gray-300' />
						<Skeleton className='h-3 w-24 bg-gray-300' />
					</div>
				</div>

				<div className='text content z-10 space-y-4'>
					<Skeleton className='h-6 w-48 bg-gray-300' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-full bg-gray-300' />
						<Skeleton className='h-4 w-3/4 bg-gray-300' />
						<Skeleton className='h-4 w-1/2 bg-gray-300' />
					</div>
					<Skeleton className='h-10 w-32 bg-gray-300 rounded-md' />
				</div>
			</div>
		</div>
	);
};

export { InstitutionCardSkeleton };
