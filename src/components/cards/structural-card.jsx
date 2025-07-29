'use client';

import { BriefcaseBusiness, CalendarFold, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/shadcn/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/shadcn/dialog';
import { ImageUrl } from '@/lib/image-url';
import { cn } from '@/lib/utils';

const StructuralCard = ({ member, index, hovered, setHovered }) => {
	const memberImage = ImageUrl(member.image, 'structure');

	return (
		<div
			className={cn('lg:max-w-xs md:max-w-full max-w-full w-full group/card flex-1 min-w-0', 'rounded-md overflow-hidden transition-all duration-300 ease-out', hovered !== null && hovered !== index && 'md:blur-sm md:scale-[0.98]')}
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered(null)}
		>
			<div className={cn('relative card h-96 shadow-xl mx-auto flex flex-col justify-between p-4', 'transition duration-300 group-hover/card:shadow-md')}>
				<div className='absolute inset-0 z-0'>
					<Image src={memberImage} alt={member.name} fill className='object-cover' sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw' />
				</div>

				<div className='absolute w-full h-full top-0 left-0 bg-black opacity-60 transition duration-300 group-hover/card:opacity-0 z-10' />

				<div className='flex flex-row items-center space-x-4 z-20'>
					<Image width={20} height={20} alt='yayasan-syech-maulana-umar-masud' src={ImageUrl('/brand/logo.png', 'icon')} className='rounded-full border-2 size-10 bg-white p-1' />
					<div className='flex flex-col'>
						<p className='font-normal line-clamp-1 text-base text-gray-50 relative z-20'>Yayasan Syech Maulana Umar Mas'ud</p>
						<p className='text-xs text-gray-100 line-clamp-1'>{member.position}</p>
					</div>
				</div>

				<div className='text content z-20'>
					<h1 className='font-bold text-xl line-clamp-2 md:text-2xl text-gray-50'>{member.name}</h1>
					<div className='w-full flex items-center justify-start gap-x-1'>
						<CalendarFold className='h-4 w-4 text-gray-50 flex-shrink-0' />
						<span className='font-normal text-sm line-clamp-1 text-gray-50 relative my-4'>{member.bio || '-'}</span>
					</div>

					<Dialog>
						<DialogTrigger asChild>
							<Button variant={'default'} size={'lg'} className='bg-white hover:bg-white/90 text-gray-900 w-full flex items-center justify-center gap-x-1'>
								Lihat Detail
								<FolderOpen className='size-4' />
							</Button>
						</DialogTrigger>
						<DialogContent className='max-w-[90vw] sm:max-w-[425px] rounded-md font-["Poppins"]'>
							<DialogHeader>
								<DialogTitle className='text-center'>{member.name}</DialogTitle>
							</DialogHeader>
							<div className='flex flex-col items-center gap-4'>
								<div className='relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary'>
									<Image src={memberImage} alt={member.name} fill className='object-contain' />
								</div>
								<div className='text-center space-y-2'>
									<p className='text-base font-medium text-primary'>{member.position || 'Jabatan Kepengurusan tidak tersedia'}</p>
									<p className='text-sm text-muted-foreground'>{member.born || 'Tanggal lahir tidak tersedia'}</p>
								</div>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
};

export { StructuralCard };
