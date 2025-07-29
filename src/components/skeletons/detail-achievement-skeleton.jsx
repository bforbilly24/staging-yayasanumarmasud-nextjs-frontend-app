'use client';

import { CircleUser, Clock } from 'lucide-react';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Card, CardContent } from '@/components/ui/shadcn/card';

function DetailAchievementSkeleton() {
	return (
		<>
			<div className='relative w-full h-64 bg-gray-200 animate-pulse'>
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='h-10 w-1/2 bg-gray-300 rounded' />
				</div>
			</div>

			<MaxWidthWrapper>
				<div className="w-full gap-y-10 font-['Poppins']">
					<main className='w-full'>
						<article className='w-full'>
							<header className='mb-8'>
								<div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm animate-pulse'>
									<div className='rounded-full border border-gray-300 bg-gray-200 h-12 w-12' />
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
						<h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>Prestasi Terkait</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
							{Array.from({ length: 4 }).map((_, index) => (
								<Card key={index} className='flex flex-row lg:flex-col md:flex-col items-start rounded-lg bg-white shadow-md overflow-hidden animate-pulse'>
									<div className='relative w-1/3 h-full lg:w-full md:w-full lg:h-40 md:h-40 min-w-[120px] bg-gray-200 rounded-t-lg lg:rounded-b-none md:rounded-b-none rounded-b-lg' />

									<CardContent className='flex flex-col p-3 gap-y-2 w-2/3 lg:w-full md:w-full'>
										<div className='hidden sm:flex justify-between items-center w-full'>
											<div className='flex items-center gap-x-1 max-w-32'>
												<div className='rounded-full border border-gray-300 bg-gray-200 h-5 w-5' />
												<div className='h-4 w-20 bg-gray-200 rounded' />
											</div>
											<div className='flex items-center gap-x-1'>
												<Clock className='text-gray-400 h-3 w-3' />
												<div className='h-3 w-16 bg-gray-200 rounded' />
											</div>
										</div>

										<div className='sm:hidden flex items-center gap-x-1 w-full'>
											<Clock className='text-gray-400 h-4 w-4' />
											<div className='h-4 w-16 bg-gray-200 rounded' />
										</div>

										<div className='lg:mt-0 md:mt-0 mt-2 flex flex-col gap-y-2 lg:h-24 md:h-24 h-16'>
											<div className='h-5 w-3/4 bg-gray-200 rounded lg:h-6 md:h-6' />
											<div className='h-4 w-full bg-gray-200 rounded' />
											<div className='h-4 w-5/6 bg-gray-200 rounded lg:hidden md:hidden' />
											<div className='h-4 w-2/3 bg-gray-200 rounded hidden lg:block md:block' />
										</div>

										<div className='sm:hidden flex items-center justify-start w-full'>
											<div className='rounded-full border border-gray-300 bg-gray-200 h-6 w-6' />
											<div className='h-4 w-20 bg-gray-200 rounded ml-1' />
										</div>

										<div className='h-8 w-full bg-gray-200 rounded mt-2' />
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</>
	);
}

export default DetailAchievementSkeleton;
