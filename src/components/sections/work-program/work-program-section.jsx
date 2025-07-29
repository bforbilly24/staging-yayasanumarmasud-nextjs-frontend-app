'use client';

import { ChevronsUpDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getPrograms } from '@/actions/get-programs';
import { ContainerBanner } from '@/components/container/container-banner';
import Filter from '@/components/global/filter';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import WorkProgramSkeleton from '@/components/skeletons/work-program-skeleton';
import { Marquee } from '@/components/ui/magicui/marquee';
import { Button } from '@/components/ui/shadcn/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/shadcn/collapsible';
import { formatScheduleDate } from '@/utils/format-schedule-date';
import { generateSlug } from '@/utils/generate-slug';
import { sanitizeHTML } from '@/utils/sanitize-html';

function WorkProgramSection() {
	const [groupedProgramData, setGroupedProgramData] = useState({});
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedUser, setSelectedUser] = useState('all');

	const { monthOrder } = formatScheduleDate(new Date().toISOString());
	const currentMonth = formatScheduleDate(new Date().toISOString()).monthName.toLowerCase();

	const fetchPrograms = useCallback(async (user) => {
		try {
			setLoading(true);
			const response = await getPrograms();
			if (response.error) throw new Error('Gagal mendapatkan data, cek database');

			const filteredPrograms = user !== 'all' ? response.data.filter((item) => item.user_id === parseInt(user)) : response.data;
			setGroupedProgramData(organizeDataByMonth(filteredPrograms));
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchPrograms(selectedUser);
	}, [selectedUser, fetchPrograms]);

	const organizeDataByMonth = (data) => {
		const grouped = data.reduce((acc, item) => {
			const { monthName } = formatScheduleDate(item.date);
			const normalizedMonth = monthName.toLowerCase();
			if (!acc[normalizedMonth]) acc[normalizedMonth] = [];
			acc[normalizedMonth].push(item);
			return acc;
		}, {});

		Object.keys(grouped).forEach((month) => {
			grouped[month].sort((a, b) => new Date(a.date) - new Date(b.date));
		});

		return grouped;
	};

	const currentMonthPrograms = useMemo(() => groupedProgramData[currentMonth] || [], [groupedProgramData, currentMonth]);
	const marqueePrograms = useMemo(() => currentMonthPrograms, [currentMonthPrograms]);

	const handleFilterChange = (user) => {
		setSelectedUser(user);
	};

	const handleUsersFetched = (fetchedUsers) => {
		setUsers(fetchedUsers);
	};

	return (
		<>
			<ContainerBanner />
			<MaxWidthWrapper>
				<Section id={'program-kerja'} className='flex flex-col justify-center items-center gap-y-8 font-["Poppins"]'>
					<Filter onFilterChange={handleFilterChange} onUsersFetched={handleUsersFetched} defaultUser='all' title='Filter Program Kerja Berdasarkan Lembaga' />
					{error ? (
						<p className='text-red-500 text-center'>{error}</p>
					) : loading ? (
						<WorkProgramSkeleton />
					) : Object.keys(groupedProgramData).length === 0 ? (
						<div className='w-full flex items-center justify-center text-sm text-gray-500'>Tidak ada program kerja yang tersedia.</div>
					) : (
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
							<div className='flex flex-col gap-y-6 w-full'>
								<h2 className='text-2xl font-semibold text-primary'>Daftar Program Kerja</h2>
								<div className='flex flex-col border rounded-lg w-full p-2'>
									{monthOrder.map((month) => {
										if (!groupedProgramData[month]) return null;

										const hasMore = groupedProgramData[month].length > 3;
										const programList = groupedProgramData[month].slice(0, 3);
										const additionalPrograms = groupedProgramData[month].slice(3);

										return (
											<Collapsible key={month} className='w-full mb-4'>
												<div className='flex justify-between items-center cursor-pointer px-2 py-3 rounded-lg transition'>
													<Link href={`/program-kerja/${generateSlug(users.find((user) => user.id === parseInt(selectedUser))?.name || 'semua-lembaga')}/${month}`} passHref className='flex items-center justify-center gap-x-1'>
														<h3 className='text-lg w-full font-semibold text-cit-quaternary hover:text-cit-primary capitalize'>{month}</h3>
														<ExternalLink className='size-4 text-cit-quaternary' />
													</Link>

													<CollapsibleTrigger asChild>
														{hasMore && (
															<Button variant='ghost' size='sm' className='justify-center text-primary gap-x-1 flex items-center'>
																Lihat Semua <ChevronsUpDown className='size-4' />
															</Button>
														)}
													</CollapsibleTrigger>
												</div>

												<table className='w-full overflow-hidden table-fixed'>
													<tbody>
														{programList.map((item) => (
															<tr key={item.id} className='border-b border-gray-300'>
																<td className='p-2 text-left capitalize text-base font-medium text-gray-700 w-3/4 truncate'>{item.name}</td>
																<td className='p-2 text-right text-sm text-gray-500 w-1/4'>{formatScheduleDate(item.date).formattedDate}</td>
															</tr>
														))}
													</tbody>
												</table>

												<CollapsibleContent asChild>
													<table className='w-full overflow-hidden table-fixed'>
														<tbody>
															{additionalPrograms.map((item) => (
																<tr key={item.id} className='border-b border-gray-300'>
																	<td className='p-2 text-left capitalize text-base font-medium text-gray-700 w-3/4 truncate'>{item.name}</td>
																	<td className='p-2 text-right text-sm text-gray-500 w-1/4'>{formatScheduleDate(item.date).formattedDate}</td>
																</tr>
															))}
														</tbody>
													</table>
												</CollapsibleContent>
											</Collapsible>
										);
									})}
								</div>
							</div>
							{currentMonthPrograms.length > 0 ? (
								<figure className='flex flex-col items-start gap-y-4 justify-start w-full'>
									<h2 className='text-2xl w-full font-semibold text-primary'>Program Kerja Bulan {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}</h2>
									<div className='relative flex h-96 w-full overflow-hidden mt-4'>
										<Marquee repeat={1} pauseOnHover vertical className='[--duration:20s] w-full'>
											{marqueePrograms.map((program) => (
												<div key={program.id} className='p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm border border-gray-300 transition duration-300 ease-in-out'>
													<span className='block text-sm text-primary font-medium'>{formatScheduleDate(program.date).formattedDate}</span>
													<figcaption className='text-lg font-semibold line-clamp-1 text-gray-700 mt-1'>{program.name}</figcaption>
													<blockquote className='text-sm line-clamp-2 text-gray-500 mt-1' dangerouslySetInnerHTML={{ __html: sanitizeHTML(program.description) }} />
												</div>
											))}
										</Marquee>
									</div>
								</figure>
							) : (
								<div className='w-full h-52 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-300 text-gray-600 font-semibold shadow-md capitalize font-["Poppins"]'>Tidak Ada Program Kerja Bulan {currentMonth}</div>
							)}
						</div>
					)}
				</Section>
			</MaxWidthWrapper>
		</>
	);
}

export default WorkProgramSection;
