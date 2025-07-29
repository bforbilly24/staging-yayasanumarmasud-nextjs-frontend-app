import { FacebookIcon, InstagramIcon, LinkedinIcon, Mail, MapPin, Phone, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { NAV_LINKS } from '@/constants/nav-links';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer id='footer' className='bg-gray-950 lg:pb-0 md:pb-0 pb-16 relative font-["Poppins"]'>
			<Image src={'/global/pattern-1.png'} fill className='absolute inset-0 z-0 h-full w-full object-cover' alt='background pattern' />
			<MaxWidthWrapper>
				<Section className={'flex flex-col lg:items-center md:items-center items-start justify-center relative lg:py-12 md:py-10 py-8'}>
					<div className='lg:absolute md:absolute hidden lg:flex md:flex overflow-hidden -top-14 left-1/2 z-20 h-24 w-full max-w-5xl -translate-x-1/2 transform rounded-lg bg-gradient-to-b from-cit-quinary to-cit-main px-4 shadow-md'>
						<div className='flex-row flex w-full items-center justify-center gap-4'>
							<Link href='https://maps.app.goo.gl/eFDU5o5h26iKaDGz8' target='_blank' className='w-4/12 flex gap-4 items-center'>
								<div className='h-full'>
									<MapPin className='size-12 text-white group-hover:text-slate-200' />
								</div>
								<div>
									<p className='text-xl font-bold leading-6 text-white group-hover:text-slate-200'>Alamat</p>
									<p className='w-full text-sm font-normal leading-4 text-white group-hover:text-slate-200 line-clamp-2'>Kompleks Masjid Jami', Ds. Kotakusuma, Kec. Sangkapura, Kab. Gresik</p>
								</div>
							</Link>
							<Image src='/footer/chevron-right-footer.svg' width={25} height={96} alt='chevron-right' className='h-full' />
							<Link href='https://wa.me/6283142961809' target='_blank' className='w-fit flex gap-4 items-center'>
								<div className='h-full'>
									<Phone className='size-12 text-white group-hover:text-slate-200' />
								</div>
								<div>
									<p className='text-xl font-bold leading-6 text-white group-hover:text-slate-200'>Telepon</p>
									<p className='w-full text-sm font-normal leading-4 text-white group-hover:text-slate-200 line-clamp-2'>(+62) 83142961809</p>
								</div>
							</Link>
							<Image src='/footer/chevron-right-footer.svg' width={25} height={96} alt='chevron-right' className='h-full' />
							<Link href='mailto:ysmumma@gmail.com' target='_blank' className='w-fit flex gap-4 items-center'>
								<div className='h-full'>
									<Mail className='size-12 text-white group-hover:text-slate-200' />
								</div>
								<div>
									<p className='text-xl font-bold leading-6 text-white group-hover:text-slate-200'>Email</p>
									<p className='w-full text-sm font-normal leading-4 text-white group-hover:text-slate-200 line-clamp-2'>ysmumma@gmail.com</p>
								</div>
							</Link>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 lg:mt-12 md:mt-10 mt-0 w-full'>
						<div className='flex w-full flex-col items-start justify-start h-full'>
							<div className='flex items-center gap-4'>
								<Image height={80} width={80} src='/logo.svg' alt='logo-yayasan-syech-umar-masud' />
								<h3 className='lg:text-3xl md:text-2xl text-xl font-bold text-white'>Yayasan Syech Maulana Umar Mas'ud</h3>
							</div>
							<p className='mt-4 text-lg text-white'>Yayasan Syech Maulana Umar Mas'ud sebuah situs web yang didedikasikan untuk menyajikan informasi berbagai aspek yayasan kepada pengunjung.</p>
						</div>

						<div className='w-full flex flex-col items-start justify-center'>
							<h3 className='w-full lg:text-2xl md:text-xl text-lg font-bold uppercase text-cit-quaternary mb-4'>Laman Cepat</h3>
							<ul className='w-full space-y-2'>
								{NAV_LINKS.filter((link) => link.slug !== '/').map((link) => (
									<li key={link.slug} className='text-base text-white hover:text-slate-200 cursor-pointer'>
										<Link className='cursor-pointer' href={link.slug}>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className='grid grid-cols-4 gap-y-8 w-full h-full place-content-between'>
							<div className='flex w-fit h-fit items-center justify-center bg-white rounded-full p-2 cursor-pointer'>
								<InstagramIcon className='size-6 fill-cit-secondary text-white group-hover:text-slate-200' />
							</div>
							<div className='flex w-fit h-fit items-center justify-center bg-white rounded-full p-2 cursor-pointer'>
								<FacebookIcon className='size-6 fill-cit-secondary text-white group-hover:text-slate-200' />
							</div>
							<div className='flex w-fit h-fit items-center justify-center bg-white rounded-full p-2 cursor-pointer'>
								<TwitterIcon className='size-6 fill-cit-secondary text-white group-hover:text-slate-200' />
							</div>
							<div className='flex w-fit h-fit items-center justify-center bg-white rounded-full p-2 cursor-pointer'>
								<LinkedinIcon className='size-6 fill-cit-secondary text-white group-hover:text-slate-200' />
							</div>
							<div className='col-span-4'>
								<h3 className='w-full lg:text-xl md:text-xl text-lg font-bold uppercase text-cit-quaternary mb-4 flex'>No Rekening:</h3>
								<Image src={'/footer/qris-ysmumma.jpeg'} width={150} height={150} alt='qris-bca'  className='' />
							</div>
						</div>
					</div>

					<div className='w-full border-t border-cit-senary mt-8 pt-4 text-center'>
						<p className='text-base text-white group-hover:text-slate-200'>Copyright © {currentYear} Yayasan Syech Maulana Umar Mas'ud</p>
					</div>
				</Section>
			</MaxWidthWrapper>
		</footer>
	);
}

export { Footer };
