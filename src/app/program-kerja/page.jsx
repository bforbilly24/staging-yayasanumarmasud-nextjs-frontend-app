import Image from 'next/image';
import WorkProgramSection from '@/components/sections/work-program/work-program-section';

export const metadata = {
	title: 'Program Kerja',
};

export default function WorkingProgramPage() {
	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<WorkProgramSection />
		</div>
	);
}
