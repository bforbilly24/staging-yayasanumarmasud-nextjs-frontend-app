'use client';

function DocumentationSkeleton() {
	return (
		<div className='flex flex-col items-center gap-y-6 font-["Poppins"] h-full mx-auto w-full max-w-full'>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
				{[0, 1, 2, 3].map((colIndex) => (
					<div key={colIndex} className='grid gap-4'>
						{Array.from({ length: 2 }).map((_, index) => (
							<div key={index} className='relative overflow-hidden rounded-lg bg-gray-200 animate-pulse' style={{ paddingTop: '100%' }}>
								<div className='absolute inset-0 bg-gray-200 rounded-lg' />
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default DocumentationSkeleton;
