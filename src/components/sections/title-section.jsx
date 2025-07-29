import { ChevronRight } from 'lucide-react';

function TitleSection({ title = 'title', content = 'content', onClick, data, showButton = true }) {
	return (
		<div className='font-["Poppins"] flex-row flex w-full items-start justify-between border-b border-gray-200'>
			<div className='flex w-fit flex-col items-start justify-start border-b-2 border-cit-secondary pb-2'>
				<h5 className='font-bold capitalize text-lg text-primary'>{title}</h5>
				<p className='text-sm font-light text-primary/80'>{content}</p>
			</div>

			{showButton && (
				<div className='flex flex-row items-center justify-center'>
					{data && data.length > 0 ? (
						<button onClick={onClick} className='flex flex-row items-center w-full gap-x-1'>
							<p className='lg:mt-0 md:mt-0 mt-2 text-sm font-normal text-primary'>Lainnya</p>
							<ChevronRight className='size-4 text-primary' />
						</button>
					) : (
						<p className='text-sm font-normal text-primary'></p>
					)}
				</div>
			)}
		</div>
	);
}

export { TitleSection };
