import Image from 'next/image';
import InstitutionSection from '@/components/sections/institution/institution-section';

export const metadata = {
	title: 'Lembaga',
};

export default function InsititutionPage() {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 z-0 h-full w-full object-cover' />
			<InstitutionSection />
		</div>
	);
}
