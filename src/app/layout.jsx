import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import { Poppins as Font } from 'next/font/google';
import { Footer } from '@/components/footer/footer';
import ConsoleLogger from '@/components/global/console-logger';
import ScrollToAnchor from '@/components/miscellaneous/scroll-to-anchor';
import { Header } from '@/components/navigation/header';
import { NavBar } from '@/components/navigation/navbar';
import { ProgressBarProvider } from '@/components/providers/progress-bar-provider';
import { SplashScreen } from '@/components/splash/splash-screen';
import { Toaster } from '@/components/ui/shadcn/sonner';
import '@/styles/globals.css';

const font = Font({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
	title: {
		template: '%s | Yayasan Syech Maulana Umar Masud',
		default: 'Yayasan Syech Maulana Umar Masud',
	},
	description: 'Yayasan Syech Maulana Umar Masud - Lembaga Pendidikan SMP, SMA, Ponpes, MTS, MINU, KB/TK, MA, SMK, dan MDU | Pulau Bawean, Gresik, Indonesia',
	keywords: 'bawean, gresik, indonesia, lembaga bawean, yayasan bawean, yayasan, umar masud baweanlembaga, sekolah, SMP, SMA, Ponpes, MTs, MINU, KB/TK, MA, SMK, MDU, yayasan syech maulana umar masud, syech maulana, yayasan syech, yayasan umar masud, umar masud, ysmumma, belly, supre, belly dan supre, circle it, circle it warehouse, cit',
};

export const viewport = {
	width: 'device-width',
	height: 'device-height',
	initialScale: 1.0,
	userScalable: false,
	targetDensitydpi: 'device-dpi',
};

export default function RootLayout({ children }) {
	return (
		<html lang='id' suppressHydrationWarning className='scroll-smooth'>
			<body className={`${font.className} overflow-hidden`}>
				<ThemeProvider attribute='class'>
					<ConsoleLogger />
					<ProgressBarProvider />
					<SplashScreen />
					<Header />
					<NavBar />
					<main className='h-fit w-full overflow-hidden flex flex-col'>{children}</main>
					<ScrollToAnchor />
					<Footer />
					<Toaster richColors position='top-right' />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
