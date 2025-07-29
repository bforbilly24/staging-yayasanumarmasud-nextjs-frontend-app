import Image from 'next/image';
import { DetailInstitutionSection } from '@/components/sections/institution/detail-instituion-section';
import { LISTINSTITUTION } from '@/constants/list-institution';

export async function generateMetadata({ params }) {
	const institution = LISTINSTITUTION.find((item) => item.slug === params.lembagaId);

	if (institution) {
		return {
			title: institution.name,
			description: `Detail ${institution.name}`,
		};
	}

	return {
		title: 'Lembaga Detail',
		description: 'Detail Lembaga',
	};
}

export default function InstitutionDetailPage({ params }) {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
			<DetailInstitutionSection params={params} />
		</div>
	);
}
