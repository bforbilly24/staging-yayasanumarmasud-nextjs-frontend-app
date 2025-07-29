'use client';

import Image from 'next/image';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { TitleSection } from '../title-section';

const PrincipalSection = () => {
	return (
		<Section id={'principal'} className='font-["Poppins"]'>
			<MaxWidthWrapper className='relative w-full'>
				<TitleSection title='Selayang Pandang' content="Ketua Umum Pengurus Yayasan Syech Maulana Umar Mas'ud" showButton={false} />
				<div className='relative flex flex-col-reverse md:flex-row w-full items-center justify-between gap-6 md:gap-10'>
					<div className='relative z-10 inline-flex w-full max-w-lg flex-col items-center md:items-start justify-center rounded-lg'>
						<div className='flex flex-col items-center md:items-start justify-start gap-y-6'>
							<div className='w-full'>
								<p className='text-xl md:text-2xl lg:text-3xl text-cit-secondary text-justify leading-tight h-3 mb-3 mt-6'>“</p>
								<p className='text-base md:text-base lg:text-lg text-gray-500 text-justify md:text-start'>
									Selamat datang di website Yayasan Syech Maulana Umar Mas&apos;ud yang saya tujukan untuk seluruh unsur pimpinan, guru, karyawan, dan siswa serta khalayak umum guna dapat mengakses seluruh informasi tentang sekolah kami. Tentunya dalam penyajian informasi masih
									banyak kekurangan, oleh karena itu kepada seluruh civitas akademika dan masyarakat umum dapat memberikan saran dan kritik demi kemajuan lebih lanjut.
									<br />
									<br />
									Saya berharap Website ini dapat dijadikan wahana interaksi yang positif baik antar civitas akademika maupun masyarakat pada umumnya, sehingga dapat menjalin silaturahmi yang erat di segala unsur. Mari kita bekerja dan berkarya dengan mengharap ridho Sang Kuasa dan
									keikhlasan yang tulus demi anak bangsa.
								</p>
								<p className='text-xl md:text-2xl lg:text-3xl text-cit-secondary text-right leading-tight h-3 -mt-3'>”</p>
							</div>
							<div className='flex flex-col w-full items-center md:items-start justify-center gap-y-1'>
								<p className='text-lg md:text-xl font-bold text-gray-500 text-center md:text-start'>ردين احسن الحق</p>
								<p className='text-lg md:text-xl font-bold text-gray-500 text-center md:text-start'>- &#40;Drs. R. Akhsanul Haq&#41;</p>
							</div>
						</div>
					</div>

					<div className='relative flex items-center justify-center'>
						<Image src='/lembaga/Yayasan/1.png' alt='kepala-sekolah' width={200} height={200} className='z-10 h-72 md:h-80 lg:h-96 w-60 md:w-72 lg:w-80 object-cover object-top' />
						<div className='bg-cit-quaternary rounded-2xl size-60 md:size-72 lg:size-80 absolute z-0 bottom-0 left-1/2 -translate-x-1/2' />
						<div className='bg-cit-senary -left-12 md:-left-16 lg:-left-20 top-16 md:top-24 lg:top-28 rounded-lg rotate-[75deg] size-8 md:size-10 lg:size-12 z-10 absolute' />
						<div className='bg-cit-primary -left-12 md:-left-16 lg:-left-20 top-28 md:top-36 lg:top-40 rounded-lg rotate-45 size-12 md:size-14 lg:size-16 z-10 absolute' />
					</div>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
};

export default PrincipalSection;
