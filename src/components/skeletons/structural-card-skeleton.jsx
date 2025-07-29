'use client';

import { Skeleton } from '@/components/ui/shadcn/skeleton';
import { cn } from '@/lib/utils';

const StructuralCardSkeleton = () => {
	return (
		<div className={cn('lg:max-w-xs md:max-w-full max-w-full w-full flex-1 min-w-0', 'rounded-md overflow-hidden transition-all duration-300 ease-out')}>
			<div className={cn('relative card h-96 shadow-xl mx-auto flex flex-col justify-between p-4')}>
				<Skeleton className='absolute inset-0 z-0 h-full w-full rounded-md bg-gray-200' />

				<div className='absolute w-full h-full top-0 left-0 bg-black opacity-60 z-10' />

				<div className='flex flex-row items-center space-x-4 z-20'>
					<Skeleton className='rounded-full border-2 size-10 bg-gray-300' />
					<div className='flex flex-col space-y-2'>
						<Skeleton className='h-4 w-32 bg-gray-300' />
						<Skeleton className='h-3 w-24 bg-gray-300' />
					</div>
				</div>

				<div className='text content z-20 space-y-4'>
					<Skeleton className='h-6 w-3/4 bg-gray-300' />
					<Skeleton className='h-4 w-full bg-gray-300' />
					<Skeleton className='h-4 w-5/6 bg-gray-300' />
					<Skeleton className='h-4 w-2/3 bg-gray-300' />
					<Skeleton className='h-10 w-full bg-gray-300 rounded-md' />
				</div>
			</div>
		</div>
	);
};

export { StructuralCardSkeleton };
