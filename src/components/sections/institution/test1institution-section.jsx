'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { ContainerBanner } from '@/components/container/container-banner';
import Loader from '@/components/global/loader';
import { Button } from '@/components/ui/shadcn/button';
import { LISTINSTITUTION } from '@/constants/list-institution';

function InstitutionSection() {
	const [institutions, setInstitutions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInstitutions(LISTINSTITUTION);
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const memoizedInstitutions = useMemo(() => institutions, [institutions]);

	return (
		<>
			<ContainerBanner upperCamelCase={true} />

			<div className='inline-flex h-fit w-full flex-col items-center justify-start px-cit-p-100 py-10'>
				{isLoading ? (
					<Loader />
				) : (
					<div className='flex flex-col items-center justify-start gap-4'>
						<div className='inline-flex h-fit max-w-cit-maxwidth items-center justify-start gap-5 overflow-x-auto cit-scroll-x'>
							<div className='flex flex-nowrap items-center gap-5'>
								{memoizedInstitutions.map((item, index) => (
									<InstitutionCard key={index} item={item} />
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

const InstitutionCard = ({ item }) => {
	return (
		<div className='flex h-80 w-[560px] items-center justify-center rounded-xl'>
			<div className='relative inline-flex shrink grow basis-0 items-end justify-center self-stretch rounded-xl bg-cit-skeleton px-5'>
				{item.school && <Image src={item.school} alt={item.name} fill className='absolute inset-0 rounded-xl object-fill' />}

				<div className='absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-gradient-to-l from-cit-quaternary/60 to-cit-secondary/90' />

				<div className='z-10 mb-5 inline-flex flex-col items-start justify-start gap-6'>
					<div className='flex flex-col items-start justify-center gap-4'>
						<h3 className='text-center text-2xl font-bold capitalize text-cit-white underline underline-offset-8'>{item.name}</h3>
						<p className='line-clamp-2 w-full text-base font-normal text-cit-white'>{item.content}</p>
					</div>

					<div className='inline-flex w-full items-center justify-between'>
						<div className='flex items-center justify-center gap-2.5'>
							<div className='flex items-center justify-center rounded-[50px] bg-cit-white p-2'>
								<Image src={item.icon} alt={item.name} width={70} height={70} />
							</div>
							<p className='text-center text-lg font-medium text-cit-white'>{item.name}</p>
						</div>

						<Button className='px-11 py-0.5 text-lg' variant={'fill'} content={'Detail'} citHref={`/lembaga/${item.slug}`} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InstitutionSection;
