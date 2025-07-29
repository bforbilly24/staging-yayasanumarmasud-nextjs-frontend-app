import Image from 'next/image';
import DocumentationSection from '@/components/sections/documentation/documentation-section';

export const metadata = {
	title: 'Dokumentasi Kegiatan',
};

export default function DocumentationPage() {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<DocumentationSection />
		</div>
	);
}
