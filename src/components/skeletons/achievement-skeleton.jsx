const AchievementSkeleton = () => (
	<div className='flex w-full bg-white rounded-lg shadow-md p-0 animate-pulse'>
		<div className='w-full'>
			<div className='h-52 w-full bg-gray-200 rounded-t-lg' />
			<div className='flex flex-col p-4 gap-y-4 w-full'>
				<div className='flex justify-between items-center'>
					<div className='flex items-center gap-x-2'>
						<div className='w-6 h-6 rounded-full bg-gray-200' />
						<div className='h-4 w-20 bg-gray-200 rounded' />
					</div>
					<div className='flex items-center gap-x-2'>
						<div className='w-4 h-4 bg-gray-200 rounded' />
						<div className='h-3 w-16 bg-gray-200 rounded' />
					</div>
				</div>
				<div className='flex flex-col gap-y-2'>
					<div className='h-5 w-4/5 bg-gray-200 rounded' />
					<div className='h-4 w-full bg-gray-200 rounded' />
					<div className='h-4 w-5/6 bg-gray-200 rounded' />
				</div>
				<div className='h-10 w-full bg-gray-200 rounded' />
			</div>
		</div>
	</div>
);

export { AchievementSkeleton };
