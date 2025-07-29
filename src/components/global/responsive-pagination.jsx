'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/shadcn/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/shadcn/select';

function ResponsivePagination({ totalPages, currentPage, setCurrentPage }) {
	const handleNext = () => setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
	const handlePrev = () => setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

	const getVisiblePages = () => {
		const visiblePages = [];
		if (totalPages <= 3) {
			for (let i = 0; i < totalPages; i++) {
				visiblePages.push(i + 1);
			}
		} else {
			if (currentPage < 2) {
				visiblePages.push(1, 2, 3);
				visiblePages.push('...');
			} else if (currentPage >= totalPages - 2) {
				visiblePages.push('...');
				visiblePages.push(totalPages - 2, totalPages - 1, totalPages);
			} else {
				visiblePages.push('...');
				visiblePages.push(currentPage, currentPage + 1, currentPage + 2);
				visiblePages.push('...');
			}
		}
		return visiblePages;
	};

	return (
		<div className='flex justify-center items-center gap-4 mt-8'>
			<div className='hidden md:block lg:block'>
				<Pagination>
					<PaginationContent className='flex gap-2'>
						<PaginationItem>
							<PaginationPrevious onClick={handlePrev} disabled={currentPage === 0} className='bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-700 rounded-lg px-3 py-2 transition' />
						</PaginationItem>

						{getVisiblePages().map((page, index) => (
							<PaginationItem key={index}>
								{page === '...' ? (
									<PaginationEllipsis />
								) : (
									<Button variant={page - 1 === currentPage ? 'default' : 'outline'} className={`w-8 h-8 text-sm ${page - 1 === currentPage ? 'bg-primary text-white' : ''}`} onClick={() => setCurrentPage(page - 1)}>
										{page}
									</Button>
								)}
							</PaginationItem>
						))}

						<PaginationItem>
							<PaginationNext onClick={handleNext} disabled={currentPage === totalPages - 1} className='bg-gray-200 cursor-pointer hover:bg-gray-300 text-gray-700 rounded-lg px-3 py-2 transition' />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>

			<div className='block lg:hidden md:hidden'>
				<div className='flex items-center gap-2'>
					<Button onClick={handlePrev} disabled={currentPage === 0} variant='outline'>
						<ChevronLeft />
						Sebelumnya
					</Button>

					<Select value={String(currentPage + 1)} onValueChange={(value) => setCurrentPage(parseInt(value) - 1)}>
						<SelectTrigger className='w-fit'>
							<SelectValue>{`Halaman ${currentPage + 1}`}</SelectValue>
						</SelectTrigger>
						<SelectContent className='max-h-40'>
							{[...Array(totalPages)].map((_, idx) => (
								<SelectItem key={idx} value={String(idx + 1)}>
									Halaman {idx + 1}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Button onClick={handleNext} disabled={currentPage === totalPages - 1} variant='outline'>
						Selanjutnya
						<ChevronRight />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ResponsivePagination;
