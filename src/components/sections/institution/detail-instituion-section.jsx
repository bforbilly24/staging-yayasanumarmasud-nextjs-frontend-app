'use client';

import { ChevronDown, CircleUser, LinkIcon, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { StructureInstitutionCard } from '@/components/cards/structure-institution-card';
import { ContainerBanner } from '@/components/container/container-banner';
import { DetailInstitutionSkeleton } from '@/components/skeletons/detail-institution-skeleton';
import { StructureCardGridSkeleton, StructureCardSkeleton } from '@/components/skeletons/structure-card-skeleton';
import { Button } from '@/components/ui/shadcn/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/shadcn/collapsible';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/shadcn/dialog';
import { LISTINSTITUTION } from '@/constants/list-institution';
import { ImageUrl } from '@/lib/image-url';
import { generateSlug } from '@/utils/generate-slug';

function DetailInstitutionSection({ params }) {
	const router = useRouter();
	const [filteredInstitution, setFilteredInstitution] = useState(null);
	const [isStructureOpen, setIsStructureOpen] = useState(false);
	const [isLinksOpen, setIsLinksOpen] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isStructuresLoading, setIsStructuresLoading] = useState(true);
	const [isCollapsibleLoading, setIsCollapsibleLoading] = useState(false);
	const [dialogLoading, setDialogLoading] = useState(false);
	const [structureDialogStates, setStructureDialogStates] = useState({});
	const itemsPerPage = 4;

	useEffect(() => {
		if (params?.lembagaId) {
			const institution = LISTINSTITUTION.find((item) => generateSlug(item.name) === params.lembagaId);
			if (institution) {
				setFilteredInstitution({ ...institution, slug: generateSlug(institution.name) });
				setTimeout(() => setIsStructuresLoading(false), 1000);
			} else {
				router.push('/not-found');
			}
		}
	}, [params?.lembagaId, router]);

	useEffect(() => {
		if (isStructureOpen) {
			setIsCollapsibleLoading(true);
			setTimeout(() => setIsCollapsibleLoading(false), 500);
		}
	}, [isStructureOpen]);

	const handleDialogOpen = (open) => {
		setIsDialogOpen(open);
		if (open) {
			setDialogLoading(true);
			setTimeout(() => setDialogLoading(false), 500);
		}
	};

	const handleStructureDialogOpen = (structureId, open) => {
		setStructureDialogStates((prev) => ({ ...prev, [structureId]: open }));
		if (open) {
			setDialogLoading(true);
			setTimeout(() => setDialogLoading(false), 500);
		}
	};

	if (!filteredInstitution) return <DetailInstitutionSkeleton />;

	const handleCardClick = (name) => {
		router.push(`/lembaga/${generateSlug(name)}`);
	};

	const headmasterStructure = {
		name: filteredInstitution.data?.headmaster || 'Kepala Sekolah',
		tag: 'Kepala Sekolah',
		profile: filteredInstitution.data?.profile || '',
		icon: filteredInstitution.icon || '',
		schoolName: filteredInstitution.name || 'Sekolah',
	};

	return (
		<>
			<ContainerBanner upperCamelCase upperCaseVariant UpperCamelCaseTitle />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 font-['Poppins'] z-10">
				<div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
					<div className='lg:col-span-2 lg:space-y-6 md:space-y-5 space-y-4'>
						<Card className='overflow-hidden'>
							<div className='relative h-52 lg:h-80 md:h-64 w-full'>
								<Image src={ImageUrl(filteredInstitution.school, 'school')} fill alt={`${filteredInstitution.data.headmaster}'s school`} className='rounded-t-lg object-cover' />
							</div>
							<CardContent className='relative px-6'>
								<div className='absolute lg:-top-32 md:-top-32 -top-28 left-6'>
									<Dialog open={isDialogOpen} onOpenChange={handleDialogOpen}>
										<DialogTrigger asChild>
											<div className='cursor-pointer relative group perspective'>
												<div className='relative w-[120px] h-[120px] lg:w-[112px] lg:h-[112px] md:w-[112px] md:h-[112px] transition-transform duration-500 transform-style-preserve-3d animate-flip group-hover:rotate-y-180'>
													<div className='absolute inset-0 backface-hidden'>
														<Image src={ImageUrl(filteredInstitution.data?.profile || '', 'structure')} width={120} height={120} alt={filteredInstitution.data?.headmaster || 'Kepala Sekolah'} className='lg:size-28 md:size-28 size-24 rounded-full object-cover' />
													</div>
													<div className='absolute inset-0 backface-hidden rotate-y-180'>
														<Image src={ImageUrl(filteredInstitution.icon || '', 'icon')} width={120} height={120} alt={filteredInstitution.name || 'Sekolah'} className='lg:size-28 md:size-28 size-24 rounded-full object-cover' />
													</div>
												</div>
											</div>
										</DialogTrigger>
										<DialogContent className='max-w-xs p-0 border-none'>
											{dialogLoading ? <StructureCardSkeleton /> : <StructureInstitutionCard structure={headmasterStructure} />}
											<DialogClose asChild>
												<button className='absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none z-50' onClick={(e) => e.stopPropagation()}>
													<XCircle className='h-6 w-6 text-gray-200' />
												</button>
											</DialogClose>
										</DialogContent>
									</Dialog>
								</div>

								<div className='lg:mt-16 md:mt-16 mt-12'>
									<h1 className='lg:text-2xl md:text-xl text-xl font-bold text-gray-900'>
										Kepala Sekolah {filteredInstitution?.name} <br />
										<span className='font-normal'>{filteredInstitution.data?.headmaster || 'Kepala Sekolah'}</span>
									</h1>
								</div>
							</CardContent>
						</Card>

						<Card className='py-6'>
							<CardHeader className='py-0'>
								<CardTitle className='text-xl font-semibold text-gray-900'>Tentang Sekolah</CardTitle>
							</CardHeader>
							<CardContent className='py-0 mt-4 flex flex-col gap-y-3'>
								<p className='text-base text-gray-700 leading-relaxed'>{filteredInstitution.content}</p>
								<p className='text-base text-gray-700 leading-relaxed'>{filteredInstitution.data?.about}</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-xl font-semibold text-gray-900'>Tautan</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									{filteredInstitution.data?.links?.length > 0 && (
										<>
											<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
												{filteredInstitution.data.links.slice(0, itemsPerPage).map((link) => (
													<div key={link.id} className='flex items-center gap-y-5'>
														{link.image && <Image src={ImageUrl(link.image, 'icon')} width={40} height={40} alt={link.name} className='rounded-md object-cover' onError={(e) => console.log('Link image failed to load:', link.name, e)} />}
														<div className='flex flex-col items-start justify-center gap-y-1'>
															<p className='lg:text-base md:text-base text-sm font-medium text-gray-900'>{link.title || 'Tautan'}</p>
															<Link
																target='_blank'
																rel='noopener noreferrer'
																href={link.slug}
																className='flex gap-x-1 items-center justify-center'
																onClick={(e) => {
																	if (link.title === 'Whatsapp') {
																		window.open(link.slug, '_blank');
																		e.preventDefault();
																	}
																}}
															>
																<LinkIcon className='text-gray-900 size-5' />
																<p className='text-base text-blue-600 hover:underline'>{link.name}</p>
															</Link>
														</div>
													</div>
												))}
											</div>

											{filteredInstitution.data.links.length > itemsPerPage && (
												<Collapsible open={isLinksOpen} onOpenChange={setIsLinksOpen}>
													<CollapsibleContent>
														<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
															{filteredInstitution.data.links.slice(itemsPerPage).map((link) => (
																<div key={link.id} className='flex items-center gap-4'>
																	{link.image && <Image src={ImageUrl(link.image, 'icon')} width={40} height={40} alt={link.name} className='rounded-md object-cover' onError={(e) => console.log('Link image failed to load (collapsible):', link.name, e)} />}
																	<div>
																		<p className='lg:text-base md:text-base text-sm font-medium text-gray-900'>{link.title}</p>
																		<Link target='_blank' href={link.slug} className='flex gap-x-1 items-center justify-center'>
																			<LinkIcon className='text-gray-900 lg:size-5 md:size-5 size-4' />
																			<p className='lg:text-base md:text-base text-sm text-blue-600 hover:underline'>{link.name}</p>
																		</Link>
																	</div>
																</div>
															))}
														</div>
													</CollapsibleContent>
													<CollapsibleTrigger asChild>
														<Button className='w-full mt-6 bg-black hover:bg-gray-700 hover:text-white text-white flex items-center justify-center gap-2'>
															{isLinksOpen ? 'Sembunyikan' : 'Selengkapnya'}
															<ChevronDown className={`h-4 w-4 transition-transform ${isLinksOpen ? 'rotate-180' : ''}`} />
														</Button>
													</CollapsibleTrigger>
												</Collapsible>
											)}
										</>
									)}
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='text-xl font-semibold text-gray-900'>Struktur Kepengurusan</CardTitle>
							</CardHeader>
							<CardContent>
								{isStructuresLoading || !filteredInstitution.data?.structures ? (
									<StructureCardGridSkeleton />
								) : (
									<div className='space-y-4'>
										{filteredInstitution.data?.structures?.length > 0 && (
											<>
												<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
													{filteredInstitution.data.structures.slice(0, itemsPerPage).map((structure) => (
														<Dialog key={structure.id} open={structureDialogStates[structure.id] || false} onOpenChange={(open) => handleStructureDialogOpen(structure.id, open)}>
															<DialogTrigger asChild>
																<div className='flex items-start gap-4 cursor-pointer hover:opacity-80 transition-opacity'>
																	<Image src={ImageUrl(structure.image, 'structure')} width={80} height={80} alt={structure.name} className='rounded-lg object-cover size-20' />
																	<div>
																		<p className='text-base line-clamp-1 font-medium text-gray-900'>{structure.name}</p>
																		<p className='text-base line-clamp-1 text-gray-600'>{structure.tag}</p>
																	</div>
																</div>
															</DialogTrigger>
															<DialogContent className='max-w-xs p-0 border-none'>
																{dialogLoading ? (
																	<StructureCardSkeleton />
																) : (
																	<StructureInstitutionCard
																		structure={{
																			name: structure.name,
																			tag: structure.tag,
																			profile: structure.image,
																			// Gunakan icon dari institution utama sebagai fallback
																			icon: filteredInstitution.icon || structure.image,
																			schoolName: filteredInstitution.name || 'Sekolah',
																		}}
																	/>
																)}
																<DialogClose asChild>
																	<button className='absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none z-50' onClick={(e) => e.stopPropagation()}>
																		<XCircle className='h-6 w-6 text-gray-200' />
																	</button>
																</DialogClose>
															</DialogContent>
														</Dialog>
													))}
												</div>
												{filteredInstitution.data.structures.length > itemsPerPage && (
													<Collapsible open={isStructureOpen} onOpenChange={setIsStructureOpen}>
														<CollapsibleContent>
															{isCollapsibleLoading ? (
																<StructureCardGridSkeleton count={filteredInstitution.data.structures.length - itemsPerPage} />
															) : (
																<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
																	{filteredInstitution.data.structures.slice(itemsPerPage).map((structure) => (
																		<Dialog key={structure.id} open={structureDialogStates[structure.id] || false} onOpenChange={(open) => handleStructureDialogOpen(structure.id, open)}>
																			<DialogTrigger asChild>
																				<div className='flex items-start gap-4 cursor-pointer hover:opacity-80 transition-opacity'>
																					<Image src={ImageUrl(structure.image, 'structure')} width={80} height={80} alt={structure.name} className='rounded-lg object-cover size-20' />
																					<div>
																						<p className='text-base line-clamp-1 font-medium text-gray-900'>{structure.name}</p>
																						<p className='text-base line-clamp-1 text-gray-600'>{structure.tag}</p>
																					</div>
																				</div>
																			</DialogTrigger>
																			<DialogContent className='max-w-xs p-0 border-none'>
																				{dialogLoading ? (
																					<StructureCardSkeleton />
																				) : (
																					<StructureInstitutionCard
																						structure={{
																							name: structure.name,
																							tag: structure.tag,
																							profile: structure.image,
																							// Perbaiki: gunakan icon institution sebagai fallback
																							icon: filteredInstitution.icon || structure.image,
																							schoolName: filteredInstitution.name || 'Sekolah',
																						}}
																					/>
																				)}
																				<DialogClose asChild>
																					<button
																						className='absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none z-50'
																						onClick={(e) => e.stopPropagation()}
																					>
																						<XCircle className='h-6 w-6 text-gray-200' />
																					</button>
																				</DialogClose>
																			</DialogContent>
																		</Dialog>
																	))}
																</div>
															)}
														</CollapsibleContent>
														<CollapsibleTrigger asChild>
															<Button className='w-full mt-6 bg-black hover:bg-gray-700 hover:text-white text-white flex items-center justify-center gap-2'>
																{isStructureOpen ? 'Sembunyikan' : 'Selengkapnya'}
																<ChevronDown className={`h-4 w-4 transition-transform ${isStructureOpen ? 'rotate-180' : ''}`} />
															</Button>
														</CollapsibleTrigger>
													</Collapsible>
												)}
											</>
										)}
									</div>
								)}
							</CardContent>
						</Card>
					</div>

					<div className='lg:col-span-1'>
						<Card>
							<CardHeader>
								<CardTitle className='text-xl font-semibold text-gray-900'>Lembaga Lainnya</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4 p-4'>
								{LISTINSTITUTION.map(
									(item) =>
										generateSlug(item.name) !== params.lembagaId && (
											<Card
												key={item.id}
												className='hover:bg-gray-50 flex cursor-pointer flex-row items-center justify-center gap-x-2 overflow-hidden rounded-lg border-none p-0 shadow-none transition-all duration-200 ease-in-out hover:-translate-y-1 hover:p-2.5 hover:shadow-lg md:gap-x-4 md:p-2 lg:gap-x-4 lg:p-2'
												onClick={() => handleCardClick(item.name)}
											>
												<div className='relative h-24 w-3/4 min-w-[80px] md:h-24 md:w-full lg:h-20 lg:w-1/4'>
													<img src={ImageUrl(item.school, 'school')} alt={item.name} className='h-full w-full rounded-md object-cover' sizes='(max-width: 768px) 33vw, 100vw' />
												</div>
												<CardContent className='p-0 flex h-fit w-full flex-col items-center justify-between gap-y-1 px-0 md:w-full md:gap-y-1 lg:w-2/3 lg:gap-y-2'>
													<div className='flex w-full flex-col items-start justify-center gap-y-3'>
														<div className='flex w-full flex-row items-center justify-between'>
															<div className='items-center gap-x-1 flex flex-row max-w-full'>
																{item.icon ? <img src={ImageUrl(item.icon, 'icon')} alt={item.name} width={20} height={20} className='border-foreground size-4 rounded-full border object-cover md:size-4 lg:size-4' /> : <CircleUser className='text-foreground size-4' />}
																<p className='text-foreground line-clamp-1 capitalize text-sm'>{item.data?.headmaster || 'Kepala Sekolah'}</p>
															</div>
														</div>
														<div className='flex h-12 w-full flex-col gap-y-1 md:h-12 md:gap-y-2 lg:h-12 lg:gap-y-3'>
															<h5 className='text-start line-clamp-2 leading-tight font-medium text-base'>{item.name}</h5>
														</div>
													</div>
												</CardContent>
											</Card>
										),
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}

export { DetailInstitutionSection };
