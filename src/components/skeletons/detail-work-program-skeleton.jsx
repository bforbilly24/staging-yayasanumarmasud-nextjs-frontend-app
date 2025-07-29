import { ContainerBanner } from '@/components/container/container-banner';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';

function DetailWorkProgramSkeleton() {
	return (
		<>
			<MaxWidthWrapper>
				<article className="max-w-3xl flex flex-col items-center justify-center px-6 mx-auto font-['Poppins'] animate-pulse">
					<div className='max-w-96 w-full h-64 sm:h-80 lg:h-96 relative overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-gray-200' />

					<header className='mt-4 sm:mt-6 flex flex-col items-center justify-center'>
						<div className='h-4 w-24 bg-gray-200 rounded' />
						<div className='max-w-lg mt-6 w-full h-6 sm:h-8 lg:h-10 bg-gray-200 rounded' />
					</header>

					<div className='max-w-lg mt-4 sm:mt-6 lg:mt-6 space-y-3'>
						<div className='h-4 w-full bg-gray-200 rounded' />
						<div className='h-4 w-5/6 bg-gray-200 rounded' />
						<div className='h-4 w-3/4 bg-gray-200 rounded' />
						<div className='h-4 w-4/5 bg-gray-200 rounded' />
						<div className='h-4 w-2/3 bg-gray-200 rounded' />
					</div>

					<div className='mt-6 flex items-center justify-center gap-2'>
						<div className='h-8 w-8 bg-gray-200 rounded' />
						<div className='h-4 w-16 bg-gray-200 rounded' />
						<div className='h-8 w-8 bg-gray-200 rounded' />
					</div>
				</article>
			</MaxWidthWrapper>
		</>
	);
}

export default DetailWorkProgramSkeleton;
