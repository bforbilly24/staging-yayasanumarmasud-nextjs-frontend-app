'use client';

import { useState } from 'react';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '../section';
import { TitleSection } from '../title-section';

function LocationSection() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<Section id='structure' className="font-['Poppins'] w-full">
			<MaxWidthWrapper>
				<TitleSection title='Letak Geografis' content="Yayasan Syech Maulana Umar Mas'ud" showButton={false} />
				<div className='flex flex-col gap-8 mt-6'>
					<div className='text-justify'>
						<div className={`overflow-hidden ${isExpanded ? 'flex flex-col gap-4' : 'line-clamp-4'}`}>
							<p>
								Yayasan Syech Maulana Umar Mas’ud adalah salah satu yayasan tertua di Pulau Bawean yang terletak di Dusun Kebundaya, Desa Sawahmulya, Kecamatan Sangkapura, Kabupaten Gresik, Provinsi Jawa Timur. Berada 100 meter di sebelah utara Kantor Kecamatan Sangkapura, di sebelah
								timur terdapat MDU UMMA, SMP Negeri 1 Sangkapura, SDIT Alhuda, dan SMA Negeri 1 Sangkapura. Sedangkan di sebelah barat terdapat Alun-Alun yang di sekitarnya ada Kantor Urusan Agama, Masjid Besar Sa’adatuddarain, Kantor Pengadilan Agama Bawean, Bank Jatim, SDN 1
								Sawahmulya, Kantor Samsat, Kantor Pendapatan Daerah, MTs, MA, SMA Umma, MINU 01 Umma, dan Madrasah Hidayatul Ulum. Di sebelah selatan terdapat Kantor Kecamatan Sangkapura, SDN 2 Sawahmulya, dan Rumah Sakit Umar Mas’ud Sangkapura.
							</p>
							<p>
								Dengan pusat pemerintahan Yayasan Syech Maulana Umar Mas’ud yang berada di sebelah utara Kabupaten Gresik, jaraknya kurang lebih 80 mil laut atau 120 km. Keberadaan yayasan pada dasarnya merupakan jawaban atas kebutuhan masyarakat itu sendiri untuk mendapatkan
								tuntunan yang benar, memperoleh pendidikan yang benar, dalam rangka mencapai tujuan dan harapan, agar dapat menata hidup dan kehidupan yang sejahtera serta selamat, baik di dunia maupun di akhirat.
							</p>
							<p>
								Yayasan Syech Maulana Umar Mas’ud bercita-cita untuk menjadi pusat pendidikan Islam yang berkarakter dan sistemik, yang terus-menerus melakukan pengembangan dan perubahan ke arah kemajuan dan kemaslahatan, sesuai dengan tuntutan masyarakat yang terus tumbuh dan
								berkembang. Penggagas, pendiri, dan pengurus Yayasan Syech Maulana Umar Mas’ud dari awal sampai sekarang adalah para kyai dan tokoh masyarakat Sangkapura, antara lain K. R. Sulaiman, K. Dhofir, K. R. Abdurrahman, K. R. Hamim Nahrawi, Alwi Mukri, Harun Al Rasyid, Umar
								S., K. Hazin Zainuddin, Cuk Sugrito, H. Moh. Hanafiah, Baharuddin, R. Moh. Ali Masyhar, MA, R. Abdurrachim, H. R. F. Arifin, Drs. Moh. Seneng, Drs. R. Akhsanul Haq, R. Abdul Aziz, M.Pd., dan Ir. H. Syariful Mizan.
							</p>
						</div>
						<button onClick={() => setIsExpanded(!isExpanded)} className='text-blue-600 hover:underline mt-2'>
							{isExpanded ? 'Tutup' : 'Baca Selengkapnya'}
						</button>
					</div>
				</div>
			</MaxWidthWrapper>
		</Section>
	);
}

export { LocationSection };
