import { Card, CardContent } from '@/components/ui/shadcn/card';

function NewsLatestCardSkeleton() {
	return (
		<div className='w-full'>
			<div className='items-center justify-center flex flex-col lg:hidden md:hidden w-full'>
				<div className='w-full max-w-72 animate-pulse'>
					<Card className='w-full'>
						<CardContent className='p-0'>
							<div className='h-52 w-full bg-gray-200 rounded-t-lg' />
							<div className='flex flex-col p-4 gap-y-4 w-full'>
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-x-1 max-w-32'>
										<div className='w-6 h-6 rounded-full bg-gray-200' />
										<div className='h-4 w-16 bg-gray-200 rounded' />
									</div>
									<div className='flex items-center gap-x-1'>
										<div className='h-4 w-4 bg-gray-200 rounded' />
										<div className='h-4 w-16 bg-gray-200 rounded' />
									</div>
								</div>

								<div className='flex flex-col items-start justify-center gap-y-2 h-24'>
									<div className='h-5 w-3/4 bg-gray-200 rounded' />
									<div className='h-4 w-full bg-gray-200 rounded' />
									<div className='h-4 w-5/6 bg-gray-200 rounded' />
									<div className='h-4 w-3/4 bg-gray-200 rounded' />
								</div>

								<div className='h-8 w-full bg-gray-200 rounded' />
							</div>
						</CardContent>
					</Card>
				</div>

				<div className='py-2 text-center'>
					<div className='h-4 w-16 mx-auto bg-gray-200 rounded' />
				</div>
			</div>

			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full font-['Poppins'] animate-pulse">
				{Array.from({ length: 6 }).map((_, index) => (
					<div key={index} className='flex flex-col items-center rounded-lg bg-white shadow-md overflow-hidden'>
						<div className='w-full h-52 bg-gray-200 rounded-t-lg' />
						<div className='flex flex-col items-start justify-between p-3 gap-y-4 w-full'>
							<div className='flex justify-between items-center w-full'>
								<div className='flex items-center gap-x-1 max-w-28'>
									<div className='w-6 h-6 rounded-full bg-gray-200' />
									<div className='h-4 w-16 bg-gray-200 rounded' />
								</div>
								<div className='flex items-center gap-x-1'>
									<div className='h-4 w-4 bg-gray-200 rounded' />
									<div className='h-4 w-16 bg-gray-200 rounded' />
								</div>
							</div>

							<div className='flex flex-col gap-y-2 h-24'>
								<div className='h-5 w-3/4 bg-gray-200 rounded' />
								<div className='h-4 w-full bg-gray-200 rounded' />
								<div className='h-4 w-5/6 bg-gray-200 rounded' />
								<div className='h-4 w-3/4 bg-gray-200 rounded' />
							</div>

							<div className='h-10 w-full bg-gray-200 rounded' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export { NewsLatestCardSkeleton };
