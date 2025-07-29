'use client';

import { House } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { Button } from '@/components/ui/shadcn/button';

export default function NotFound() {
	const router = useRouter();

	return (
		<MaxWidthWrapper>
			<Section id='not-found' className={'font-["Poppins"]'}>
				<div className='container min-h-screen px-6 py-12 mx-auto lg:flex-row md:flex-row flex flex-col items-center justify-center lg:items-center lg:gap-12'>
					<div className='w-full lg:w-1/2'>
						<p className='text-sm font-medium text-red-600'>404 error</p>
						<h1 className='mt-3 text-2xl font-semibold text-gray-800 md:text-3xl'>Halaman tidak ditemukan</h1>
						<p className='mt-4 text-gray-500'>Maaf, halaman yang Anda cari tidak ada. Berikut beberapa tautan yang bermanfaat:</p>

						<div className='flex items-center mt-6 gap-x-3'>
							<Button variant={'outline'} onClick={() => router.push('/')} className='flex items-center justify-center px-5 py-2 text-sm transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100'>
								<House className='size-5 text-primary' />
								<span className='text-primary'>Kembali ke Beranda</span>
							</Button>
						</div>
					</div>

					<div className='relative w-full mt-12 lg:w-1/2 lg:mt-0'>
						<Image className='w-full max-w-lg lg:mx-auto' src='/errors/404.svg' alt='404' width={500} height={500} />
					</div>
				</div>
			</Section>
		</MaxWidthWrapper>
	);
}
