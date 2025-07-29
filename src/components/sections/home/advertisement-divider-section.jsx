'use client';

import { BookOpenText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { buttonVariants } from '@/components/ui/shadcn/button';
import { cn } from '@/lib/utils';

const AdvertisementDividerSection = () => {
	return (
		<Section id='divider' className='font-["Poppins"] lg:pt-20'>
			<MaxWidthWrapper className='relative flex w-full flex-col justify-center'>
				<div className='bg-gradient-to-b from-lime-500 to-green-700 pr-5 p-5 lg:p-0 lg:pr-5 rounded-lg relative flex flex-col lg:flex-row items-center gap-8 w-full h-full'>
					<Image width={400} height={400} src='/about.webp' alt='' className='absolute -left-16 bottom-0 hidden lg:block' />
					<div className='opacity-0 hidden lg:block w-[420px] h-[300px]'></div>
					<div className='gap-4 text-white text-base text-muted-foreground w-full h-fit flex flex-col text-justify'>
						<div className='font-bold'>Daftarkan Ananda di Yayasan Syech Maulana Umar Mas'ud</div>
						<p>
							Sejak tahun 1915 dengan nama MHO (Madrasah Hidayatul Oeloem), sebagai cikal bakal Yayasan Syech Maulana Umar Mas’ud yang saat ini memiliki 10 jenjang pendidikan yang terdiri dari KB-TK, MDU, MINU, SMP, MTs, SMA,MA, SMK dan Pondok Pesantren Tahfidul Qur’an Khairoh Ummah.
						</p>
						<p>Yayasan Syech Maulana Umar Mas’ud adalah pencetus dunia pendidikan di pulau Bawean yang telah dan siap mengantarkan anak-anak pulau menuju sukses.</p>
						<div className='h-full place-content-end'>
							<Link href={'/tentang-kami'} className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'w-fit text-base bg-white text-cit-secondary hover:bg-slate-100 flex gap-x-1 items-center justify-center')}>
								Baca Lebih Lanjut
								<BookOpenText className='size-4' />
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
};

export default AdvertisementDividerSection;
