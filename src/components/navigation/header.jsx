import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';

function Header() {
	return (
		<header id='header' className={`hidden lg:block mx-auto w-full bg-white`}>
			<MaxWidthWrapper>
				<Section className={'inline-flex h-10 w-full flex-col items-start justify-start gap-2.5 bg-opacity-90 text-white'}>
					<div className='inline-flex h-10 w-full items-center justify-between text-white'>
						<div className='flex items-center justify-center gap-5'>
							<Link href='https://wa.me/6283142961809' target='_blank' rel='noopener noreferrer' className='flex items-center justify-start gap-1 group'>
								<Phone className='size-4 text-cit-secondary group-hover:text-cit-secondary/80 mr-1' />
								<span className='text-xs font-light leading-5 text-cit-primary group-hover:underline'>(+62) 6283142961809</span>
							</Link>
							<Link href='mailto:yayasanuma@gmail.com' target='_blank' className='flex items-center justify-start gap-1 group'>
								<Mail className='size-4 text-cit-secondary group-hover:text-cit-secondary/80 mr-1' />
								<span className='text-xs font-light leading-5 text-cit-primary group-hover:underline'>yayasanuma@gmail.com</span>
							</Link>
						</div>
						<Link href='https://maps.app.goo.gl/eFDU5o5h26iKaDGz8' target='_blank' className='flex items-center justify-end gap-1 group'>
							<MapPin className='size-4 text-cit-secondary group-hover:text-cit-secondary/80 mr-1' />
							<span className='text-xs font-light capitalize leading-5 text-cit-primary group-hover:underline'>Kompleks Masjid Jami&apos;, Ds. Kotakusuma, Kec. Sangkapura, Kab. Gresik</span>
						</Link>
					</div>
				</Section>
			</MaxWidthWrapper>
		</header>
	);
}

export { Header };
