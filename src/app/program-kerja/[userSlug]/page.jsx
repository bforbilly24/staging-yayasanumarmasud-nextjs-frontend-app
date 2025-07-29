import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPrograms } from '@/actions/get-programs';
import { getUsers } from '@/actions/get-users';
import WorkProgramSection from '@/components/sections/work-program/work-program-section';
import { generateSlug } from '@/utils/generate-slug';

export async function generateMetadata({ params }) {
	const { userSlug } = params;
	const usersData = await getUsers();
	const selectedUser = usersData.data.find((user) => generateSlug(user.name) === userSlug);
	const formattedUser = selectedUser ? selectedUser.name : 'Semua Lembaga';

	return { title: `Program Kerja - ${formattedUser}` };
}

export default async function WorkProgramUserPage({ params }) {
	const { userSlug } = params;
	const usersData = await getUsers();
	const selectedUser = usersData.data.find((user) => generateSlug(user.name) === userSlug);
	const userId = selectedUser ? selectedUser.id : null;

	if (!selectedUser) return notFound();

	return (
		<div className='pb-24 flex flex-col gap-y-12 relative bg-slate-50'>
			<Image src='/global/pattern-1.png' fill className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<WorkProgramSection initialUser={userId ? String(userId) : 'all'} />
		</div>
	);
}
