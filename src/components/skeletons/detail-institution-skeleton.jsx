'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/shadcn/card';
import { Skeleton } from '@/components/ui/shadcn/skeleton';

const DetailInstitutionSkeleton = () => {
	return (
		<>
			<div className='h-48 bg-gray-200' />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 font-['Poppins']">
				<div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
					<div className='lg:col-span-2 lg:space-y-6 md:space-y-5 space-y-4'>
						<Card className='overflow-hidden'>
							<div className='relative h-48 lg:h-80 md:h-64 w-full'>
								<Skeleton className='h-full w-full bg-gray-300' />
							</div>
							<CardContent className='relative px-6'>
								<div className='absolute lg:-top-32 md:-top-32 -top-24 left-6'>
									<Skeleton className='lg:size-28 md:size-28 size-20 rounded-full bg-gray-300' />
								</div>
								<div className='lg:mt-16 md:mt-16 mt-12'>
									<Skeleton className='h-6 w-32 bg-gray-300 mb-2' />
									<Skeleton className='h-8 w-48 bg-gray-300' />
								</div>
							</CardContent>
						</Card>

						<Card className='py-6'>
							<CardHeader className='py-0'>
								<Skeleton className='h-6 w-32 bg-gray-300' />
							</CardHeader>
							<CardContent className='py-0 mt-4'>
								<div className='space-y-2'>
									<Skeleton className='h-4 w-full bg-gray-300' />
									<Skeleton className='h-4 w-3/4 bg-gray-300' />
									<Skeleton className='h-4 w-1/2 bg-gray-300' />
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Skeleton className='h-6 w-24 bg-gray-300' />
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									{Array.from({ length: 3 }).map((_, index) => (
										<div key={index} className='flex items-center gap-y-5'>
											<Skeleton className='h-10 w-10 rounded-md bg-gray-300' />
											<div className='flex flex-col items-start justify-center gap-y-1 ml-4'>
												<Skeleton className='h-4 w-24 bg-gray-300' />
												<Skeleton className='h-4 w-32 bg-gray-300' />
											</div>
										</div>
									))}
									<div className='flex justify-center mt-6'>
										<Skeleton className='h-10 w-32 bg-gray-300 rounded-md' />
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Skeleton className='h-6 w-40 bg-gray-300' />
							</CardHeader>
							<CardContent>
								<div className='space-y-6'>
									{Array.from({ length: 3 }).map((_, index) => (
										<div key={index} className='flex items-start gap-4'>
											<Skeleton className='h-20 w-20 rounded-lg bg-gray-300' />
											<div className='space-y-2'>
												<Skeleton className='h-4 w-32 bg-gray-300' />
												<Skeleton className='h-4 w-24 bg-gray-300' />
											</div>
										</div>
									))}
									<div className='flex justify-center mt-6'>
										<Skeleton className='h-10 w-32 bg-gray-300 rounded-md' />
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className='lg:col-span-1'>
						<Card>
							<CardHeader>
								<Skeleton className='h-6 w-32 bg-gray-300' />
							</CardHeader>
							<CardContent className='space-y-4 p-4'>
								{Array.from({ length: 3 }).map((_, index) => (
									<div key={index} className='flex flex-row items-center justify-center gap-x-2 rounded-lg p-0'>
										<Skeleton className='h-24 w-3/4 min-w-[80px] md:h-24 md:w-full lg:h-20 lg:w-1/4 rounded-md bg-gray-300' />
										<div className='p-0 flex h-fit w-full flex-col items-center justify-between gap-y-1 px-0 md:w-full md:gap-y-1 lg:w-2/3 lg:gap-y-2'>
											<div className='flex w-full flex-col items-start justify-center gap-y-2'>
												<div className='flex w-full flex-row items-center justify-between'>
													<div className='items-center gap-x-1 flex flex-row max-w-full'>
														<Skeleton className='size-4 rounded-full bg-gray-300' />
														<Skeleton className='h-4 w-24 bg-gray-300' />
													</div>
												</div>
											</div>
											<div className='flex h-12 w-full flex-col gap-y-1'>
												<Skeleton className='h-5 w-32 bg-gray-300' />
											</div>
										</div>
									</div>
								))}
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export { DetailInstitutionSkeleton };
