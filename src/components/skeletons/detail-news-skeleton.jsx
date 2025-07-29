'use client';

import { CircleUser, Clock } from 'lucide-react';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Card, CardContent } from '@/components/ui/shadcn/card';

function DetailNewsSkeleton() {
	return (
		<MaxWidthWrapper>
			<div className="w-full gap-y-10 font-['Poppins']">
				<main className='w-full'>
					<article className='w-full'>
						<header className='mb-8'>
							<div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm animate-pulse'>
								<div className='rounded-full border border-gray-300 bg-gray-200 lg:size-11 md:size-9 size-8' />
								<div className='flex-1'>
									<div className='h-5 w-32 bg-gray-200 rounded mb-2' />
									<div className='h-4 w-24 bg-gray-200 rounded' />
								</div>
							</div>

							<div className='mt-6 h-8 w-3/4 bg-gray-200 rounded' />
						</header>

						<div className='relative w-full max-h-[40rem] h-full bg-gray-200 rounded-lg shadow-lg animate-pulse' />

						<div className='mt-6 space-y-3'>
							<div className='h-4 w-full bg-gray-200 rounded' />
							<div className='h-4 w-5/6 bg-gray-200 rounded' />
							<div className='h-4 w-4/5 bg-gray-200 rounded' />
							<div className='h-4 w-3/4 bg-gray-200 rounded' />
						</div>
					</article>
				</main>

				<div className='pt-12 w-full'>
					<h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>Berita Terkait</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
						{Array.from({ length: 4 }).map((_, index) => (
							<Card key={index} className='flex flex-row lg:flex-col md:flex-col items-start rounded-lg bg-white shadow-md overflow-hidden w-full p-2 lg:p-0 md:p-0 animate-pulse'>
								<div className='relative w-1/3 lg:w-full md:w-full h-full lg:h-52 md:h-40 bg-gray-200 rounded-t-lg lg:rounded-b-none md:rounded-b-none rounded-b-lg' />

								<CardContent className='flex flex-col w-2/3 lg:w-full md:w-full p-3 lg:p-4 md:p-4 gap-y-2'>
									<div className='flex flex-row justify-between items-center w-full'>
										<div className='flex items-center gap-x-1 max-w-20 lg:max-w-32 md:max-w-32'>
											<div className='rounded-full border border-gray-300 bg-gray-200 size-6 lg:size-6 md:size-6' />
											<div className='h-4 w-16 bg-gray-200 rounded' />
										</div>
										<div className='flex items-center gap-x-1'>
											<Clock className='text-gray-400 size-4' />
											<div className='h-4 w-16 bg-gray-200 rounded' />
										</div>
									</div>

									<div className='flex flex-col lg:gap-y-2 md:gap-y-2 gap-y-1 lg:h-28 md:h-24 h-20 w-full'>
										<div className='h-5 w-3/4 bg-gray-200 rounded' />
										<div className='h-4 w-full bg-gray-200 rounded' />
										<div className='h-4 w-5/6 bg-gray-200 rounded' />
										<div className='hidden lg:block md:block h-4 w-3/4 bg-gray-200 rounded' />
									</div>

									<div className='hidden md:block h-8 lg:h-9 md:h-9 w-full bg-gray-200 rounded' />
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
}

export default DetailNewsSkeleton;
