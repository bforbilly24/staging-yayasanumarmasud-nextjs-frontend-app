'use client';

import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = () => emblaApi?.scrollPrev();
	const onNextButtonClick = () => emblaApi?.scrollNext();

	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => {
			setPrevBtnDisabled(!emblaApi.canScrollPrev());
			setNextBtnDisabled(!emblaApi.canScrollNext());
		};

		emblaApi.on('select', onSelect);
		onSelect();

		return () => emblaApi.off('select', onSelect);
	}, [emblaApi]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

export const PrevButton = ({ onClick, disabled, className }) => (
	<button type='button' onClick={onClick} disabled={disabled} className={clsx('group size-12 rounded-full bg-white shadow-lg flex items-center justify-center p-0', 'hover:bg-cit-secondary transition-colors duration-200', 'disabled:opacity-50 disabled:cursor-not-allowed', className)}>
		<ChevronLeft className='size-5 text-primary group-hover:text-white m-auto' />
	</button>
);

export const NextButton = ({ onClick, disabled, className }) => (
	<button type='button' onClick={onClick} disabled={disabled} className={clsx('group size-12 rounded-full bg-white shadow-lg flex items-center justify-center p-0', 'hover:bg-cit-secondary transition-colors duration-200', 'disabled:opacity-50 disabled:cursor-not-allowed', className)}>
		<ChevronRight className='size-5 text-primary group-hover:text-white m-auto' />
	</button>
);

export const ButtonWrapper = ({ children }) => <div className='group flex items-center justify-between'>{children}</div>;
