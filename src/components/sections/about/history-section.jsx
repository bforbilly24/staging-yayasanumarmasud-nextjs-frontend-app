'use client';

import { useState } from 'react';
import MaxWidthWrapper from '@/components/miscellaneous/max-width-wrapper';
import { Section } from '../section';
import { TitleSection } from '../title-section';

function HistorySection() {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<Section id='structure' className="font-['Poppins'] w-full">
			<MaxWidthWrapper>
				<TitleSection title='Sejarah' content="Yayasan Syech Maulana Umar Mas'ud" showButton={false} />
				<div className='flex flex-col gap-8 mt-6'>
					<div className='text-justify'>
						<div className={`overflow-hidden ${isExpanded ? 'flex flex-col gap-4' : 'line-clamp-4'}`}>
							<p>
								Berdirinya Yayasan Syech Maulana Umar Mas’ud tidak bisa dipisahkan dari sejarah awal berdirinya Sekolah Menengah Pertama di Pulau Bawean yang bernama Sekolah Menengah Islam Nahdlatul Oelama (SMINO) pada tahun 1958. SMINO digagas oleh Bapak K. R. Sulaiman dan Bapak K.
								R. Abdurrahman. Bapak K. R. Sulaiman sebagai Pengurus Sekolah, sedangkan Bapak K. R. Abdurrahman sebagai Kepala SMINO. Dapat dibayangkan, pada saat SMINO berdiri di Kecamatan Sangkapura, Pulau Bawean, fasilitas komunikasi maupun transportasi antara Bawean dengan Ibu
								Kota Kabupaten Surabaya (sekarang Kabupaten Gresik) sangat terbatas. Modal transportasi Pulau Bawean dengan daratan Pulau Jawa hanya dilayani oleh perahu layar yang kelancarannya sangat tergantung pada angin dan gelombang. Sedangkan sarana komunikasi hanya melalui
								Kantor Telegram dan jasa surat-menyurat melalui Kantor Pos.
							</p>

							<p>
								Namun, di saat sulitnya komunikasi dan transportasi tersebut, kedua Tokoh Pendidikan Bawean tersebut dapat mendirikan Sekolah Lanjutan yang pertama di Pulau Bawean. Pada saat itu, di Gresik (dulu Kecamatan) hanya baru berdiri Sekolah Menengah Pertama Negeri (sekarang
								SMPN 1 Gresik) dan Sekolah Guru Bawah atau SGB (sekarang SMPN 2 Gresik) serta sekolah swasta SMINO. SMINO yang berpusat di Sangkapura hanya bertahan 4 tahun karena kekurangan tenaga pendidik (guru) dan akhirnya bubar pada tahun 1962. Namun, lulusan SMINO (berijazah)
								dengan ijazah lokal yang diketik di kertas yang agak kekuningan dan ditandatangani oleh kedua tokoh tersebut diakui oleh pemerintah dan dapat digunakan untuk melamar pekerjaan sebagai PNS serta melanjutkan sekolah ke jenjang yang lebih tinggi.
							</p>

							<p>
								Pada tahun 1967, Bapak K. R. Sulaiman bersama Bapak K. R. Abdurrahman kembali mendirikan Madrasah Muallimin Muallimat Nahdlatul Ulama (MMNU). Pada musyawarah atau rapat pertama yang bertempat di rumah K. R. Sulaiman, diputuskan bahwa Bapak K. R. Abdurrahman menjadi
								Direktur (Kepala Lembaga), sedangkan Bapak K. R. Moh. Hamim ditunjuk sebagai Ketua Pengurus Lembaga (Sekolah/Lembaga). Pada tahun 1968, Bapak K. R. Sulaiman mendirikan Madrasah Tsanawiyah Asysyafi’iyah yang muridnya khusus perempuan, dengan Kepala Madrasah langsung
								dijabat oleh Bapak K. R. Sulaiman, dibantu oleh Bapak K. R. Abdurrahim, yang kemudian pada periode berikutnya menjabat sebagai Kepala Madrasah.
							</p>

							<p>
								Kebijakan era Orde Baru banyak merugikan lembaga pendidikan, khususnya Sekolah/Madrasah di bawah naungan Nahdlatul Ulama (Partai NU). Usaha pemerintah (Partai Golkar) untuk melemahkan lembaga-lembaga di bawah naungan NU (Partai NU), misalnya Madrasah Ibtida’iyah
								Nahdlatul Ulama (MINU) diganti menjadi Madrasah Ibtida’iyah Ma’arif (MIM). Demikian juga dengan MMNU yang harus menyesuaikan dengan kebijakan pemerintah tersebut. Pengurus beserta pelaku pendidikan MMNU mengadakan rapat untuk mencari nama baru MMNU. Bapak K. R. Moh.
								Hamim mengusulkan nama MMNU diganti menjadi Madrasah “K. R. Sulaiman” untuk menghormati jasa beliau sebagai perintis dan pendiri MMNU (saat itu K. R. Sulaiman sudah wafat). Bapak K. R. Abdurrahman mengusulkan nama penyiar agama Islam yang pertama di Bawean, yaitu
								“Syech Maulana Umar Mas’ud,” untuk dijadikan nama MMNU. Dengan persetujuan peserta rapat, maka dibentuklah “Taman Pendidikan Islam Umar Mas’ud” (TPI UMMA) sebagai nama baru MMNU.
							</p>

							<p>
								Bapak K. R. Abdurrahman menunjuk Bapak MS. Waloeyo (anak angkat K. R. Abdurrahman) sebagai Kepala SMP UMMA pertama, kemudian digantikan oleh Bapak Moh. Yusuf Nafis dan terus menunjuk Bapak Moh. Hanafiah sebagai Kepala SMP UMMA. Mereka juga diminta untuk membuat logo
								TPI UMMA yang mempunyai ciri NU, Umar Mas’ud, pendidikan menuju masyarakat sejahtera dunia akhirat, yang logonya tetap dipakai sampai sekarang. Pada tahun 1972, ada Peraturan Menteri Pendidikan yang mengharuskan semua Pendidikan Guru Agama (PGA) berubah menjadi
								Madrasah Aliyah (MA), termasuk swasta. Maka, MMNU yang memakai kurikulum PGA terpecah menjadi beberapa lembaga pendidikan (sekolah/madrasah), yaitu PGA 4 tahun menjadi Madrasah Menengah Pertama Nahdlatul Ulama (MPNU), yang kemudian menjadi Sekolah Menengah Pertama
								Umar Mas’ud (SMP UMMA), dan PGA 6 tahun menjadi Madrasah Aliyah (MA). Berdasarkan usulan Bapak Cuk Sugrito (Kepala SMA UMMA yang pertama), didirikanlah SMA.
							</p>

							<p>
								Maka di bawah naungan TPI UMMA saat itu terdapat beberapa lembaga pendidikan, yaitu SMP, SMA, Madrasah Tsanawiyah Asysyafi’iyah (MTs) yang sudah menerima siswa putra-putri, dan Madrasah Aliyah (MA). Adapun sejarah berdirinya TK Umar Mas’ud bermula dari kelas 0 (nol)
								dari Madrasah Hidayatul Ouloum (MHO) yang ruang kelasnya di bawah langgar/surau di depan rumah Bapak K. R. Abdurrahman, dan sebagai guru pertama ialah Ibu Ustadzah R. Saidah. Walaupun saat itu belum bernama TK, Madrasah Kelas 0 (nol) ini sudah memberikan materi
								pelajaran Taman Kanak-Kanak. Sedangkan berdirinya Pondok Pesantren Khairo Ummah dilatarbelakangi oleh kenyataan bahwa banyak siswa TPI UMMA yang berasal dari luar Sangkapura yang mondok di rumah penduduk sekitar lingkungan TPI UMMA. Maka perlu ada wadah bagi siswa
								untuk memusatkan kegiatan keagamaan di luar sekolah, tapi tetap di lingkungan TPI UMMA.
							</p>

							<p>
								Bapak K. R. Moh. Hamim sebagai Ketua Pengurus sangat gigih menggalang dana, baik di Bawean maupun Singapura, untuk mewujudkan pembangunan Pondok Pesantren. Sebagai pengasuh Pondok, ditunjuk K. Hazin Zainuddin, dibantu oleh K. Abdullah Faqih yang kemudian mendirikan
								pondok pesantren sendiri. Pada tahun 1988, Yayasan Pendidikan Islam Umar Mas’ud menyesuaikan Anggaran Dasar/Azas Yayasan dengan Undang-Undang Nomor 8 Tahun 1985 tentang Organisasi Kemasyarakatan yang telah diundangkan dan berlaku di Negara Republik Indonesia.
								Penyesuaian ini merupakan hasil rapat tanggal 7 Juni 1988 di kediaman Alm. Bapak K. R. Sulaiman di Kebundaya, Desa Sawahmulya, Kecamatan Sangkapura, Kabupaten Gresik. Rapat mengambil keputusan dengan musyawarah mufakat sebagai berikut: Yayasan Islam Umar Mas’ud
								berdasarkan/berazazkan PANCASILA dan berlandaskan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, beraqidah Islamiyah berhaluan salah satu dari empat madzhab, Syafi’e, Hanafi, Maliki, dan Hambali.
							</p>

							<p>
								Kemudian pimpinan rapat (Bapak R. Hamim Nahrawi) mengemukakan masa jabatan kepengurusan untuk periode 1988 – 1991 perlu diadakan kepengurusan/pergantian pengurus baru sesuai dengan anggaran dasar Yayasan Pasal 6 Ayat 2. Kepengurusan ini terus berlangsung dan baru ada
								pergantian pengurus pada tahun 1994. Kepengurusan Yapi Umma periode yang lalu telah mengadakan rapat reformasi kepengurusan pada tanggal 15 Februari 1994 dan dinyatakan demisioner. Fakim kemudian menunjuk formatur: 1. Bapak Drs. Cuk Sugrito, 2. Bapak M. Hanafiah, yang
								diberi tugas menyusun pengurus lengkap Yapi Umma. Formatur dalam sidangnya telah berhasil menyusun kepengurusan dengan lengkap sesuai kebutuhan sebagaimana yang tercantum di bawah ini yang diketuai oleh Bapak Drs. Cuk Sugrito. Tetapi, belum sempat menghadap Notaris
								untuk mendapatkan akta notaris sebagaimana periode sebelumnya.
							</p>

							<p>
								Ketika Bapak K. R. Moh. Hamim sudah tidak lagi menjabat sebagai Ketua Yayasan, beliau terus berkiprah dalam pendidikan dan langsung mendirikan Madrasah Diniyah Ula Umar Mas’ud (MDU UMMA) bersama Ketua Pengurus Yayasan Pendidikan Islam Umar Mas’ud (Bapak Drs. Cuk
								Sugrito). Gedung/Bangunan Madrasah Diniyah Ula Umar Mas’ud (MDU UMMA) dibangun di sebelah Timur SMP UMMA Sangkapura. Bapak Drs. Cuk Sugrito sebagai Ketua Yayasan, di samping ikut mendirikan MDU Umma bersama Bapak K. R. Moh. Hamim, juga mendirikan Sekolah Menengah
								Kejuruan Umar Mas’ud (SMK UMMA) pada tahun 2013 yang berada di sekitar Air Panas Kebundaya, di sebelah Utara SMP UMMA Sangkapura, berdampingan dengan Pondok Pesantren Khoiro Ummah.
							</p>

							<p>
								Masa bakti kepengurusan Yapi Umma tahun 1994 - 1997 yang diketuai oleh Bapak Drs. Cuk Sugrito terus berlangsung sampai tahun 2015. Dalam perkembangan selanjutnya, pada tahun 2015, sesuai dengan kebutuhan, Yayasan Pendidikan Islam Umar Mas’ud (YAPI UMMA) berubah nama
								menjadi Yayasan Syech Maulana Umar Mas’ud sekaligus pergantian kepengurusan. Dalam pergantian Kepengurusan Yayasan Syech Maulana Umar Mas’ud, Dewan Pembina mengangkat Drs. R. Akhsanul Haq sebagai Ketua Yayasan yang baru sebagaimana yang tercantum pada Akta Pendirian
								Yayasan “Syech Maulana Umar Mas’ud Sangkapura Bawean” tanggal 23 Juli 2015, Nomor 39. Berdasarkan Permohonan Notaris BADRUS SALEH, SH sesuai Akta Pendirian Yayasan Syech Maulana Umar Mas’ud Sangkapura Bawean Nomor 39, Tanggal 23 Juli 2015 tentang Pengesahan Badan
								Hukum, maka sejak tanggal 27 Juli 2015, Yayasan Syech Maulana Umar Mas’ud Sangkapura telah berbadan hukum dengan Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Nomor AHU-0010025.AH.01.04.Tahun 2015. Yayasan Syech Maulana Umar Mas’ud Sangkapura Bawean
								menaungi beberapa lembaga pendidikan, yaitu: KB, TK, MDU, SMP, SMA, MTs, MA, MK Umma, Pondok Pesantren Khoiro Ummah, dan terakhir MINU 01 Sawahmulya.
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

export { HistorySection };
