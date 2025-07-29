import { LISTINSTITUTION as RAW_LISTINSTITUTION } from '@/constants/list-institution';
import { ImageUrl } from '@/lib/image-url';

const processInstitutionData = (institutions) => {
	return institutions.map((item) => ({
		...item,
		school: ImageUrl(item.school),
		icon: ImageUrl(item.icon),
		data: {
			...item.data,
			profile: ImageUrl(item.data.profile),
			links: item.data.links.map((link) => ({
				...link,
				image: ImageUrl(link.image),
			})),
			structures: item.data.structures.map((structure) => ({
				...structure,
				image: ImageUrl(structure.image),
			})),
		},
	}));
};

const LISTINSTITUTION = processInstitutionData(RAW_LISTINSTITUTION);

export { LISTINSTITUTION };
