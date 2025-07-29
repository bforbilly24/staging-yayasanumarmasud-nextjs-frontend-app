function NotReadyResponsive() {
	return (
		<div className='flex h-screen flex-col place-content-center items-center justify-center p-5 text-center lg:p-10 xl:hidden'>
			<div>[WARN]</div>
			<div>Harap gunakan perangkat desktop alih-alih menggunakan ponsel cerdas, tablet, atau desktop kecil untuk tujuan pengalaman pengguna yang terbaik!</div>
		</div>
	);
}

export { NotReadyResponsive };
