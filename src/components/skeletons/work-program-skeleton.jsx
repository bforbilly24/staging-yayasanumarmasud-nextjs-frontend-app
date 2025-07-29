'use client';

import { Section } from '@/components/sections/section';

function WorkProgramSkeleton() {
	return (
		<Section id={'program-kerja'} className='flex flex-col justify-center items-center gap-y-8 font-["Poppins"] h-full mx-auto w-full max-w-full'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
				<div className='flex flex-col gap-y-6 w-full'>
					<div className='h-8 w-1/3 bg-gray-200 rounded animate-pulse' />
					<div className='flex flex-col border rounded-lg w-full p-2'>
						{Array.from({ length: 3 }).map((_, index) => (
							<div key={index} className='w-full mb-4 animate-pulse'>
								<div className='flex justify-between items-center px-2 py-3 rounded-lg'>
									<div className='h-6 w-1/4 bg-gray-200 rounded' />
									<div className='h-8 w-24 bg-gray-200 rounded' />
								</div>

								<table className='w-full overflow-hidden table-fixed'>
									<tbody>
										{Array.from({ length: 3 }).map((_, rowIndex) => (
											<tr key={rowIndex} className='border-b border-gray-300'>
												<td className='p-2 w-3/4'>
													<div className='h-4 w-5/6 bg-gray-200 rounded' />
												</td>
												<td className='p-2 w-1/4'>
													<div className='h-4 w-16 bg-gray-200 rounded ml-auto' />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						))}
					</div>
				</div>

				<div className='flex flex-col items-start gap-y-4 justify-start w-full'>
					<div className='h-8 w-1/2 bg-gray-200 rounded animate-pulse' />
					<div className='relative flex h-96 w-full overflow-hidden mt-4'>
						<div className='flex flex-col gap-y-4 w-full animate-pulse'>
							{Array.from({ length: 3 }).map((_, index) => (
								<div key={index} className='p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-300'>
									<div className='h-4 w-24 bg-gray-200 rounded mb-2' />
									<div className='h-5 w-3/4 bg-gray-200 rounded mb-2' />
									<div className='h-4 w-full bg-gray-200 rounded' />
									<div className='h-4 w-5/6 bg-gray-200 rounded mt-1' />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default WorkProgramSkeleton;
