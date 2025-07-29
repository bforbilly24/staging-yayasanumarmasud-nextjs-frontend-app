'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ImageUrl } from '@/lib/image-url';
import { cn } from '@/lib/utils';

const InstitutionCard = ({ item }) => {
	return (
		<div className='lg:max-w-xs md:max-w-full max-w-full w-full group/card flex-1 min-w-0'>
			<div className={cn('overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between p-4', 'bg-cover transition duration-300 group-hover/card:shadow-2xl')} style={{ backgroundImage: `url(${ImageUrl(item.school)})` }}>
				<div className='absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60' />

				<div className='flex flex-row items-center space-x-4 z-10'>
					<Image height={40} width={40} alt={`${item.name} icon`} src={ImageUrl(item.icon)} className='h-10 w-10 rounded-full border-2 object-contain bg-white' />
					<div className='flex flex-col'>
						<p className='font-normal line-clamp-1 text-base text-gray-50 relative z-10'>{item.name}</p>
						<p className='text-xs text-gray-100 line-clamp-1'>{item.data.headmaster}</p>
					</div>
				</div>

				<div className='text content z-10'>
					<h1 className='font-bold text-xl line-clamp-2 md:text-2xl text-gray-50 relative'>{item.name}</h1>
					<p className='font-normal text-sm line-clamp-3 text-gray-50 relative my-4'>{item.content}</p>
					<Link href={`/lembaga/${item.slug}`} className='flex items-center justify-center gap-x-1 px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-md text-sm font-medium transition-colors'>
						Detail Lengkap
						<ChevronRight className='size-5' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export { InstitutionCard };
