import React from 'react';
import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({ className, children }) => {
	return <div className={cn('h-full mx-auto w-full max-w-full md:max-w-screen-xl px-4 md:px-12 lg:px-20', className)}>{children}</div>;
};

export default MaxWidthWrapper;
