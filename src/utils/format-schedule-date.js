export function formatScheduleDate(dateString) {
	try {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const date = new Date(dateString);
		const now = new Date();
		const diff = date - now;

		const absoluteDiff = Math.abs(diff);
		const days = Math.floor(absoluteDiff / (1000 * 60 * 60 * 24));

		let relativeDate;
		if (Math.abs(days) > 7) {
			relativeDate = date.toLocaleDateString('id-ID', options);
		} else {
			relativeDate = diff > 0 ? `${days} hari lagi` : `${Math.abs(days)} hari yang lalu`;
		}

		const day = date.toLocaleDateString('id-ID', { weekday: 'long' });
		const formattedDate = date.toLocaleDateString('id-ID', options);
		const monthName = date.toLocaleDateString('id-ID', { month: 'long' }).toLowerCase();
		const year = date.getFullYear();

		const monthOrder = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];

		return {
			day,
			formattedDate,
			relativeDate,
			monthName,
			monthOrder,
			year,
			isFuture: diff > 0,
		};
	} catch (error) {
		console.error('Error formatting schedule date:', error);
		return {
			day: '',
			formattedDate: '',
			relativeDate: '',
			monthName: '',
			monthOrder: [],
			year: '',
			isFuture: false,
		};
	}
}
