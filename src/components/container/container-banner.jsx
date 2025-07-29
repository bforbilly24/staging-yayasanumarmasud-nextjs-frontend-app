'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/shadcn/breadcrumb';

function ContainerBanner({ title, breadcrumbTitle }) {
	const pathname = usePathname();

	const toTitleCase = (str) => {
		return str
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	const getCurrentPageName = () => {
		const currentPageSlug = pathname
			.split('/')
			.filter((segment) => segment !== '')
			.pop();
		return title || toTitleCase(currentPageSlug);
	};

	const generateBreadcrumbItems = () => {
		const segments = pathname.split('/').filter((segment) => segment !== '');
		const breadcrumbItems = [];

		breadcrumbItems.push(
			<BreadcrumbItem key='home'>
				<BreadcrumbLink asChild>
					<Link href='/'>
						<p className='text-sm text-white hover:text-slate-200'>Beranda</p>
					</Link>
				</BreadcrumbLink>
			</BreadcrumbItem>,
		);

		if (segments.length > 0) {
			if (segments.length > 1) {
				const intermediateHref = `/${segments[0]}`;
				breadcrumbItems.push(
					<BreadcrumbSeparator key='separator-intermediate'>
						<ChevronRight className='size-4 text-white' />
					</BreadcrumbSeparator>,
					<BreadcrumbItem key='intermediate'>
						<BreadcrumbLink asChild>
							<Link href={intermediateHref}>
								<p className='text-sm text-white hover:text-slate-200'>{toTitleCase(segments[0])}</p>
							</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>,
				);
			}

			const lastSegment = segments[segments.length - 1];
			breadcrumbItems.push(
				<BreadcrumbSeparator key='separator-current'>
					<ChevronRight className='size-4 text-white' />
				</BreadcrumbSeparator>,
				<BreadcrumbItem key='current'>
					<p className='text-sm text-cit-hover line-clamp-1'>{breadcrumbTitle || toTitleCase(lastSegment)}</p>
				</BreadcrumbItem>,
			);
		}

		return breadcrumbItems;
	};

	return (
		<Section id={'container-banner'} className={'relative flex font-["Poppins"] lg:h-80 md:h-72 h-44 w-full'}>
			<Image src='/bg-hero.jpg' fill className='absolute inset-0 h-full w-full object-cover' alt='Background' />
			<div className='absolute inset-0 z-10 bg-gradient-to-t from-cit-main/50 to-cit-tertiary' />
			<MaxWidthWrapper className='z-20 relative flex w-full items-center justify-center px-4 sm:px-6 md:px-8'>
				<div className='flex flex-col items-center sm:items-start justify-center gap-y-2 w-full text-center sm:text-left'>
					<h4 className='text-xl md:text-2xl lg:text-3xl font-bold text-white line-clamp-2'>{getCurrentPageName()}</h4>
					<Breadcrumb>
						<BreadcrumbList className='flex items-center justify-center sm:justify-start gap-x-1'>{generateBreadcrumbItems()}</BreadcrumbList>
					</Breadcrumb>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
}

export { ContainerBanner };
