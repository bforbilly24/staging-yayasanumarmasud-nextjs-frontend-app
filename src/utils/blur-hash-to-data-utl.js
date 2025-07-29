import { decode } from 'blurhash';

const blurhashToDataURL = (blurhash, width = 32, height = 32) => {
	if (!blurhash) return null;

	try {
		const pixels = decode(blurhash, width, height);

		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d');
		const imageData = ctx.createImageData(width, height);
		imageData.data.set(pixels);
		ctx.putImageData(imageData, 0, 0);

		return canvas.toDataURL('image/png');
	} catch (error) {
		console.error('Error converting blurhash to data URL:', error);
		return null;
	}
};

export { blurhashToDataURL };
