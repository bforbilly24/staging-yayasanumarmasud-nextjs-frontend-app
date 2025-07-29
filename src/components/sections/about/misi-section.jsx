'use client';

import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '../section';
import { TitleSection } from '../title-section';

function MisiSection() {
	return (
		<Section id='structure' className="font-['Poppins'] w-full">
			<MaxWidthWrapper>
				<TitleSection title='Misi' content="Yayasan Syech Maulana Umar Mas'ud" showButton={false} />
				<div className='flex flex-col gap-8 mt-6'>
					<div className='text-justify'>
						<h3 className='font-bold mt-4'>I. BIDANG SOSIAL</h3>
						<ol className='list-decimal pl-5'>
							<li>Melalui Lembaga Pendidikan Formal dan Non Formal terus berupaya meningkatkan, mengembangkan Pendidikan yang berstandar Nasional berdasarkan Agama Islam.</li>
							<li>Menjalin kerjasama dengan alumni atau pihak lain di bidang Pendidikan.</li>
							<li>Mengimplementasikan budaya Santri pada Pendidikan Formal dan non Formal di bawah Naungan Yayasan Syech Maulana Umar Mas’ud.</li>
						</ol>

						<h3 className='font-bold mt-4'>II. BIDANG KEAGAMAAN</h3>
						<ol className='list-decimal pl-5'>
							<li>Melaksanakan dan Meningkatkan pemahaman agama dan kegiatan keagamaan yang berhaluan Ahlussunnah Wal-Jama’ah An-Nahdiyah. Berakhlaqul Karimah.</li>
							<li>Menyelenggarakan Pondok Pesantren.</li>
							<li>Menghimpun Zakat, Infak dan Sedekah (ZIS) untuk 8 Asnaf.</li>
						</ol>

						<h3 className='font-bold mt-4'>III. BIDANG KEMANUSIAAN</h3>
						<ol className='list-decimal pl-5'>
							<li>Memberi bantuan kepada fakir miskin, anak yatim, siswa miskin, siswa berprestasi.</li>
							<li>Memberi bantuan kepada korban bencana.</li>
							<li>Melestarikan lingkungan hidup.</li>
						</ol>
					</div>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
}

export { MisiSection };
