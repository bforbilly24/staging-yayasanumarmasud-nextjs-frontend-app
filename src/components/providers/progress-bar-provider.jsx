'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import React from 'react';
import { cn } from '@/lib/utils';

export const ProgressBarProvider = React.forwardRef(({ className, ...props }, ref) => {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 50,
		restDelta: 0.001,
	});

	return (
		<motion.div
			ref={ref}
			className={cn('fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-[#0F4631] via-[#78B926] to-[#C7E023]', className)}
			style={{
				scaleX,
			}}
			{...props}
		/>
	);
});

ProgressBarProvider.displayName = 'ProgressBarProvider';
