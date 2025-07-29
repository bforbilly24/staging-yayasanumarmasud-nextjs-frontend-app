'use client';

import { BookOpenText, Ellipsis, GraduationCapIcon, HomeIcon, Medal, Newspaper, SquareChartGantt, UsersRoundIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ProgressBarProvider } from '@/components/providers/progress-bar-provider';
import { Dock, DockIcon } from '@/components/ui/magicui/dock';
import { Button, buttonVariants } from '@/components/ui/shadcn/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/shadcn/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/shadcn/tooltip';
import { NAV_LINKS } from '@/constants/nav-links';
import { cn } from '@/lib/utils';

const MAIN_NAV = NAV_LINKS.slice(0, 3);
const MORE_NAV = NAV_LINKS.slice(3);

const getIconComponent = (iconName) => {
	const icons = {
		HomeIcon,
		UsersRoundIcon,
		GraduationCapIcon,
		Medal,
		Newspaper,
		SquareChartGantt,
		BookOpenText,
	};
	return icons[iconName];
};

export const MobileNavbar = ({ className }) => {
	const pathname = usePathname();

	return (
		<header id='mobile-navbar' className={`fixed bottom-0 left-0 z-[45] h-fit w-full ${className}`}>
			<ProgressBarProvider />
			<TooltipProvider>
				<Dock direction='middle' className='font-["Poppins"] z-[45] grid h-20 w-full grid-cols-4 place-content-center place-items-center bg-slate-50 border-t border-gray-300 shadow-md rounded-t-lg rounded-b-none'>
					{MAIN_NAV.map((link) => {
						const isActive = pathname === link.slug || pathname.startsWith(`${link.slug}/`);
						const IconComponent = getIconComponent(link.icon);
						return (
							<DockIcon key={link.name} className='rounded-none'>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link href={link.slug}>
											<Button aria-label={link.name} variant={'default'} size={'icon'} className='bg-transparent shadow-none hover:bg-transparent flex size-14 flex-col items-center justify-center gap-y-2 rounded-none'>
												<IconComponent className={link.iconClass(isActive)} />
												<p className={cn('text-sm font-light text-primary', isActive && 'text-cit-secondary font-medium')}>{link.name}</p>
											</Button>
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>{link.name}</p>
									</TooltipContent>
								</Tooltip>
							</DockIcon>
						);
					})}

					<DockIcon className='rounded-none'>
						<Sheet>
							<SheetTrigger asChild>
								<Button aria-label={'Lainnya'} variant={'default'} size={'icon'} className='bg-transparent shadow-none hover:bg-transparent flex size-14 flex-col items-center justify-center gap-y-2 rounded-none'>
									<Ellipsis className='size-6 text-primary' />
									<p className='text-sm font-light text-foreground'>Lainnya</p>
								</Button>
							</SheetTrigger>
							<SheetContent side='bottom' className='font-["Poppins"] h-[24rem] z-40 overflow-y-auto rounded-t-lg bg-background p-6 backdrop-blur-lg'>
								<SheetHeader>
									<SheetTitle className='text-xl font-bold text-foreground'>Menu Lainnya</SheetTitle>
									<SheetDescription className='text-center text-sm font-light text-muted-foreground'>Akses menu lainnya yang tersedia.</SheetDescription>
								</SheetHeader>

								<div className='mt-4 flex w-full flex-col gap-y-4'>
									{MORE_NAV.map((link) => {
										const isActive = pathname === link.slug || pathname.startsWith(`${link.slug}/`);
										const IconComponent = getIconComponent(link.icon);
										return (
											<Link key={link.name} href={link.slug} className={cn(buttonVariants({ variant: 'outline' }), 'flex flex-row items-center justify-start gap-x-2')}>
												<IconComponent className={link.iconClass(isActive)} />
												<p className={cn('text-sm font-light text-primary', isActive && 'text-cit-secondary font-bold')}>{link.name}</p>
											</Link>
										);
									})}
								</div>
							</SheetContent>
						</Sheet>
					</DockIcon>
				</Dock>
			</TooltipProvider>
		</header>
	);
};
