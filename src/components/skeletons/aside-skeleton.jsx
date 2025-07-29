// 'use client';

// function AsideSkeleton() {
// 	return (
// 		<aside id='aside' className='font-["Poppins"] flex lg:max-w-80 md:max-w-72 flex-col items-start justify-start gap-y-8 max-w-full'>
// 			<div className='inline-flex h-fit w-full flex-col items-start justify-start'>
// 				<div className='flex flex-col items-center justify-center gap-4 w-full'>
// 					<div className='w-full flex items-center justify-between'>
// 						<div className='h-6 w-1/2 bg-gray-200 rounded animate-pulse' />
// 						<div className='h-6 w-16 bg-gray-200 rounded animate-pulse' />
// 					</div>
// 					<div className='inline-flex h-fit w-full flex-col items-center justify-start bg-white rounded-md shadow-md p-4'>
// 						<ul className='w-full'>
// 							{Array.from({ length: 3 }).map((_, index) => (
// 								<li key={index} className='relative flex flex-col items-start justify-center pl-6 animate-pulse'>
// 									<div className={`absolute h-full left-1.5 top-0 w-px bg-gray-200 ${index === 0 ? 'top-0' : ''}`} />

// 									<div className='absolute left-0 top-5 -translate-y-1/2 h-3 w-3 rounded-full bg-gray-200' />

// 									<div className='flex flex-col gap-y-2 py-2 w-full'>
// 										<div className='flex flex-row justify-between items-center w-full'>
// 											<div className='h-4 w-32 bg-gray-200 rounded' />
// 											<div className='h-4 w-16 bg-gray-200 rounded' />
// 										</div>
// 										<div className='h-4 w-5/6 bg-gray-200 rounded' />
// 										<div className='h-4 w-3/4 bg-gray-200 rounded' />
// 									</div>
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='flex h-fit w-full flex-col'>
// 				<div className='flex flex-col items-center justify-center w-full gap-y-4'>
// 					<div className='w-full flex items-center justify-between'>
// 						<div className='h-6 w-1/2 bg-gray-200 rounded animate-pulse' />
// 						<div className='h-6 w-16 bg-gray-200 rounded animate-pulse' />
// 					</div>
// 					<div className='flex w-full max-w-72 bg-white rounded-lg shadow-md p-0'>
// 						<div className='w-full animate-pulse'>
// 							<div className='h-52 w-full bg-gray-200 rounded-t-lg' />

// 							<div className='flex flex-col p-4 gap-y-4 w-full'>
// 								<div className='flex justify-between items-center'>
// 									<div className='flex items-center gap-x-1 max-w-32'>
// 										<div className='w-6 h-6 rounded-full bg-gray-200' />
// 										<div className='h-4 w-16 bg-gray-200 rounded' />
// 									</div>
// 									<div className='flex items-center gap-x-1'>
// 										<div className='h-4 w-4 bg-gray-200 rounded' />
// 										<div className='h-4 w-16 bg-gray-200 rounded' />
// 									</div>
// 								</div>

// 								<div className='flex flex-col gap-y-2 h-24'>
// 									<div className='h-5 w-3/4 bg-gray-200 rounded' />
// 									<div className='h-4 w-full bg-gray-200 rounded' />
// 									<div className='h-4 w-5/6 bg-gray-200 rounded' />
// 									<div className='h-4 w-3/4 bg-gray-200 rounded' />
// 								</div>

// 								<div className='h-10 w-full bg-gray-200 rounded' />
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</aside>
// 	);
// }

// export default AsideSkeleton;
