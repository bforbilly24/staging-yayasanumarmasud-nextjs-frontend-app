'use client';

import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';

const BannerSection = () => {
	return (
		<Section className='relative w-full'>
			{/* Background Image */}
			<Image 
				src='/global/pattern-1.png' 
				fill 
				className='absolute inset-0 z-0 h-full w-full object-cover opacity-10' 
				alt='background pattern' 
			/>
			
			<MaxWidthWrapper>
				<div className='relative z-10 w-full'>
					<Card className='w-full bg-gradient-to-r from-cit-main to-cit-secondary border-none shadow-lg'>
						<CardHeader className='text-center py-8'>
							<CardTitle className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
								Selamat Datang di Yayasan Syech Maulana Umar Mas'ud
							</CardTitle>
							<CardDescription className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed'>
								Berkomitmen dalam memberikan pendidikan berkualitas dan membentuk generasi yang berakhlak mulia, 
								berilmu, dan berwawasan global berdasarkan nilai-nilai Islam.
							</CardDescription>
						</CardHeader>
						
						<CardContent className='text-center pb-8'>
							<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
								<Button 
									asChild 
									size='lg' 
									variant='secondary'
									className='bg-white text-cit-main hover:bg-white/90 font-semibold px-8 py-3'
								>
									<Link href='/tentang-kami'>
										Tentang Kami
									</Link>
								</Button>
								
								<Button 
									asChild 
									size='lg' 
									variant='outline'
									className='border-white text-white hover:bg-white hover:text-cit-main font-semibold px-8 py-3'
								>
									<Link href='/lembaga'>
										Lihat Lembaga
									</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
					
					{/* Statistics Cards */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
						<Card className='text-center bg-white/95 backdrop-blur-sm'>
							<CardHeader className='pb-2'>
								<CardTitle className='text-3xl font-bold text-cit-main'>10+</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className='text-gray-600 font-medium'>
									Lembaga Pendidikan
								</CardDescription>
							</CardContent>
						</Card>
						
						<Card className='text-center bg-white/95 backdrop-blur-sm'>
							<CardHeader className='pb-2'>
								<CardTitle className='text-3xl font-bold text-cit-main'>1000+</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className='text-gray-600 font-medium'>
									Siswa Aktif
								</CardDescription>
							</CardContent>
						</Card>
						
						<Card className='text-center bg-white/95 backdrop-blur-sm'>
							<CardHeader className='pb-2'>
								<CardTitle className='text-3xl font-bold text-cit-main'>25+</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className='text-gray-600 font-medium'>
									Tahun Pengalaman
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
};

export default BannerSection;
