const NAV_LINKS = [
	{
		name: 'Beranda',
		slug: '/',
		icon: 'HomeIcon',
		iconClass: (isActive) => `size-6 ${isActive ? 'text-cit-secondary' : 'text-primary'}`,
	},
	{
		name: 'Tentang Kami',
		slug: '/tentang-kami',
		icon: 'UsersRoundIcon',
		iconClass: (isActive) => `size-6 ${isActive ? 'text-cit-secondary' : 'text-primary'}`,
	},
	{
		name: 'Lembaga',
		slug: '/lembaga',
		icon: 'GraduationCapIcon',
		iconClass: (isActive) => `size-6 ${isActive ? 'text-cit-secondary' : 'text-primary'}`,
	},
	{
		name: 'Prestasi',
		slug: '/prestasi',
		icon: 'Medal',
		iconClass: (isActive) => `size-6 ${isActive ? 'text-cit-secondary' : 'text-primary'}`,
	},
	{
		name: 'Jendela Berita',
		slug: '/jendela-berita',
		icon: 'Newspaper',
		iconClass: (isActive) => `size-6 ${isActive ? 'text-cit-secondary' : 'text-primary'}`,
	},
	{
		name: 'Program Kerja',
		slug: '/program-kerja',
		icon: 'SquareChartGantt',
		iconClass: (isActive) => `size-6 ${isActive ? 'text-cit-secondary' : 'text-primary'}`,
	},
	{
		name: 'Dokumentasi Kegiatan',
		slug: '/dokumentasi-kegiatan',
		icon: 'BookOpenText',
		iconClass: (isActive) => `size-6 ${isActive ? 'text-cit-secondary' : 'text-primary'}`,
	},
];

export { NAV_LINKS };
