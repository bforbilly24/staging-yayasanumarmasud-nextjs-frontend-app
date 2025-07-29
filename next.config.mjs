/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8000',
				pathname: '/storage/**',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '8000',
				pathname: '/storage/**',
			},
			{
				protocol: 'https',
				hostname: 'admin.ysmumma.com',
				pathname: '/storage/**',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/djbdhpdes/image/upload/**',
			},
		],
	},
};

export default nextConfig;
