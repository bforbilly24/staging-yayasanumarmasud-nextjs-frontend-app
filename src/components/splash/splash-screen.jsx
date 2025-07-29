'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FlipText } from '@/components/ui/magicui/flip-text';

function SplashScreen() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			document.body.style.overflow = 'auto';
			setLoading(false);
		}, 3500);

		return () => clearTimeout(timer);
	}, []);

	const logoVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: 'easeInOut',
			},
		},
	};

	if (loading) {
		return (
			<motion.div className='fixed z-50 flex h-screen w-screen items-center justify-center' initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
				<div className='relative flex h-screen w-screen flex-col gap-y-4 items-center justify-center bg-white'>
					<motion.div variants={logoVariants} initial='hidden' animate='visible'>
						<Image width={120} height={120} src='/home/home-logo.svg' alt='logo' className='object-contain w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48' />
					</motion.div>
					<div className='relative z-10 flex flex-col items-center gap-y-4 md:gap-y-5 lg:gap-y-6'>
						<FlipText duration={0.5} delayMultiple={0.08} className='text-2xl md:text-4xl lg:text-5xl font-semibold font-["Poppins"] text-transparent bg-clip-text bg-gradient-to-br from-cit-secondary to-cit-quinary drop-shadow-sm'>
							Yayasan Syech Maulana
						</FlipText>
						<FlipText duration={0.5} delayMultiple={0.08} className='text-2xl md:text-4xl lg:text-5xl font-semibold font-["Poppins"] text-transparent bg-clip-text bg-gradient-to-br from-cit-secondary to-cit-quinary drop-shadow-sm'>
							Umar Mas'ud
						</FlipText>
					</div>
				</div>
			</motion.div>
		);
	}

	return null;
}

export { SplashScreen };
