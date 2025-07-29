'use client';

import Image from 'next/image';
import { ImageUrl } from '@/lib/image-url';
import { cn } from '@/lib/utils';

function StructureInstitutionCard({ structure }) {
	return (
		<div className='lg:max-w-xs md:max-w-full max-w-full w-full group/card flex-1 min-w-0'>
			<div className={cn('overflow-hidden relative card h-[26rem] rounded-md shadow-xl mx-auto flex flex-col justify-between p-4', 'bg-cover transition duration-300 group-hover/card:shadow-2xl')} style={{ backgroundImage: `url(${ImageUrl(structure.profile, 'structure')})` }}>
				<div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60' />
				<div className='flex flex-row items-center space-x-4 z-10'>
					<Image height={40} width={40} alt={`${structure.schoolName} icon`} src={ImageUrl(structure.icon, 'icon')} className='h-10 w-10 rounded-full border-2 object-contain bg-white' onError={(e) => console.log('Profile image failed to load:', structure.schoolName, e)} />
					<div className='flex flex-col'>
						<p className='font-normal line-clamp-1 max-w-52 text-base text-gray-50 relative z-10'>{structure.schoolName}</p>
						<p className='text-xs text-gray-100 line-clamp-1'>{structure.tag}</p>
					</div>
				</div>
				<div className='z-10'>
					<h1 className='font-bold text-lg line-clamp-3 md:text-xl text-gray-50 relative'>{structure.name}</h1>
				</div>
			</div>
		</div>
	);
}

export { StructureInstitutionCard };
