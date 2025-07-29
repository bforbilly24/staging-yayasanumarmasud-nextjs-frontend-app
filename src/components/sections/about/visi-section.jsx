'use client';

import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '../section';
import { TitleSection } from '../title-section';

function VisiSection() {
	return (
		<Section id='structure' className="font-['Poppins'] w-full">
			<MaxWidthWrapper>
				<TitleSection title='Visi' content="Yayasan Syech Maulana Umar Mas'ud" showButton={false} />
				<div className='flex flex-col gap-8 mt-6'>
					<div className='text-justify'>Terwujudnya yayasan Yang mampu menjaga dan meningkatkan kehidupan Sosial, keagamaan dan kemanusiaan</div>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
}

export { VisiSection };
