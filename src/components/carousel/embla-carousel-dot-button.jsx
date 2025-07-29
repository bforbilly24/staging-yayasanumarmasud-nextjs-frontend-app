'use client';

import { useCallback, useEffect, useState } from 'react';

export const useDotButton = (emblaApi) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);

	const onDotButtonClick = useCallback(
		(index) => {
			if (!emblaApi) return;
			emblaApi.scrollTo(index);
		},
		[emblaApi],
	);

	const onInit = useCallback((api) => {
		setScrollSnaps(api.scrollSnapList());
	}, []);

	const onSelect = useCallback((api) => {
		setSelectedIndex(api.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);

		emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
	}, [emblaApi, onInit, onSelect]);

	return {
		selectedIndex,
		scrollSnaps,
		onDotButtonClick,
	};
};

export const DotButton = (props) => <button type='button' {...props} className={`w-3 h-3 rounded-full transition-all duration-300 mx-1 ${props.className || ''}`} />;
