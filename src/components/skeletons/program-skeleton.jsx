const ProgramsSkeleton = () => (
	<div className='inline-flex h-fit w-full flex-col items-center justify-start bg-white rounded-md shadow-md p-4 animate-pulse'>
		<ul className='w-full space-y-4'>
			{Array.from({ length: 3 }).map((_, index) => (
				<li key={index} className='relative flex flex-col items-start justify-center pl-6'>
					<div className={`absolute h-full left-1.5 top-0 w-px bg-gray-200 ${index === 0 ? 'top-0' : ''}`} />
					<div className='absolute left-0 top-5 -translate-y-1/2 h-3 w-3 rounded-full bg-gray-200' />
					<div className='flex flex-col gap-y-2 py-2 w-full'>
						<div className='flex flex-row justify-between items-center w-full'>
							<div className='h-4 w-3/5 bg-gray-200 rounded' />
							<div className='h-3 w-1/4 bg-gray-200 rounded' />
						</div>
						<div className='h-3 w-4/5 bg-gray-200 rounded' />
						<div className='h-3 w-3/4 bg-gray-200 rounded' />
					</div>
				</li>
			))}
		</ul>
	</div>
);

export { ProgramsSkeleton };
