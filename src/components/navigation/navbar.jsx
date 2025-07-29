'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { MobileNavbar } from '@/components/navigation/mobile-navbar';
import { NAV_LINKS } from '@/constants/nav-links';

function NavBar() {
	const pathname = usePathname();

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isActive = (slug) => pathname === slug || pathname.startsWith(`${slug}/`);

	return (
		<>
			<nav id='navbar' className={`sticky top-0 z-40 mx-auto hidden w-full bg-white font-['Poppins'] lg:block ${isSticky ? 'bg-white/90 backdrop-blur-md' : ''}`}>
				<MaxWidthWrapper>
					<div className='inline-flex h-24 w-full items-center gap-x-12 justify-between'>
						<Image src='/logo.svg' width={70} height={70} alt='Logo Yayasan UMMA' />
						<div className='flex items-center justify-between w-full'>
							{NAV_LINKS.map((item) => (
								<Link key={item.slug} href={item.slug}>
									<button className={`relative flex items-center justify-center ${isActive(item.slug) ? 'text-cit-main' : 'text-primary'}`}>
										<div className='relative inline-flex items-center justify-center'>
											{isActive(item.slug) && <div className='absolute -bottom-0.5 left-0 z-0 h-3 w-full bg-cit-hover'></div>}
											<div className='relative z-10'>
												<p className='text-center text-lg font-medium leading-tight'>{item.name}</p>
											</div>
										</div>
									</button>
								</Link>
							))}
						</div>
					</div>
				</MaxWidthWrapper>
			</nav>

			<MobileNavbar className={'block lg:hidden'} />
		</>
	);
}

export { NavBar };
