'use client';

import { BookOpenText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerBanner } from '@/components/container/container-banner';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '@/components/sections/section';
import { Button } from '@/components/ui/shadcn/button';
import PrincipalSection from '../home/principal-section';
import StructuralSection from '../home/structural-section';
import { HistorySection } from './history-section';
import { LocationSection } from './location-section';
import { MisiSection } from './misi-section';
import { VisiSection } from './visi-section';

function AboutSection() {
	return (
		<>
			<ContainerBanner upperCamelCase={true} />
			<PrincipalSection />
			<VisiSection />
			<MisiSection />
			<StructuralSection />
			<LocationSection />
			<HistorySection />
		</>
	);
}

export { AboutSection };
