import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPrograms } from '@/actions/get-programs';
import { getUsers } from '@/actions/get-users';
import DetailWorkProgramSection from '@/components/sections/work-program/detail-work-program-section';
import { formatDate } from '@/utils/format-date';
import { generateSlug } from '@/utils/generate-slug';

export async function generateMetadata({ params }) {
	const { programId, userSlug } = params;
	const usersData = await getUsers();
	const selectedUser = usersData.data.find((user) => generateSlug(user.name) === userSlug);
	const formattedUser = selectedUser ? selectedUser.name : 'Semua Lembaga';

	return { title: `Program Kerja - ${programId.charAt(0).toUpperCase() + programId.slice(1)} - ${formattedUser}` };
}

export default async function WorkingProgramDetailPage({ params }) {
	const { programId, userSlug } = params;
	const programsData = await getPrograms(true);
	const usersData = await getUsers();

	const selectedUser = usersData.data.find((user) => generateSlug(user.name) === userSlug);
	const userId = selectedUser ? selectedUser.id : null;

	const programs = programsData.data.filter((item) => formatDate(item.date).monthName.toLowerCase() === programId.toLowerCase() && (userId ? item.user_id === userId : true));

	if (programs.length === 0) return notFound();

	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<DetailWorkProgramSection programs={programs} programId={programId} selectedUser={userId ? String(userId) : 'all'} />
		</div>
	);
}
