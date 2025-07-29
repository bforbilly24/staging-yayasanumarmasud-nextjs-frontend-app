'use client';

import { Skeleton } from '@/components/ui/shadcn/skeleton';
import { cn } from '@/lib/utils';

function StructureCardSkeleton() {
	return (
		<div className='lg:max-w-xs md:max-w-full max-w-full w-full flex-1 min-w-0'>
			<div className={cn('overflow-hidden relative h-[26rem] rounded-md shadow-xl mx-auto flex flex-col justify-between p-4')}>
				<Skeleton className='absolute w-full h-full top-0 left-0 bg-gray-200' />
				<div className='flex flex-row items-center space-x-4 z-10'>
					<Skeleton className='h-10 w-10 rounded-full bg-gray-300' />
					<div className='flex flex-col gap-y-2'>
						<Skeleton className='h-5 w-40 bg-gray-300' />
						<Skeleton className='h-4 w-24 bg-gray-300' />
					</div>
				</div>
				<div className='z-10'>
					<Skeleton className='h-6 w-48 bg-gray-300' />
				</div>
			</div>
		</div>
	);
}

function StructureCardGridSkeleton({ count = 4 }) {
	return (
		<div className='space-y-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
				{Array.from({ length: count }).map((_, index) => (
					<div key={index} className='flex items-start gap-4'>
						<Skeleton className='rounded-lg size-20 bg-gray-200' />
						<div className='flex flex-col gap-y-2'>
							<Skeleton className='h-5 w-32 bg-gray-200' />
							<Skeleton className='h-4 w-24 bg-gray-200' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export { StructureCardSkeleton, StructureCardGridSkeleton };
