'use client';

import { ChevronUp, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Section } from '@/components/sections/section';

const ScrollToAnchor = ({ targetId = 'top', offset = 0, behavior = 'smooth' }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTarget = () => {
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - offset,
				behavior,
			});
		} else {
			window.scrollTo({
				top: 0,
				behavior,
			});
		}
	};

	return (
		<Section id={'scroll-to-anchor'} className={'fixed bottom-28 right-4 z-40 flex flex-col items-center justify-center gap-y-4 lg:bottom-10 lg:right-5'}>
			<div className='flex flex-col items-center justify-center gap-y-4'>
				<Link href='https://wa.me/6283142961809' target='_blank' rel='noopener noreferrer' aria-label='Contact Us' className='lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-cit-quaternary shadow-lg hover:bg-cit-quinary lg:h-14 lg:w-14'>
					<Phone className='h-4 w-5 text-white lg:h-6 lg:w-6' />
				</Link>
				<Link href='mailto://yayasanuma@gmail.com' target='_blank' rel='noopener noreferrer' aria-label='Contact Us' className='lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-cit-tertiary shadow-lg hover:bg-cit-quaternary lg:h-14 lg:w-14'>
					<Mail className='h-4 w-5 text-white lg:h-6 lg:w-6' />
				</Link>

				{isVisible && (
					<button onClick={scrollToTarget} className='flex h-11 w-11 items-center justify-center rounded-full bg-cit-secondary shadow-lg hover:bg-cit-tertiary lg:h-14 lg:w-14' aria-label='Scroll to top'>
						<ChevronUp className='h-4 w-5 text-white lg:h-6 lg:w-6' />
					</button>
				)}
			</div>
		</Section>
	);
};

export default ScrollToAnchor;
